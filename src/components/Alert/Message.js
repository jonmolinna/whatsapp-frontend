import React from 'react';
import { Alert, Stack } from '@mui/material';

const Message = ({ message, severity }) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity={severity}>
                {message}
            </Alert>
        </Stack>
    )
}

export default Message;