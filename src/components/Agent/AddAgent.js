import * as React from 'react';
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
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
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

export default function AddAgent() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [password, setPassword] = React.useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4001/api/add-agent', {
        method: 'POST',
        headers: { 'x-access-token': `${localStorage.getItem('accessToken')}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, number, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Add successful!');
      }
      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error(`Not Add`);
    }
  };
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<SupportAgentIcon />}
        sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}
        // onClick={() => navigate('/dashboard/add-product')}
      >
        Add New Agent
      </Button>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Agent
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <FormControl
            sx={{
              gap: '20px',
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField
              required
              id="outlined-basic"
              fullWidth
              label="Name"
              variant="outlined"
              // value={name}
              onChange={handleName}
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              autoComplete="off"
            />
            <TextField
              required
              // value={price}
              onChange={handleNumber}
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              type="Number"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
            />
            <TextField
              required
              // value={price}
              onChange={handlePassword}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="Password"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            startIcon={<AddIcon />}
            // variant="outlined"
            variant="contained"
            sx={{
              marginTop: '10px',
            }}
          >
            Add
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
