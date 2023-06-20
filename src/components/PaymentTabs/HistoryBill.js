import React, { useEffect, useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Box, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import CollectPopUp from '../Customer/CollectPopUp';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper': {
    maxWidth: '1500px',
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

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit, hsn, discount, additional, gst) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price, hsn, discount, additional, gst };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [createRow(100, 10, 1.15, 12, 25, 63, 85)];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function HistoryBill(props) {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const { id, allDataId } = props;

  const [data, setData] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const componentRef = useRef();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users`, {
          headers: {
            'x-access-token': `${localStorage.getItem('accessToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching user');
        }

        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  console.log(id, 'this is id for bill');
  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Bill
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Stack
            sx={{
              border: '1px solid #D8D8D8',
              borderRadius: '10px',
              bgcolor: 'white',
              width: '1200px',
            }}
            ref={componentRef}
          >
            <Box
              sx={{ bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '10px', borderRadius: '10px 10px 0 0' }}
            >
              <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Invoice Date :</Typography>
            </Box>
            <Stack padding="0.8rem">
              <Stack>
                {/* <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                  <div style={{ width: '250px' }}>
                    <h4>From :</h4>

                    <h4>{user.agency}</h4>
                    <p>{user.city}</p>
                    <p>{user.address}</p>
                    <p>Phone{user.number}</p>
                    <p>GST{user.gstnumber}</p>
                  </div>
                  <div style={{ width: '250px' }}>
                    <h4>To :</h4>
                    <p>{data.name}</p>
                    <p>
                      Customer Code: <span>{data.customerCode}</span>
                    </p>
                    <p>
                      Phone:<span>{data.mobileNo1}</span>
                    </p>
                    <p>
                      GST:<span>{data.gstNo}</span>
                    </p>
                    <p>
                      DATE:<span>10/08/2012</span>
                    </p>
                  </div>
                  <div style={{ width: '250px' }}>
                    <h4>Hardware Detail:</h4>
                    <p>
                      Stb Name : <span>{data.stbName}</span>
                    </p>
                    <p>
                      Stb :<span>{data.stbNumber}</span>{' '}
                    </p>
                    <p>
                      Card :<span>{data.cardNumber}</span>{' '}
                    </p>
                  </div>
                </div> */}
              </Stack>
            </Stack>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: '100%' }} aria-label="spanning table">
                <TableHead>
                  {/* <TableRow>
                    <TableCell align="center" colSpan={3}>
                      Details
                    </TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow> */}
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell align="right">Quantity.</TableCell>
                    <TableCell align="right"> HSN Code</TableCell>
                    <TableCell align="right">Discount</TableCell>
                    <TableCell align="right">Additional</TableCell>
                    <TableCell align="right">Gst</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                {/* <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.desc}>
                      <TableCell>{row.desc}</TableCell>
                      <TableCell align="left">{row.qty}</TableCell>
                      <TableCell align="right">{row.unit}</TableCell>
                      <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                      <TableCell align="right">{row.hsn}</TableCell>
                      <TableCell align="right">{row.discount}</TableCell>
                      <TableCell align="right">{row.additional}</TableCell>
                      <TableCell align="right">{row.subdcriptionAmount}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={7} colSpan={5} />
                    <TableCell colSpan={2}>Product Subtotal</TableCell>
                    <TableCell align="right">{data.subdcriptionAmount}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Prev Balance</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">{data.balanceAmount}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Grand Total</TableCell>
                    <TableCell align="right">
                      {parseInt(data.balanceAmount) + parseInt(data.subdcriptionAmount)}
                    </TableCell>
                  </TableRow>
                </TableBody> */}
              </Table>
            </TableContainer>
            <h7>This is a computer generated receipt it does not require any signature/stamp</h7>
            <h4>BillBook</h4>
          </Stack>
        </DialogContent>
        <DialogActions>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
            {/* <CollectPopUp data={data} /> */}

            <ReactToPrint
              trigger={() => (
                <Button variant="outlined" sx={{ color: '#212B36' }} startIcon={<LocalPrintshopOutlinedIcon />}>
                  Print
                </Button>
              )}
              content={() => componentRef.current}
            />
          </div>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </DialogActions>
      </BootstrapDialog>
      <ToastContainer />
    </div>
  );
}
