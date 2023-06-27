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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { Calendar } from 'antd';
import moment from 'moment';
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

export default function ActiveInactivePopup() {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleMarkInactive = async () => {
    const url = `/api/update-customer-status-by-date/${id}`;
    const updatedCustomer = {
      active: false,
      date: selectedDate.startOf('day').toDate(),
    };

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.accessToken,
        },
        body: JSON.stringify(updatedCustomer),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      toast.success('Change status is scheduled successfully.');
    } catch (error) {
      console.error('Error updating status:', error.message);
    }
  };
  const disabledDate = (current) => {
    // Disable dates before today
    return current && current < moment().endOf('day');
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained">
        Active/Inactive
      </Button>

      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Active/Inactive
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Calendar
            onSelect={(date) => {
              setSelectedDate(date);
            }}
            disabledDate={disabledDate}
          />
        </DialogContent>
        <DialogActions>
          <div
            style={{
              display: 'flex',
              padding: '10px',

              justifyContent: 'space-between',
              width: '100%',
              height: 'fit-content',
              paddingTop: '10px',
            }}
          >
            <Button
              variant="contained"
              onClick={handleMarkInactive}
              disabled={!selectedDate}
              sx={{
                height: 'fit-content',
                backgroundColor: '#ff3333',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#ff3333',
                  border: '1px solid',
                  borderColor: '#ff3333',
                },
              }}
            >
              Mark Inactive
            </Button>
            <Button
              variant="contained"
              sx={{
                height: 'fit-content',
              }}
            >
              Mark Holiday
            </Button>
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
    </div>
  );
}
