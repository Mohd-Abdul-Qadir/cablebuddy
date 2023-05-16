import React, { useState } from 'react'
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';


const AdditionalCharge = () => {
  const [radio, setRadio] = useState('Additionalcharge')

  const handleRadio = (event) => {
    setRadio(event.target.value)
  }                                         
  return (
    <Stack width='55vw'>
      <Typography><b>Additional Charge and Discount</b></Typography>
      <Stack gap='2rem' mt='2rem'>
        <Stack direction='row' alignItems='center'>
          <Stack sx={{ width: '50%' }}>
            <Typography>Additional Charge/Discount:- </Typography>
          </Stack>
          <TextField
            fullWidth
            placeholder='Rate'
            id="outlined-start-adornment"
          />
        </Stack>
        <FormControl component="fieldset">
          <RadioGroup aria-label="options" name="options" value={radio} onChange={handleRadio} sx={{ display: 'flex', flexDirection: 'row' }}>
            <FormControlLabel value="Additionalcharge" control={<Radio />} label="Additional Charge" labelPlacement="end" />
            <FormControlLabel value="Discount" control={<Radio />} label="Discount" labelPlacement="end" />
          </RadioGroup>
        </FormControl>
        <Stack sx={{ mx: 'auto', mt: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant='contained' endIcon={<TelegramIcon />} sx={{ width: 'fit-content' }}>Update</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AdditionalCharge
