import React, { useState, useEffect } from 'react';
import { FormControl, TextField, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TelegramIcon from '@mui/icons-material/Telegram';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const AdditionalRate = (props) => {
  const [value, setValue] = useState(0);
  const [select, setSelect] = useState('');
  const [genre, setGenre] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  // const [select, setSelect] = useState('');
  const [gst, setGst] = useState('');
  const [product, setProduct] = useState('');
  const [additional, setAdditional] = useState('');
  const [hsn, setHsn] = useState('');
  // const [genre, setGenre] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleSelect1 = (e) => {
    setSelect(e.target.value);
  };
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleGener = (e) => {
    setGenre(e.target.value);
  };

  useEffect(() => {
    if (props.id) {
      fetch(`/api/single-products/${props.id}`)
        .then((res) => res.json())
        .then((data) => {
          const productData = data;
          setName(productData.name);
          setPrice(productData.price);
          setSelect(productData.select);
          setGst(productData.gst);
          setProduct(productData.product);
          setAdditional(productData.additional);
          setHsn(productData.hsn);
          setGenre(productData.genre);
          setType(productData.type);
        })
        .catch((error) => console.error(error));
    }
  }, [props.id]);

  const handleSubmit = (e) => {
    console.log('update here');
    e.preventDefault();

    const productData = { name, price, select, gst, product, additional, hsn, genre, type };

    if (props.id) {
      console.log('call here');
      fetch(`/api/update-product/${props.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then((data) => {
          setMessage(data.message);
          props.onUpdate();
        })
        .catch((error) => console.error(error));
    }
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
            Change Additional Rate
          </div>
          <div style={{ padding: '20px' }}>
            <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
              <TextField
                id="outlined-basic"
                type="number"
                label="Discount/Additional Charge"
                variant="outlined"
                // value={additional}
                onChange={(e) => setAdditional(e.target.value)}
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                autoComplete="off"
              />
            </FormControl>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="Additional Charge" control={<Radio />} label="Additional Charge" />
              <FormControlLabel value="Discount" control={<Radio />} label="Discount" />
            </RadioGroup>

            <Button
              variant="contained"
              startIcon={<TelegramIcon />}
              onClick={handleSubmit}
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

export default AdditionalRate;
