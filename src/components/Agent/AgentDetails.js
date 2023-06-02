import React, { useState, useEffect } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import { Box, FormControl, Button, Card, Checkbox, Container, Paper, Grid, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TelegramIcon from '@mui/icons-material/Telegram';
import LockResetIcon from '@mui/icons-material/LockReset';
import DeleteIcon from '@mui/icons-material/Delete';
import FormGroup from '@mui/material/FormGroup';

import CardContent from '@mui/material/CardContent';
import { AppWebsiteVisits } from '../../sections/@dashboard/app';
import AgentTable from './AgentTable';
import AgentProfile from './AgentProfile';
import RecordCollection from '../../pages/RecordCollection';
import { useParams } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AgentDetails = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const theme = useTheme();
  const [agetntPermission, setAgentPermission] = useState([
    {
      id: '1',
      name: 'first',
      isChecked: false,
    },
    {
      id: '2',
      name: 'second',
      isChecked: false,
    },
    {
      id: '3',
      name: 'third',
      isChecked: false,
    },
  ]);

  const handleCheckbox = (e, id) => {
    console.log(id, e.target.checked);
    const list = agetntPermission.map((agent) => {
      if (agent.id === id) {
        agent.isChecked = !agent.isChecked;
      }

      return agent;
    });
    setAgentPermission(list);
  };

  useEffect(() => {
    if (id) {
      fetch(`http://54.224.167.209:4001/api/single-agents/${id}`)
        .then((res) => res.json())
        .then((data) => {
          const agentData = data;
          setName(agentData.name);
          setNumber(agentData.number);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  return (
    <>
      {/* <Container> */}
      <Box sx={{ marginBottom: '20px' }}>
        <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Agent Name</Typography>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Button
            variant="outlined"
            // onClick={() => handleDelete(props.id)}
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
          <RecordCollection />
        </Box>
      </Box>

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                width: '100%',
                borderRadius: '10px',
                backgroundColor: 'white',
              }}
            >
              <div
                style={{
                  borderRadius: '10px 10px 0 0',
                  padding: '0rem 1rem 2px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <h3>Transaction Activity</h3>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['SingleInputDateRangeField']}>
                    <DateRangePicker slots={{ field: SingleInputDateRangeField }} />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <AgentTable />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                width: '100%',
                borderRadius: '10px',
                backgroundColor: 'white',
              }}
            >
              <div
                style={{
                  fontWeight: 'bold',
                  borderRadius: '10px 10px 0 0',
                  padding: '0rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <h3>Monthly Total Transactions</h3>
              </div>
              <AgentTable />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Total Collection"
              subheader="By Months"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <img src="/assets/images/user.png" alt="img" width={'120px'} height={'125px'} />
              </div>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Number : <span style={{ color: 'grey' }}>{number}</span>
                </Typography>

                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                  <Button
                    variant="outlined"
                    onClick={() => handleDelete(props.id)}
                    startIcon={<LockResetIcon />}
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
                    Reset Password
                  </Button>

                  {/* <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  sx={{
                    marginLeft: '60px',
                    // marginBottom: '20px',
                  }}
                >
                  Profile
                </Button> */}
                  <AgentProfile id={id} />
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
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
                  // backgroundColor: 'rgba(145, 158, 171, 0.12)',
                  borderRadius: '10px 10px 0 0',
                  padding: '0.75rem 1.25rem',
                  borderBottom: '1px solid rgba(0,0,0,.125)',
                }}
              >
                Agent Area
              </div>
              <div style={{ padding: '20px' }}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Add All Area" />
                    <FormControlLabel value="male" control={<Radio />} label="Elaprola APSFL" />
                    <FormControlLabel value="other" control={<Radio />} label="Elaprolu SSLC" />
                    <FormControlLabel value="other" control={<Radio />} label="Elaprolu V DIGITAL" />
                    <FormControlLabel value="other" control={<Radio />} label="Gangineni" />
                    <FormControlLabel value="other" control={<Radio />} label="Gangineni SSLC" />
                  </RadioGroup>
                </FormControl>
              </div>
              <Button
                variant="contained"
                // onClick={handleSubmit}
                startIcon={<TelegramIcon />}
                sx={{
                  marginLeft: '20px',
                  marginBottom: '20px',
                }}
              >
                Update
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
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
                  borderRadius: '10px 10px 0 0',
                  padding: '0.75rem 1.25rem',
                  borderBottom: '1px solid rgba(0,0,0,.125)',
                }}
              >
                Agent Permission
              </div>
              <div style={{ padding: '20px' }}>
                {agetntPermission.map((agent, index) => {
                  return (
                    <FormGroup key={index}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={agent.isChecked}
                            onChange={(e) => {
                              handleCheckbox(e, agent.id);
                            }}
                          />
                        }
                        label="Label"
                      />
                    </FormGroup>
                  );
                })}
              </div>
              <Button
                variant="contained"
                // onClick={handleSubmit}
                startIcon={<TelegramIcon />}
                sx={{
                  marginLeft: '20px',
                  marginBottom: '20px',
                }}
              >
                Update
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AgentDetails;
