import React from 'react';
import { Box, Typography } from '@mui/material';

const ChatHome = () => {
    return (
        <Box sx={{ paddingTop: "20vh" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box
                    component="img"
                    src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1655847020/whatsapp-project/WhatsApp.svg_sogxoc.webp"
                    sx={{ height: "120px", width: "120px" }}
                />
                <Typography
                    variant="h5"
                    component="p"
                >
                    WhatsApp Web Clone
                </Typography>
            </Box>
        </Box>
    )
};

export default ChatHome;