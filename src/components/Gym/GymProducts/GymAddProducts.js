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

const GymAddProducts = () => {
    const [formData, setFormData] = useState({
        productName: '',
        price: '',
        // gstRate: '',
        productCode: '',
        additionalCharge: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    }
    const handleAddSubmit = () => {
        console.log(formData)
    }

    return (
        <>
            <Helmet>
                <title> Dashboard: Add Products </title>
            </Helmet>
            <div
                style={{ backgroundColor: '#F9FAFB', height: '100%', width: '100%', paddingRight: '10px', paddingLeft: '10px' }}
            >
                <h2> Add Product</h2>
                <Box sx={{
                    width: '100%',
                    border: '1px solid #D8D8D8',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                }} >
                    <div style={{
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
                            <TextField required
                                id="outlined-basic"
                                label="Product Name"
                                type="text"
                                variant="outlined"
                                sx={{ bgcolor: '#F8F8F8', width: '50%' }}
                                autoComplete="off"
                                name='productName'
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                type="number"
                                id="outlined-basic"
                                label="Price"
                                variant="outlined"
                                sx={{ bgcolor: '#F8F8F8', width: '50%' }}
                                name='price'
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', gap: '12px', paddingTop: '20px' }}>
                            {/* <TextField
                                id="outlined-basic"
                                label="GST Rate"
                                variant="outlined"
                                type="number"
                                defaultValue='gst'
                                sx={{ bgcolor: '#F8F8F8', width: '50%' }}
                                name='gstRate'
                                onChange={handleChange}
                            /> */}
                            <TextField
                                id="outlined-basic"
                                label="Product Code"
                                variant="outlined"
                                type="text"
                                sx={{ bgcolor: '#F8F8F8', width: '50%' }}
                                name='productCode'
                                onChange={handleChange}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Additional Charge"
                                variant="outlined"
                                type="text"
                                sx={{ bgcolor: '#F8F8F8', width: '50%' }}
                                name='additionalCharge'
                                onChange={handleChange}
                            />
                        </FormControl>

                        <Button
                            startIcon={<AddIcon />}
                            variant="contained"
                            onClick={handleAddSubmit}
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
            </div >
        </>
    );
};

export default GymAddProducts;
