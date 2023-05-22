import React ,{useState,useEffect} from 'react';
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
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {
  Box,
  ButtonBase,
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

export default function HardwareEditPopup(props) {

  const [open, setOpen] = useState(false);
  const [name, setName] = useState(props.data.stbName);
  const [number, setNumber] = useState(props.data.stbNumber);
  const [card, setCard] = useState(props.data.cardNumber);
  const [member, setMember] =useState(props.data.membershipNo)

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

    // const productData = { name, number, card, member };

    // if (props.id) {
    //   fetch(`http://localhost:4001/api/update-/${props.id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(productData),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       toast.success('updated successfully');
    //       setMessage(data.message);
    //       props.onUpdate();
        
    //     })
    //     .catch((error) => console.error(error));
    // }
  };



  return (
    <div>

     <ButtonBase sx={{ bgcolor: '#17a2b8', padding: '5px', borderRadius: '5px',color: 'white' }}
        onClick={handleClickOpen}>Edit</ButtonBase>
      
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Hardware Detail
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
              label="Stb Name"
              variant="outlined"
              value={name}
              onChange={handleName}
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              autoComplete="off"
            />
            <TextField
              required
              value={number}
              onChange={handleNumber}
              id="outlined-basic"
              label="Stb Number"
              variant="outlined"
              type="Number"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
            />
            <TextField
              required
              value={card}
              onChange={handlePassword}
              id="outlined-basic"
              label="Card Number"
              variant="outlined"
              type="text"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
            />
            <TextField
              required
              value={member}
              onChange={handlePassword}
              id="outlined-basic"
              label="Membership Number"
              variant="outlined"
              type="text"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            startIcon={<SaveIcon />}
            // variant="outlined"
            variant="contained"
            sx={{
              marginTop: '10px',
            }}
          >
            Save
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
