import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TelegramIcon from '@mui/icons-material/Telegram';
import { FormControl, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
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

export default function AgentProfile(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (props.id) {
      fetch(`http://54.224.167.209:4001/api/single-agents/${props.id}`)
        .then((res) => res.json())
        .then((data) => {
          const agentData = data;
          setName(agentData.name);
          setNumber(agentData.number);
          // setPrice(productData.price);
          // setSelect(productData.select);
          // setGst(productData.gst);
          // setProduct(productData.product);
          // setAdditional(productData.additional);
          // setHsn(productData.hsn);
          // setGenre(productData.genre);
          // setType(productData.type);
          console.log(agentData, 'agen Data');
        })
        .catch((error) => console.error(error));
    }
  }, [props.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const agentData = { name, number };

    if (props.id) {
      fetch(`http://54.224.167.209:4001/api/update-agent/${props.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(agentData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success('Agent updated successfully');
          setMessage(data.message);
          props.onUpdate();
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<EditIcon />}
        sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}
      >
        Profile
      </Button>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Update Profile
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
              id="outlined-basic"
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              autoComplete="off"
            />
            <TextField
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              type="Number"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSubmit} startIcon={<TelegramIcon />}>
            Update
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
      <ToastContainer />
    </div>
  );
}
