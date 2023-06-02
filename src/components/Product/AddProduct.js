import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Helmet } from 'react-helmet-async';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [age, setAge] = useState('');
  const [drop, setDrop] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [product, setProduct] = useState('');
  const [hsn, setHsn] = useState('');
  const [select, setSelect] = useState('');
  const [gst, setGst] = useState('18');
  const [additional, setAdditional] = useState('');
  const [genre, setGenre] = useState('');
  const [type, setType] = useState('');

  const show = () => {
    if (select !== 'Chanel') setDrop(true);
    // else if (select === 'Broadcaster Bouqet') setDrop(false);
    // else if (select === 'My Package') setDrop(false);
    else setDrop(false);
  };

  const handleSelect = (event) => {
    setAge(event.target.value);
    show();
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleProduct = (e) => {
    setProduct(e.target.value);
  };
  const handleSelect1 = (e) => {
    setSelect(e.target.value);
    show();
  };
  const handleGst = (e) => {
    setGst(e.target.value);
  };
  const handleAdditional = (e) => {
    setAdditional(e.target.value);
  };
  const handleGener = (e) => {
    setGenre(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  };
  const handleHsn = (e) => {
    setHsn(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://54.224.167.209:4001/api/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({ name, price, product, select, gst, additional, genre, type, hsn }),
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
    <>
      <Helmet>
        <title> Dashboard: Add Products </title>
      </Helmet>
      <div
        style={{ backgroundColor: '#F9FAFB', height: '100%', width: '100%', paddingRight: '10px', paddingLeft: '10px' }}
      >
        <h2> Add Product</h2>
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
            Product Details
          </div>
          <div style={{ padding: '20px' }}>
            <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
              <TextField
                required
                id="outlined-basic"
                label="Name"
                type="text"
                variant="outlined"
                value={name}
                onChange={handleName}
                sx={{ bgcolor: '#F8F8F8', width: '50%' }}
                autoComplete="off"
              />
              <TextField
                required
                type="number"
                value={price}
                onChange={handlePrice}
                id="outlined-basic"
                label="Price"
                variant="outlined"
                sx={{ bgcolor: '#F8F8F8', width: '50%' }}
              />
              <Select
                required
                value={select}
                onChange={handleSelect1}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                  width: '50%',
                  backgroundColor: '#F8F8F8',
                  color: '#A5A4A4',
                  borderColor: '#ccc',
                  ':active': {
                    borderColor: 'red', // Set border color to red when clicked
                  },
                }}
              >
                <MenuItem value="">Please Select One</MenuItem>
                <MenuItem value="Chanel">Chanel</MenuItem>
                <MenuItem value="Broadcaster Bouqet">Broadcaster Bouqet</MenuItem>
                <MenuItem value="My Package">My Package</MenuItem>
                <MenuItem value="Base Pack">Base Pack</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', gap: '12px', paddingTop: '20px' }}>
              <TextField
                id="outlined-basic"
                onChange={handleGst}
                label="GST Rate"
                variant="outlined"
                type="number"
                defaultValue={gst}
                sx={{ bgcolor: '#F8F8F8', width: '50%' }}
                // autoComplete="off"
              />
              <TextField
                id="outlined-basic"
                value={product}
                onChange={handleProduct}
                label="Product Code"
                variant="outlined"
                type="text"
                sx={{ bgcolor: '#F8F8F8', width: '50%' }}
              />
              <TextField
                id="outlined-basic"
                value={additional}
                onChange={handleAdditional}
                label="Additional Charge"
                variant="outlined"
                type="text"
                sx={{ bgcolor: '#F8F8F8', width: '50%' }}
              />
              <TextField
                id="outlined-basic"
                value={hsn}
                onChange={handleHsn}
                label="HSN"
                variant="outlined"
                type="text"
                sx={{ bgcolor: '#F8F8F8', width: '50%' }}
              />
            </FormControl>

            {select === 'Chanel' && drop ? (
              <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', gap: '12px', paddingTop: '20px' }}>
                <Select
                  value={genre}
                  onChange={handleGener}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  sx={{
                    width: '33%',
                    backgroundColor: '#F8F8F8',
                    color: '#A5A4A4',
                    borderColor: '#ccc',
                    ':active': {
                      borderColor: 'red', // Set border color to red when clicked
                    },
                  }}
                >
                  <MenuItem value="">Select Genre</MenuItem>
                  <MenuItem value="Business News">Business News</MenuItem>
                  <MenuItem value="Entertainment">Entertainment</MenuItem>
                  <MenuItem value="Cooking">Cooking</MenuItem>
                  <MenuItem value="Music">Music</MenuItem>
                  <MenuItem value="News">News</MenuItem>
                  <MenuItem value="Movies">Movies</MenuItem>
                  <MenuItem value="Religious">Religious</MenuItem>
                  <MenuItem value="Infotainment">Infotainment</MenuItem>
                  <MenuItem value="Lifestyle">Lifestyle</MenuItem>
                  <MenuItem value="Kids">Kids</MenuItem>
                  <MenuItem value="Shopping">Shopping</MenuItem>
                  <MenuItem value="Sports">Sports</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
                <FormLabel id="demo-row-radio-buttons-group-label">Select Type</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={type}
                  onChange={handleType}
                >
                  <FormControlLabel value="S D" control={<Radio />} label="S D" />
                  <FormControlLabel value="H D" control={<Radio />} label="H D" />
                </RadioGroup>
              </FormControl>
            ) : null}

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
          </div>
        </Box>
      </div>
    </>
  );
};

export default AddProduct;
