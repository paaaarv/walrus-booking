import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function FormModal(props) {
    
    return (
        <Modal open={props.open} onClose={props.handleClose}>
            <Box>
                <Typography> hi </Typography>
            </Box>
        </Modal>
    )
}