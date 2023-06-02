import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

// @mui
import {
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
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Box,
  FormControl,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
  const [action, setAction] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [area, setArea] = useState('');
  const [balance, setBalance] = useState('');

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
            <Stack padding="1rem" gap="10px">
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
                  <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>
                    Bulk Action
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={action}
                    label="Bulk Action"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Bulk Action</MenuItem>
                    <MenuItem value={20}>Clear Balance</MenuItem>
                    <MenuItem value={30}>Renew</MenuItem>
                  </Select>
                </FormControl>
                <Button variant="outlined">Apply (0)</Button>
                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Select Date Follow Up" />
                  </LocalizationProvider>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                  <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>
                    Select Status
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={status}
                    label="Select Status"
                    onChange={handleStatus}
                  >
                    <MenuItem value={10}>Active</MenuItem>
                    <MenuItem value={20}>Inactive</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                  <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>
                    Select Area
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={area}
                    label="Select Area"
                    onChange={handleArea}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                  <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>
                    Select Balance
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={balance}
                    label="Select Balance"
                    onChange={handleBalance}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack direction="row" justifyContent="space-between" gap="2rem" px="5px">
                {/* <Paper component="form" sx={{
                                height: '40px', display: 'flex', alignItems: 'center', width: '50%', bgcolor: '#F8F8F8'
                            }}>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search For..."
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="button" sx={{ height: 'fit-content', color: 'white', bgcolor: '#2065D1', borderRadius: '2px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper> */}
                <Box sx={{ display: 'flex', gap: '20px', width: '50%' }}>
                  <Paper
                    component="form"
                    sx={{
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      bgcolor: '#F8F8F8',
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1, textTransform: 'capitalize' }}
                      placeholder="Select Date For Renewal/Expired"
                      inputProps={{ 'aria-label': 'search google maps' }}
                    />
                  </Paper>
                  <Button variant="contained" startIcon={<RestartAltIcon />} sx={{ width: 'fit-content' }}>
                    Reset
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Card sx={{ border: '1px solid #D8D8D8' }}>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
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
            </div>
          </Card>

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
                  {customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow hover key={row.scode} tabIndex={-1} role="checkbox">
                        <TableCell padding="checkbox">
                          <Checkbox />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Typography variant="subtitle2" noWrap>
                              {/* {row.name} */}
                              {'1'}
                            </Typography>
                          </Stack>
                        </TableCell>

                        {/* <TableCell align="left">{role}</TableCell> */}

                        {/* <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell> */}

                        {/* <TableCell align="left">
                          <Label color={(status === 'banned' && 'error') || 'success'}>{sentenceCase(status)}</Label>
                        </TableCell> */}
                        <TableCell>{row.name}</TableCell>
                        <TableCell align="left">DSNW20e8c240</TableCell>
                        <TableCell>{row.subdcriptionAmount}</TableCell>
                        <TableCell>{row.address}</TableCell>
                        <TableCell align="center">15</TableCell>
                        <TableCell align="left">22/05/2022</TableCell>
                        <TableCell align="left">
                          <Label color={'success'}>
                            {/* {sentenceCase(status)} */}
                            Active
                          </Label>
                        </TableCell>

                        <TableCell>
                          <Button variant="outlined" onClick={() => handleCustomerDetails(row._id)}>
                            Detail
                          </Button>
                        </TableCell>

                        <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
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
