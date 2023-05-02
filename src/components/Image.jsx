import React from 'react'
import Box from '@mui/material/Box'

const Image = (props) => {
    return (
        <Box component='img' src={props.src} alt={props.alt} {...props} />
    )
}

export default Image
