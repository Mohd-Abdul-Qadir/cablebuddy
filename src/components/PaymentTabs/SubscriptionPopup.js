import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { filter } from 'lodash';
import {
  Button,
  Checkbox,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FolderIcon from '@mui/icons-material/Folder';
import { useNavigate } from 'react-router-dom';
import Label from '../../components/label';
import Scrollbar from '../../components/scrollbar';
import { UserListHead, UserListToolbar } from '../../sections/@dashboard/user';
import USERLIST from '../../_mock/user';
import TelegramIcon from '@mui/icons-material/Telegram';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'role', label: 'HD/SD', alignRight: false },
  { id: 'isVerified', label: 'Pay/Fta', alignRight: false },
  { id: 'status', label: 'Genre', alignRight: false },
  { id: 'status', label: 'laguage', alignRight: false },
  { id: 'status', label: 'Price', alignRight: false },
  { id: 'status', label: 'Check', alignRight: false },
  { id: '' },
];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper': {
    maxWidth: '880px',
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function SubscriptionPopup(props) {
  const [open, setOpen] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [filterName, setFilterName] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [orderBy, setOrderBy] = React.useState('name');
  const [order, setOrder] = React.useState('asc');
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [products, setProducts] = React.useState([]);
  const [popup, setPopup] = React.useState(false);
  const [data, setData] = React.useState(props.customer);
  const [subdcriptionAmount, setSubdcriptionAmount] = React.useState();
  const [searchQuery, setSearchQuery] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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

  const handlePrice = (price, id) => {
    console.log(price, id, 'here');

    setProducts(
      products.map((product) => {
        if (product._id === id) {
          product.type = true;
        }
        return product;
      })
    );
    console.log(totalPrice, 'toatal price here');
    const value = totalPrice + parseInt(price, 10);
    console.log(value, 'value here');
    setTotalPrice(value);
    setSubdcriptionAmount(value);
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

  const updateCustomer = async () => {
    const url = `/api/update-customer/${data._id}`;

    // Define the updated customer data
    const updatedCustomer = {
      subdcriptionAmount,
      // name,
      // billingName,
      // billingArea,
      // billingNo,
      // mobileNo1,
      // mobileNo2,
      // email,
      // securityDeposit,
      // address,
      // gstNo,
      // customerCode,
      // remark,
      //   startDate,
      //   openingBalanceRadio,
      //   openingBalanceAmount,
      //   additionalChargeDiscount,
      //   additionalChargeRadio,
      //   billDurationRadio,
      //   billDurationSelect,
      //   billTypeRadio,
      //   gstTypeRadio,
    };

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCustomer),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      console.log('Customer updated successfully:', data.customer);
      // Do something with the updated customer data
    } catch (error) {
      console.error('Error updating customer:', error.message);
      // Handle the error
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = products.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <Button variant="contained" endIcon={<TelegramIcon />} sx={{ ml: 'auto' }} onClick={handleClickOpen}>
        Change Subscription
      </Button>

      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Subscription
        </BootstrapDialogTitle>

        <DialogContent dividers sx={{ width: '850px' }}>
          {/* <Select
            // value={genre}
            // onChange={handleGener}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{
              width: '33%',
              backgroundColor: '#F8F8F8',
              color: '#A5A4A4',
              borderColor: '#ccc',
              ':active': {
                borderColor: 'red', // Set border color to red when clicked
              },
            }}
          >
            <MenuItem value="">Select Genre</MenuItem>
            <MenuItem value="Business News">Business News</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
            <MenuItem value="Cooking">Cooking</MenuItem>
            <MenuItem value="Music">Music</MenuItem>
            <MenuItem value="News">News</MenuItem>
            <MenuItem value="Movies">Movies</MenuItem>
            <MenuItem value="Religious">Religious</MenuItem>
            <MenuItem value="Infotainment">Infotainment</MenuItem>
            <MenuItem value="Lifestyle">Lifestyle</MenuItem>
            <MenuItem value="Kids">Kids</MenuItem>
            <MenuItem value="Shopping">Shopping</MenuItem>
            <MenuItem value="Sports">Sports</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select> */}
          <UserListToolbar value={searchQuery} onChange={handleSearch} onFilterName={handleSearch} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: '100%' }}>
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
                  {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, role, status, company, avatarUrl, isVerified } = row;
                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, name)} />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            {/* <Avatar alt={name} src={avatarUrl} /> */}
                            <Typography variant="subtitle2" noWrap>
                              {row.name}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell align="left">{row.type}</TableCell>

                        <TableCell align="left">pay</TableCell>
                        <TableCell align="left">{row.genre}</TableCell>

                        <TableCell align="left">
                          <Label>{row.language}</Label>
                        </TableCell>
                        <TableCell align="left">
                          <Label>{row.price}</Label>
                        </TableCell>
                        <TableCell align="left">
                          <Button
                            startIcon={<AddIcon />}
                            variant="outlined"
                            disabled={row.type}
                            onClick={() => {
                              handlePrice(row.price, row._id);
                            }}
                          >
                            {row.type === false ? 'Add' : 'Added'}
                          </Button>
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
        </DialogContent>
        {/* </Card> */}
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Submit
          </Button> */}
          <Button
            variant="contained"
            color="primary"
            onClick={updateCustomer}
            // onClick={handleSubmit}
          >
            Submit ({totalPrice})
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
