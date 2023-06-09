import * as React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SellIcon from '@mui/icons-material/Sell';
import InfoIcon from '@mui/icons-material/Info';
import { Button, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Calendar } from 'antd';
import ChangeRate from '../../pages/ChangeRate';
import ProductDetails from './ProductDetails';
import AdditionalRate from '../../pages/AdditionalRate';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function DetailsButton() {
    const { id } = useParams();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    // console.log(id, 'product id');

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile>
                    <Tab label="Product Detail" {...a11yProps(0)} icon={<InfoIcon />} />
                    <Tab label="Change Rate" {...a11yProps(1)} icon={<SellIcon />} />
                    <Tab label="Change Additional Rate" {...a11yProps(2)} icon={<LocalShippingIcon />} />
                    <Tab label="Active / Inactive" {...a11yProps(3)} icon={<PowerSettingsNewIcon />} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ProductDetails id={id} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ChangeRate />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AdditionalRate id={id} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" mb="12px">
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
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider> */}
                <div
                    style={{
                        backgroundColor: '#fff',
                        height: 'fit-content',
                        width: { xs: '100%', md: '90%' },
                        borderRadius: '10px',
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
                        Active / Inactive
                    </div>
                    <Calendar onPanelChange={onPanelChange} />
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
                </div>
            </TabPanel>
        </Box>
    );
}
