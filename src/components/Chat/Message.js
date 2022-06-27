import React from 'react';
import { Box, Typography } from '@mui/material';
import { style } from '../../style';

const Message = () => {
    return (
        <Box sx={{
            position: "relative", padding: "10px", width: "fit-content", borderRadius: "10px", marginBottom: "17px",
            backgroundColor: `${style.color_white}`, maxWidth: "77%",
        }}>
            <Box sx={{ fontSize: "14px", margin: "0" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quae laboriosam similique esse, ipsum eius reiciendis dolorum inventore maiores temporibus.
                <Typography sx={{ fontSize: "xx-small", marginLeft: "10px", display: "inline-block" }}>
                    fecha
                </Typography>
            </Box>
        </Box >
    )
}

export default Message;