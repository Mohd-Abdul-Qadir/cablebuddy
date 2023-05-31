import React, { useState, useEffect } from 'react';
import { Box, InputAdornment, Stack, Typography } from '@mui/material';
import PropTypes, { number } from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Image from '../components/Image';
import GeneralDetails from '../components/ProfilePageTabs/GeneralDetails';
import BillingPreference from '../components/ProfilePageTabs/BillingPreference';
import BillingReminder from '../components/ProfilePageTabs/BillingReminder';
import AccountDetails from '../components/ProfilePageTabs/AccountDetails';
import ProfileBgImg from '../assets/images/CableBackground.png';
// import ProfilePicture from '../assets/Images/ProfilePicture.jpg';
import ProfilePicture from '../assets/images/ProfilePicture.jpg';

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
  const [imageSrc, setImageSrc] = useState('');
  const [user, setUser] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImageSrc(reader.result);
      });
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Replace 'accessTokenValue' with your actual access token value
        // const accessToken = 'accessTokenValue';

        const response = await fetch(`http://localhost:4001/api/users`, {
          headers: {
            'x-access-token': `${localStorage.getItem('accessToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching user');
        }

        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <Box marginTop="0px">
      <Typography variant="h3">Profile</Typography>
      <Stack
        sx={{
          backgroundImage: `url(${ProfileBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            bgcolor: 'rgb(17, 46, 60)',
            width: 'fit-content',
            padding: '10px',
            borderRadius: '5px',
            position: 'absolute',
            right: 20,
            top: 20,
            boxShadow: '4px 2px 2px 2px white',
          }}
        >
          <Typography sx={{ color: 'white' }}>Expiry On :- 06-Oct-2023</Typography>
        </Box>
      </Stack>
      <Stack
        sx={{
          position: 'relative',
          height: '150px',
          width: '150px',
          borderRadius: '50%',
          border: '1px solid grey',
          padding: '5px',
        }}
      >
        <Image
          src={imageSrc || ProfilePicture}
          alt="profilepicture"
          sx={{ height: '100%', width: '100%', borderRadius: '50%' }}
        />
        <IconButton aria-label="upload picture" component="label" sx={{ position: 'absolute', bottom: 5, right: 5 }}>
          <input hidden accept="image/*" type="file" onChange={handleImageChange} />
          <PhotoCamera sx={{ color: 'blue', fontSize: '28px' }} />
        </IconButton>
      </Stack>

      <Box sx={{ width: '100%', mt: '4rem' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="General Details" {...a11yProps(0)} />
            <Tab label="Billing Preference" {...a11yProps(1)} />
            <Tab label="Billing Reminder" {...a11yProps(2)} />
            <Tab label="Account Details" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <GeneralDetails user={user} />
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
  );
};

export default ProfilePage;
