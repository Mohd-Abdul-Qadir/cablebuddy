import React, { useState } from 'react';
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
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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

export default function RecordCollection() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<AddCircleOutlineIcon />}
        sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}
      >
        Record Collection
      </Button>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          RecordCollection Payment
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
              // value={name}
              // onChange={handleName}
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              autoComplete="off"
            />
            <TextField
              // value={price}
              // onChange={handleNumber}
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              type="Number"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
            />
            {/* <Textarea minRows={2} maxRows={4} /> */}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            // onClick={handleSubmit}
            startIcon={<TelegramIcon />}
          >
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
    </div>
  );
}
