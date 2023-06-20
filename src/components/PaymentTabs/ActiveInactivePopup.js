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
import { Calendar } from 'antd';
import { Dayjs } from 'dayjs';

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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const onSelectDate = (newValue: Dayjs) => {
  //   setValue(newValue);
  // };

  const onSelectDate = (date) => {
    console.log('this is date', date);
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
          {/* <Calendar
            onSelect={onSelectDate}
            monthCellRender={(date) => {
              if (new Date(date).getMonth() === new Date().getMonth()) {
                return <h5> This is Holiday</h5>;
              }
            }}
          /> */}
          <Calendar
            onSelect={(date) => {
              console.log('this is date', date);
            }}
            dateCellRender={(date) => {
              if (new Date(date).getDate() === new Date()) {
                return <h5> This is Holiday</h5>;
              }
            }}
            monthCellRender={(date) => {
              if (new Date(date).getDate() === new Date()) {
                return <h5> This is Holiday</h5>;
              }
            }}

            // monthCellRender={(date) => {
            //   const currentDate = new Date();
            //   const cellDate = new Date(date);

            //   if (cellDate.getMonth() === currentDate.getMonth()) {
            //     return <h5>This is a Holiday</h5>;
            //   }

            //   return null;
            // }}
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
              Mark Inctive
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
