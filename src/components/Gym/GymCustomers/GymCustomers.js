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
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../../../sections/@dashboard/user';
// mock
import USERLIST from '../../../_mock/user';
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

export default function GymCustomers() {
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
        navigate(`/gym/addcustomers`);
    };

    const handleCustomerDetails = (id) => {
        navigate(`/gym/customer-details/${id}`);
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
                    <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Gym Customers</Typography>
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

                <Card sx={{ border: '1px solid #D8D8D8', marginTop: '2rem' }}>
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
