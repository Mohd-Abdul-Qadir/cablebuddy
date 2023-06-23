import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { v4 as uuidv4 } from 'uuid';

// @mui
import {
  TextField,
  Card,
  Table,
  Stack,
  Paper,
  InputLabel,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableHead,
  Container,
  Typography,
  Select,
  TableContainer,
  TablePagination,
  Box,
  FormControl,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
// components
import { filter } from 'lodash';
import { useNavigate } from 'react-router-dom';

import Label from '../components/label';
// mock
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
import USERLIST from '../_mock/user';
import Scrollbar from '../components/scrollbar';
import AddChannels from './AddChannels';
// ----------------------------------------------------------------------
const TABLE_HEAD = [
  { id: 'company', label: 'S.No', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'role', label: 'Rate', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'isVerified', label: 'Action', alignRight: false },
];

export default function ProductsPage() {
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
  const [searchQuery, setSearchQuery] = useState('');

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

  const details = (id) => {
    navigate(`/dashboard/details/${id}`);
  };

  const handleDownload = () => {
    fetch('/api/product-download')
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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = products.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

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

    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <>
      <Helmet>
        <title> Dashboard: Products </title>
      </Helmet>

      <Container>
        <Box sx={{ marginBottom: '20px' }}>
          <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Products</Typography>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}
              onClick={() => navigate('/dashboard/add-product')}
            >
              {' '}
              Add Channel/ Bouquet
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

        <Stack
          sx={{
            border: '1px solid #D8D8D8',
            boxShadow: '-1px -1px 8px #D8D8D8,3px 3px 8px #D8D8D8',
            borderRadius: '10px',
            bgcolor: 'white',
            width: '100%',
            marginBottom: '20px',
            mt: '25px',
          }}
        >
          <Box
            sx={{
              bgcolor: '#F5F5F5',
              borderBottom: '1px solid #D8D8D8',
              padding: '14px',
              borderRadius: '10px 10px 0 0',
            }}
          >
            <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Filters And Option</Typography>
          </Box>
          <Stack padding="2%" gap="10px">
            <Stack>
              <Stack direction="row" alignItems="center">
                <FormControl sx={{ m: 1, width: '100%' }} size="small">
                  <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>
                    Select Date Follow Up
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    value={filterPackage}
                    onChange={(e) => setFilterPackage(e.target.value)}
                    id="demo-select-small"
                    label="Select Package Type"
                  >
                    <MenuItem value="">Please Select One</MenuItem>
                    <MenuItem value="Channel">Channel</MenuItem>
                    <MenuItem value="Broadcaster Bouqet">Broadcaster Bouqet</MenuItem>
                    <MenuItem value="My Package">My Package</MenuItem>
                    <MenuItem value="Base Pack">Base Pack</MenuItem>
                  </Select>
                </FormControl>
                <Button variant="contained" startIcon={<RestartAltIcon />}>
                  Reset
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Card sx={{ border: '1px solid #D8D8D8', boxShadow: '-1px -1px 8px #D8D8D8,3px 3px 8px #D8D8D8' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between">
            <UserListToolbar value={searchQuery} onChange={handleSearch} onFilterName={handleSearch} />
            <Button
              startIcon={<FileDownloadOutlinedIcon />}
              onClick={handleDownload}
              color="success"
              variant="outlined"
              sx={{ height: '50px', margin: '20px 20px', color: '#229A16' }}
            >
              Download Excel
            </Button>
          </Stack>

          <Scrollbar>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell>S.No</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Rate</StyledTableCell>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                    <StyledTableRow key={uuidv4()} tabIndex={-1} role="checkbox">
                      <StyledTableCell>
                        <Checkbox />
                      </StyledTableCell>
                      <StyledTableCell align="left">{index + 2231}</StyledTableCell>
                      <StyledTableCell component="th" scope="row" padding="none">
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
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.price}</StyledTableCell>
                      <StyledTableCell align="left">
                        <Label color={'success'}>
                          {/* {sentenceCase(status)} */}
                          Active
                        </Label>
                      </StyledTableCell>

                      <StyledTableCell align="left" sx={{ cursor: 'pointer' }} onClick={() => details(row._id)}>
                        {/* <Label>Details</Label> */}
                        <Button variant="outlined">Details</Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  {emptyRows > 0 && (
                    <StyledTableRow style={{ height: 53 * emptyRows }}>
                      <StyledTableCell colSpan={6} />
                    </StyledTableRow>
                  )}
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
