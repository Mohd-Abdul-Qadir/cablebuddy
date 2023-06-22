import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';

// @mui
import { TextField, Card, Table, Stack, Paper, InputLabel, Button, Popover, Checkbox, TableRow, MenuItem, TableBody, TableHead, Container, Typography, Select, TableContainer, TablePagination, Box, FormControl } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
// components
import Scrollbar from '../components/scrollbar';
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock
import AddAgent from '../components/Agent/AddAgent';
import USERLIST from '../_mock/user';
import AgentCard from '../components/Agent/AgentCard';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'S.No.', label: 'S.No.', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Mobile', alignRight: false },
  { id: 'role', label: 'Total Collection', alignRight: false },
  { id: 'isVerified', label: 'Monthly Total Collection', alignRight: false },
  { id: 'status', label: 'Todays Collection', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
  { id: '' },
];
// ----------------------------------------------------------------------
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const StyledButton = styled(Button)(({ theme, selected }) => ({
  padding: '14px',
  color: selected ? '#fff' : theme.palette.text.primary,
  backgroundColor: selected ? '#2065D1' : 'transparent',
  '&:hover': {
    backgroundColor: selected ? '#2065D1' : theme.palette.action.hover,
  },
}));

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgb(12, 53, 71)',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function BlogPage() {
  const [open, setOpen] = useState(null);
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [agents, setAgents] = useState([]);
  const [agent, setAgent] = useState('');
  const [tabs, setTabs] = useState('Summary');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleCloseMenu = () => {
    setOpen(null);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (tab) => {
    setTabs(tab);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  // const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - agents.length) : 0;

  // const filteredUsers = applySortFilter(agents, getComparator(order, orderBy), filterName);

  // const isNotFound = !filteredUsers.length && !!filterName;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/agents', {
          headers: { 'x-access-token': `${localStorage.getItem('accessToken')}`, 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        setAgents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const details = (id) => {
    navigate(`/dashboard/agent-details/${id}`);
  };

  const handleLogin = async (number) => {
    try {
      const response = await fetch(`/api/agentloginbyadmin/${number}`, {
        headers: { 'x-access-token': `${localStorage.getItem('accessToken')}`, 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      localStorage.agentToken = data.token;
      navigate('/agent/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = agents.filter(
    (item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.number.includes(searchQuery)
  );

  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Container>
        <Box sx={{ marginBottom: '20px' }}>
          <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Agents</Typography>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <AddAgent />
          </Box>
        </Box>
        <AgentCard />
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            border: '1px solid #D8D8D8',
            gap: '10px',
            bgcolor: 'white',
            width: '100%',
            height: '38px',
            padding: 0,
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        >
          <StyledButton
            variant={tabs === 'Summary' ? 'contained' : 'text'}
            selected={tabs === 'Summary'}
            onClick={() => handleClick('Summary')}
          >
            General Details
          </StyledButton>
          {/* <StyledButton
            variant={tabs === 'OnlineTransaction' ? 'contained' : 'text'}
            selected={tabs === 'OnlineTransaction'}
            onClick={() => handleClick('OnlineTransaction')}
          >
            Present/Absent
          </StyledButton> */}
        </Paper>

        <Card sx={{ border: '1px solid #D8D8D8', boxShadow: '-1px -1px 8px #D8D8D8,3px 3px 8px #D8D8D8' }}>
          <UserListToolbar value={searchQuery} onChange={handleSearch} onFilterName={handleSearch} />

          <Scrollbar>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell>S.No</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Mobile</StyledTableCell>
                    <StyledTableCell>Total Collection</StyledTableCell>
                    <StyledTableCell>Monthly Total Collection</StyledTableCell>
                    <StyledTableCell>Todays Collection</StyledTableCell>
                    <StyledTableCell>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                      <StyledTableRow hover tabIndex={-1} role="checkbox" key={row._id}>
                        <StyledTableCell padding="checkbox"></StyledTableCell>

                        <StyledTableCell align="left">{index + 1}</StyledTableCell>

                        <StyledTableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Typography variant="subtitle2" noWrap>
                              {row.name}
                            </Typography>
                          </Stack>
                        </StyledTableCell>

                        <StyledTableCell align="left">{row.number}</StyledTableCell>

                        <StyledTableCell align="left">₹ 1027455 From 2939 Customer</StyledTableCell>
                        <StyledTableCell align="left">₹ 3036 From 5 Customer</StyledTableCell>
                        <StyledTableCell align="left">₹ 0 From 0 Custome</StyledTableCell>
                        <StyledTableCell align="left">
                          <Button variant="outlined" onClick={() => details(row._id)}>
                            Details
                          </Button>
                          <Button
                            variant="outlined"
                            sx={{ marginLeft: '10px' }}
                            onClick={() => handleLogin(row.number)}
                          >
                            Login
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </>
  );
}
