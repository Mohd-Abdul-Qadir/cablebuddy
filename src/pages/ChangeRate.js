import React from 'react';
import { FormControl, MenuItem, Select, TextField, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TelegramIcon from '@mui/icons-material/Telegram';

const ChangeRate = () => {
  const [value, setValue] = React.useState(0);
  const [select, setSelect] = React.useState('');
  const [genre, setGenre] = React.useState('');
  const [selectedLanguage, setSelectedLanguage] = React.useState('');

  const handleSelect1 = (e) => {
    setSelect(e.target.value);
  };
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleGener = (e) => {
    setGenre(e.target.value);
  };
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>BCN Basic RYP</h2>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          sx={{
            height: 'fit-content',
            borderColor: '#ff3333',
            color: '#ff3333',
            '&:hover': {
              backgroundColor: '#ff3333',
              color: '#fff',
              borderColor: '#fff',
            },
          }}
        >
          Delete
        </Button>
      </div>
      <div
        style={{ backgroundColor: '#F9FAFB', height: '100%', width: '100%', paddingRight: '10px', paddingLeft: '10px' }}
      >
        <Box
          sx={{
            width: '100%',
            // height: 00,
            borderRadius: '10px',
            backgroundColor: 'white',
          }}
        >
          <div
            style={{
              fontWeight: 'bold',
              backgroundColor: 'rgba(145, 158, 171, 0.12)',
              borderRadius: '10px 10px 0 0',
              padding: '0.75rem 1.25rem',
              borderBottom: '1px solid rgba(0,0,0,.125)',
            }}
          >
            Change Rate
          </div>
          <div style={{ padding: '20px' }}>
            <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
              <TextField
                id="outlined-basic"
                label="New Rate"
                variant="outlined"
                // onChange={handleName}
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                autoComplete="off"
              />
            </FormControl>

            <Button
              variant="contained"
              startIcon={<TelegramIcon />}
              sx={{
                // paddingBottom: '10px',
                marginTop: '20px',
              }}
            >
              Update
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
};

export default ChangeRate;
