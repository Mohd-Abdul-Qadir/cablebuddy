import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
import PhotoCamera from '@mui/icons-material/PhotoCamera';

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

export default function ProfileImage() {
  const [open, setOpen] = useState(false);
  const [profileImg, setProfileImg] = useState('');
  const [id, setId] = useState('');

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
        setId(user._id);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (profileImg) {
      formData.append('profileImg', profileImg);
    }

    if (id) {
      fetch(`/api/user-update`, {
        method: 'PUT',
        headers: {
          'x-access-token': localStorage.accessToken,
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          //   toast.success('User updated successfully');
          setMessage(data.message);
          props.onUpdate();
        })
        .catch((error) => console.error(error));
    }
  };

  //   const props = {
  //     name: 'file',
  //     multiple: true,
  //     action: '/api/user-update/5cc8019d300000980a055e76',
  //     onChange(info) {
  //       const { status, originFileObj } = info.file;
  //       if (status === 'done') {
  //         message.success(`${info.file[0]} file uploaded successfully.`);
  //         setProfileImg(originFileObj);
  //       } else if (status === 'error') {
  //         message.error(`${info.file[0]} file upload failed.`);
  //       }
  //     },
  //     onDrop(e) {
  //       console.log('Dropped files', e.dataTransfer.files);
  //     },
  //   };
  console.log(profileImg, 'this is profile image');
  return (
    <div>
      <IconButton
        aria-label="upload picture"
        component="label"
        sx={{ position: 'absolute', bottom: 5, right: 5 }}
        onClick={handleClickOpen}
      >
        {/* <input hidden accept="image/*" type="file" onChange={handleImageChange} /> */}
        <PhotoCamera sx={{ color: 'blue', fontSize: '28px' }} />
      </IconButton>

      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Update image .....................
        </BootstrapDialogTitle>
        <Box sx={{ width: '100%', padding: '10px' }}>
          {/* <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned
              files.
            </p>
          </Dragger> */}
          <Button variant="contained" component="label" sx={{ width: 'fit-content', padding: '12px' }}>
            Choose File
            <input hidden accept="image/*" multiple type="file" onChange={(e) => setProfileImg(e.target.files[0])} />
          </Button>
        </Box>

        <Button
          onClick={handleSubmit}
          variant="contained"
          endIcon={<TelegramIcon />}
          sx={{ width: 'fit-content', mx: 'auto', padding: '12px' }}
        >
          Update
        </Button>
        <DialogActions>
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
