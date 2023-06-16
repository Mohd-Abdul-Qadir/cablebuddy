import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormControl, MenuItem, Select, TextField, Button, Box, Stack } from '@mui/material';
import languages from 'language-list';
import DeleteIcon from '@mui/icons-material/Delete';
import TelegramIcon from '@mui/icons-material/Telegram';

const ProductDetails = (props) => {
  const [value, setValue] = useState(0);
  const [select, setSelect] = useState('');
  const [genre, setGenre] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  // const [select, setSelect] = useState('');
  const [gst, setGst] = useState('18');
  const [product, setProduct] = useState('');
  const [additional, setAdditional] = useState('');
  const [hsn, setHsn] = useState('');
  // const [genre, setGenre] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

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

  // const handleSubmit = (e) => {
  //   console.log('update here');
  //   e.preventDefault();

  //   const productData = { name, price, select, gst, product, additional, hsn, genre, type };

  //   if (props.id) {
  //     fetch(`/api/update-product/${props.id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(productData),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMessage(data.message);
  //         props.onUpdate();
  //       })
  //       .catch((error) => console.error(error));
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = { name, price, select, gst, product, additional, hsn, genre, type };

    if (props.id) {
      fetch(`/api/update-product/${props.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success('Product updated successfully');
          setMessage(data.message);
          props.onUpdate();
        })
        .catch((error) => console.error(error));
    }
  };

  const handleSelect1 = (e) => {
    setSelect(e.target.value);
  };
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleGener = (e) => {
    setGenre(e.target.value);
  };

  const handleDelete = (id) => {
    fetch(`/api/delete-products/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'Product deleted successfully') {
          // const updatedProducts = products.filter((props) => props.id !== id);

          toast.success('Product deleted successfully');
          // setProducts(updatedProducts);
        } else {
          toast.error('Error deleting product');
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error('Server error');
      });
  };
  return (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between'>
        <h2>BCN Basic RYP</h2>
        <Button
          variant="outlined"
          onClick={() => handleDelete(props.id)}
          startIcon={<DeleteIcon />}
          sx={{
            ml: 'auto',
            width: 'fit-content',
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
      </Stack>
      <div
        style={{ backgroundColor: '#F9FAFB', height: '100%', width: '100%', paddingRight: '10px', paddingLeft: '10px' }}
      >
        <Box
          sx={{
            width: '100%',
            border: '1px solid rgba(0,0,0,.125)',
            borderRadius: '10px',
            backgroundColor: 'white',
            mt: '16px'
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
            <FormControl fullWidth sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '12px' }}>
              <TextField
                required
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                autoComplete="off"
              />
              <TextField
                id="outlined-basic"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                label="Product Code"
                variant="outlined"
                type="text"
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              />
              <TextField
                id="outlined-basic"
                onChange={(e) => setHsn(e.target.value)}
                label="HSN Code"
                variant="outlined"
                type="text"
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '12px', paddingTop: '20px' }}>
              <Select
                required
                value={select}
                onChange={(e) => setSelect(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                  width: '100%',
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
              <TextField
                id="outlined-basic"
                // onChange={handleGst}
                label="GST Rate"
                variant="outlined"
                defaultValue="18"
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              />

              <Select
                required
                id="language-select"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                  width: '100%',
                  backgroundColor: '#F8F8F8',
                  color: '#A5A4A4',
                  borderColor: '#ccc',
                  ':active': {
                    borderColor: 'red', // Set border color to red when clicked
                  },
                }}
              >
                <MenuItem value="">Please Select language</MenuItem>

                {languages()
                  .getData()
                  .map((language) => (
                    <MenuItem key={language.code} value={language.name}>
                      {language.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', gap: '12px', paddingTop: '20px' }}>
              <Select
                value={genre}
                onChange={handleGener}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                  width: {xs: '100%', md: '33%'},
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
            </FormControl>

            <Button
              variant="contained"
              onClick={handleSubmit}
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
      <ToastContainer />
    </>
  );
};

export default ProductDetails;
