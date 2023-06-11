import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
// @mui
import {
    Avatar,
    Box,
    Button,
    Card,
    Checkbox,
    Container,
    FormControl,
    IconButton,
    InputBase,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Typography,
} from '@mui/material';
// components
import { sentenceCase } from 'change-case';
import { filter } from 'lodash';
import { useNavigate } from 'react-router-dom';

import Label from '../../../components/label';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../../../sections/@dashboard/products';
// mock
import PRODUCTS from '../../../_mock/products';
import { UserListHead, UserListToolbar } from '../../../sections/@dashboard/user';
import USERLIST from '../../../_mock/user';
import Scrollbar from '../../../components/scrollbar';
// import AddChannels from '../';
// ----------------------------------------------------------------------
const TABLE_HEAD = [
    { id: 'company', label: 'S.No', alignRight: false },
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'role', label: 'Rate', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: 'isVerified', label: 'Action', alignRight: false },
    // { id: '' },
];
export default function GymProducts() {
    const [openFilter, setOpenFilter] = useState(false);
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(null);
    const [filterName, setFilterName] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [orderBy, setOrderBy] = useState('name');
    const [order, setOrder] = useState('asc');
    const [products, setProducts] = useState([]);
    const [popup, setPopup] = useState(false);
    const [filterPackage, setFilterPackage] = useState('');

    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
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
    const handleFilterByName = (event) => {
        setPage(0);
        setFilterName(event.target.value);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };
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
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

    const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

    const isNotFound = !filteredUsers.length && !!filterName;
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/products', {
            method: 'GET',
            headers: {
                'x-access-token': `${localStorage.getItem('accessToken')}`,
            },
        })
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    // console.log(products._id);

    const details = (id) => {
        navigate(`/gym/details/${id}`);
    };

    const handleDownload = () => {
        fetch('/api/agent-download')
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

    const filterData = () => {
        return products.filter((product) => product.select.toLowerCase().includes(filterPackage.toLocaleLowerCase()));
    };

    return (
        <>
            <Helmet>
                <title> Dashboard: Products </title>
            </Helmet>

            <Container>
                <Box sx={{ marginBottom: '20px' }}>
                    <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Gym Products</Typography>
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Button
                            variant="outlined"
                            startIcon={<AddIcon />}
                            sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}
                            onClick={() => navigate('/gym/addproducts')}
                        >
                            {' '}
                            Add Products
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<SystemUpdateAltOutlinedIcon />}
                            sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}
                        >
                            Import Products
                        </Button>
                    </Box>
                </Box>

                <Card>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
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
                                    {filterData()
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {
                                            return (
                                                <TableRow hover tabIndex={-1} role="checkbox" key={row._id}>
                                                    <TableCell padding="checkbox">
                                                        <Checkbox />
                                                    </TableCell>
                                                    <TableCell align="left">{index + 2231}</TableCell>

                                                    <TableCell component="th" scope="row" padding="none">
                                                        <Stack
                                                            direction="row"
                                                            alignItems="center"
                                                            spacing={2}
                                                            sx={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px' }}
                                                        >
                                                            {/* <Avatar alt={name} src={avatarUrl} /> */}
                                                            <Typography variant="subtitle2" noWrap>
                                                                {row.name}
                                                            </Typography>
                                                            {row.select === 'Broadcaster Bouqet' && (
                                                                <Typography>
                                                                    <AddChannels />
                                                                </Typography>
                                                            )}
                                                        </Stack>
                                                    </TableCell>

                                                    <TableCell align="left">{row.price}</TableCell>
                                                    <TableCell align="left">
                                                        <Label color={'success'}>
                                                            {/* {sentenceCase(status)} */}
                                                            Active
                                                        </Label>
                                                    </TableCell>

                                                    <TableCell align="left" sx={{ cursor: 'pointer' }} onClick={() => details(row._id)}>
                                                        {/* <Label>Details</Label> */}
                                                        <Button variant="outlined">Details</Button>
                                                    </TableCell>

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

                                {isNotFound &&
                                {
                                    /* <TableBody>
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
                                </TableBody> */
                                }}
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
                {/* {popup ? <AddChannels /> : null} */}
                {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack> */}

                {/* <ProductList products={PRODUCTS} />
        <ProductCartWidget /> */}
            </Container>
        </>
    );
}
