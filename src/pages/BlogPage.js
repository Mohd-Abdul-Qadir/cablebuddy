import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';

// @mui
import AddIcon from '@mui/icons-material/Add';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
// import { Grid, Button, Container, Stack, Typography, Box } from '@mui/material';
import {
  Card,
  Box,
  Button,
  Table,
  Stack,
  Paper,
  Avatar,
  Popover,
  Checkbox,
  Container,
  TableRow,
  styled,
  MenuItem,
  Grid,
  Typography,
  TableBody,
  Slide,
  TableCell,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
import Label from '../components/label';

import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// mock
import POSTS from '../_mock/blog';
import AddAgent from './AddAgent';
import USERLIST from '../_mock/user';
import AgentCard from './AgentCard';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];
const TABLE_HEAD = [
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

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}
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
  const navigate = useNavigate();

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

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

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];
  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
  //   }
  //   setSelected(newSelected);
  // };

  const handleClick = (tab) => {
    setTabs(tab);
  };
  const handleAgent = (event) => {
    setAgent(event.target.value);
    console.log(`e.target ${event.target.value}`);
  };

  const handleReset = () => {
    setAgent('');
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  // useEffect(() => {
  //   fetch('http://localhost:4001/api/agents')
  //     .then((response) => response.json())
  //     .then((data) => setAgents(data))
  //     .catch((error) => console.error(error));
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4001/api/agents', {
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

  console.log(agents, 'agent');

  const details = (id) => {
    navigate(`/dashboard/agent-details/${id}`);
  };
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
            // startIcon={<SummarizeOutlinedIcon />}
            onClick={() => handleClick('Summary')}
          >
            General Details
          </StyledButton>
          <StyledButton
            variant={tabs === 'OnlineTransaction' ? 'contained' : 'text'}
            selected={tabs === 'OnlineTransaction'}
            // startIcon={<PaymentsOutlinedIcon />}
            onClick={() => handleClick('OnlineTransaction')}
          >
            Present/Absent
          </StyledButton>
        </Paper>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['SingleInputDateRangeField']}>
        <DateRangePicker slots={{ field: SingleInputDateRangeField }} />
      </DemoContainer>
    </LocalizationProvider> */}

        <Card>
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {agents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow hover tabIndex={-1} role="checkbox" key={row._id}>
                        <TableCell padding="checkbox">
                          <Checkbox />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            {/* <Avatar alt={name} src={avatarUrl} /> */}
                            <Typography variant="subtitle2" noWrap>
                              {row.name}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell align="left">{row.number}</TableCell>

                        <TableCell align="left">₹ 1027455 From 2939 Customer</TableCell>
                        <TableCell align="left">₹ 3036 From 5 Customer</TableCell>
                        <TableCell align="left">₹ 0 From 0 Custome</TableCell>
                        <TableCell align="left">
                          <Button variant="outlined" onClick={() => details(row._id)}>
                            Details
                          </Button>
                          <Button variant="outlined" sx={{ marginLeft: '10px' }}>
                            Login
                          </Button>
                        </TableCell>

                        {/* <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell> */}

                        {/* <TableCell align="left">
                          <Label color={(status === 'banned' && 'error') || 'success'}>{sentenceCase(status)}</Label>
                        </TableCell> */}

                        {/* <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell> */}
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
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
