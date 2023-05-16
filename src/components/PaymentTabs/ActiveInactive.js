import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const ActiveInactive = () => {
    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' width='55vw'>
            <Typography><b>Active/Inactive</b></Typography>
            <Button variant='contained'>Active/Inactive</Button>
        </Stack>
    )
}

export default ActiveInactive
