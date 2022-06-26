import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { style } from '../../style';

const SidebarChat = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", padding: ".4rem", borderBottom: `2px solid ${style.border_color}` }}>
            <Avatar sx={{ bgcolor: blueGrey[700], marginRight: "1ch" }}>
                M
            </Avatar>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography
                        variant="subtitle2"
                        component="h2"
                    >
                        Kendra
                    </Typography>
                    <Typography
                        variant="body2"
                        component="p"
                        sx={{ fontSize: "12px" }}
                    >
                        26/06/2022
                    </Typography>

                </Box>
                <Typography
                    variant="body2"
                    component="p"
                >
                    This is a message
                </Typography>
            </Box>
        </Box >
    )
}

export default SidebarChat