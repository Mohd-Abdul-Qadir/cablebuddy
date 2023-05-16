import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GeneralDetails from '../components/ProfilePageTabs/GeneralDetails';
import BillingPreference from '../components/ProfilePageTabs/BillingPreference';
import BillingReminder from '../components/ProfilePageTabs/BillingReminder';
import AccountDetails from '../components/ProfilePageTabs/AccountDetails';


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

const ProfilePage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
                                                                         
    return (
        <Box>
            <Stack>
                <Typography variant='h3'>Profile</Typography>
            </Stack>
            {/* <img src='/assets/images/CableBackground.png' alt='cable'/> */}
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="General Details" {...a11yProps(0)} />
                        <Tab label="Billing Preference" {...a11yProps(1)} />
                        <Tab label="Billing Reminder" {...a11yProps(2)} />
                        <Tab label="Account Details" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <GeneralDetails />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <BillingPreference />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <BillingReminder />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <AccountDetails />
                </TabPanel>
            </Box>
        </Box>
    )
}

export default ProfilePage
