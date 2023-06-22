import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { v4 as uuidv4 } from 'uuid';

// @mui
import {
  TextField,
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableHead,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Box,
  FormControl,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

// components
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'scode', label: 'S.Code', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'hardware', label: 'Hardware', alignRight: false },
  { id: 'balance', label: 'Balance', alignRight: false },
  { id: 'area', label: 'Area', alignRight: false },
  { id: 'lastbillamount', label: 'Last Bill Amount', alignRight: false },
  { id: 'expired', label: 'Expired', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

// ........................................................Main_Function.......................................................//

export default function CustomersPage() {
  const [open, setOpen] = useState(null);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [customers, setCustomers] = useState([]);
  const [action, setAction] = useState('bulkAction');
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState('active');
  const [area, setArea] = useState('largeArea');
  const [balance, setBalance] = useState('balance1');

  const handleChange = (event) => {
    setAction(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleArea = (event) => {
    setArea(event.target.value);
  };
  const handleBalance = (event) => {
    setBalance(event.target.value);
  };

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

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
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

  const navigate = useNavigate();

  const handleAddCustomer = () => {
    navigate(`/dashboard/add-customer`);
  };

  const handleCustomerDetails = (id) => {
    navigate(`/dashboard/customer-details/${id}`);
  };

  useEffect(() => {
    fetch('/api/customers', {
      method: 'GET',
      headers: {
        'x-access-token': `${localStorage.getItem('accessToken')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDownload = () => {
    fetch('/api/customer-download')
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'product.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <>
      <Helmet>
        <title> User | Customer </title>
      </Helmet>

      <Container>
        <Box sx={{ mb: '1rem' }}>
          <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Customers</Typography>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button
              variant="outlined"
              onClick={() => {
                handleAddCustomer();
              }}
              startIcon={<PersonAddAltOutlinedIcon />}
              sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}
            >
              Add New Customers
            </Button>
            <Button
              variant="outlined"
              startIcon={<SystemUpdateAltOutlinedIcon />}
              sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}
            >
              Import Customers
            </Button>
          </Box>
        </Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          marginBottom="20px"
          width="100%"
          top="55%"
          gap="2rem"
        >
          <Stack
            sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%', mt: '1rem' }}
          >
            <Box
              sx={{ bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0' }}
            >
              <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Filters And Option</Typography>
            </Box>
            <Stack padding="2%" gap="10px">
              <Stack
                gap="15px"
                flexWrap={{ xs: 'wrap', lg: 'nowrap' }}
                direction={{ xs: 'column', sm: 'row' }}
                alignItems="center"
                justifyContent="space-between"
              >
                <TextField fullWidth select value={action} onChange={handleChange}>
                  <MenuItem value={'bulkAction'}>Bulk Action</MenuItem>
                  <MenuItem value={'clearBalance'}>Clear Balance</MenuItem>
                  <MenuItem value={'renew'}>Renew</MenuItem>
                </TextField>

                <Button fullWidth variant="outlined" sx={{ px: '0px' }}>
                  Apply (0)
                </Button>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']} sx={{ width: '100%', padding: '0px' }}>
                    <Box fullWidth>
                      <DatePicker
                        label="Select Date Follow Up"
                        value={date}
                        onChange={(newValue) => setValue(newValue)}
                        sx={{ width: '100%' }}
                      />
                    </Box>
                  </DemoContainer>
                </LocalizationProvider>

                <TextField fullWidth select value={status} onChange={handleStatus}>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inActive">Inactive</MenuItem>
                </TextField>

                <TextField fullWidth select value={area} onChange={handleArea}>
                  <MenuItem value="largeArea">Large Area</MenuItem>
                  <MenuItem value="smallArea">Small Area</MenuItem>
                </TextField>

                <TextField fullWidth select value={balance} onChange={handleBalance}>
                  <MenuItem value="balance1">Balance 1</MenuItem>
                  <MenuItem value="balance2">Balance 2</MenuItem>
                </TextField>
              </Stack>
              <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" gap="15px" sx={{ width: '100%' }}>
                <Paper
                  elevation={2}
                  component="form"
                  sx={{
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    px: '10px',
                    bgcolor: '#F8F8F8',
                  }}
                >
                  <InputBase
                    sx={{ flex: 1, textTransform: 'capitalize' }}
                    placeholder="Select Date For Renewal/Expired"
                    inputProps={{ 'aria-label': 'search google maps' }}
                  />
                </Paper>
                <Button variant="contained" startIcon={<RestartAltIcon />} sx={{ ml: 'auto', width: 'fit-content' }}>
                  Reset
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Card sx={{ border: '1px solid #D8D8D8' }}>
          <Card>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' } }}>
              <UserListToolbar
                numSelected={selected.length}
                filterName={filterName}
                onFilterName={handleFilterByName}
              />
              <Button
                startIcon={<FileDownloadOutlinedIcon />}
                onClick={handleDownload}
                color="success"
                variant="outlined"
                sx={{ height: '50px', margin: '20px 20px', color: '#229A16' }}
              >
                Download Excel
              </Button>
            </Box>
          </Card>

          <Scrollbar>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell>S.Code</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Hardware</StyledTableCell>
                    <StyledTableCell>Balance</StyledTableCell>
                    <StyledTableCell>Area</StyledTableCell>
                    <StyledTableCell>Last Bill Amount</StyledTableCell>
                    <StyledTableCell>Expired</StyledTableCell>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                    <StyledTableRow key={uuidv4()} tabIndex={-1} role="checkbox">
                      <StyledTableCell>
                        <Checkbox />
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography variant="subtitle2" noWrap>
                          {index + 1}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell>{row.name}</StyledTableCell>
                      <StyledTableCell align="left">DSNW20e8c240</StyledTableCell>
                      <StyledTableCell>{row.subdcriptionAmount}</StyledTableCell>
                      <StyledTableCell>{row.address}</StyledTableCell>
                      <StyledTableCell align="center">15</StyledTableCell>
                      <StyledTableCell align="left">22/05/2022</StyledTableCell>
                      {/* <StyledTableCell align="left">
                        <Label color={'success'}>Active</Label>
                      </StyledTableCell> */}
                      <StyledTableCell align="left">
                        <Label color={row.active === true ? 'success' : 'error'}>
                          {row.active === true ? 'Active' : 'Inactive'}
                        </Label>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Button variant="outlined" onClick={() => handleCustomerDetails(row._id)}>
                          Detail
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  {emptyRows > 0 && (
                    <StyledTableRow style={{ height: 53 * emptyRows }}>
                      <StyledTableCell colSpan={6} />
                    </StyledTableRow>
                  )}
                </TableBody>
                {isNotFound && (
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell align="center" colSpan={6} sx={{ py: 3 }}>
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
                      </StyledTableCell>
                    </StyledTableRow>
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

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}
