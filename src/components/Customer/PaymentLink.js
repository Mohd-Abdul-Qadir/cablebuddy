import React, { useState, useEffect } from 'react';
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
import SaveIcon from '@mui/icons-material/Save';
import TelegramIcon from '@mui/icons-material/Telegram';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {
  Box,
  ButtonBase,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import AddIcon from '@mui/icons-material/Add';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const PaymentMode = [
  {
    value: 'CASH',
  },
  {
    value: 'Cheque',
  },
  {
    value: 'BHIM',
  },
  {
    value: 'PayTM',
  },
  {
    value: 'UPI',
  },
  {
    value: 'Coupon',
  },
  {
    value: 'Portal',
  },
  {
    value: 'Bank Transfer',
  },
  {
    value: 'Others',
  },
];

export default function PaymentLink(props) {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(500);
  const [discount, setDiscount] = useState(0);
  const [data, setData] = useState(props.data);

  const handleDiscount = (e) => {
    setDiscount(e.target.value);
  };

  const addAmount = (e) => {
    setPrice(e.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // console.log(data, 'this is data for customer');

  return (
    <div>
      <Button variant="contained" startIcon={<ShareIcon />} onClick={handleClickOpen}>
        Share payment link
      </Button>

      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Share the payment link on WhatsApp
        </BootstrapDialogTitle>

        <DialogContent dividers>
          <Stack
            sx={{
              borderRadius: '10px',
              bgcolor: 'white',
              width: '500px',
            }}
            // ref={componentRef}
          >
            <p>
              {' '}
              Customer Name <span style={{ fontWeight: 'bold' }}>{data?.name}</span>
            </p>
            <p>
              Balance Amount <span style={{ color: 'green', fontWeight: 'bold' }}> 132</span>
            </p>
            <p>
              {' '}
              Mobile No. <span style={{ fontWeight: 'bold' }}>{data?.mobileNo1}</span>
            </p>
            <p> Payment Link:</p>
            <TextField disabled id="outlined-disabled" multiline maxRows={4} defaultValue="This is payment Link" />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleSubmit}
            startIcon={<WhatsAppIcon />}
            // variant="outlined"
            variant="contained"
            color="success"
            sx={{
              color: 'white',
            }}
          >
            WhatsApp
          </Button>
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
    </div>
  );
}
