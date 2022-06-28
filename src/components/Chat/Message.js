import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { style } from '../../style';
import { ContextAuth } from '../../context/login/Context';
import moment from 'moment';
import 'moment/locale/es';

const Message = ({ message }) => {
    const { user } = useContext(ContextAuth);
    const isUserChat = user.username === message.from;

    return (
        <Box sx={[
            {
                position: "relative", padding: "5px 10px 5px 10px", width: "fit-content", borderRadius: "10px", marginBottom: "17px", backgroundColor: `${style.color_white}`, maxWidth: "77%",
            },
            isUserChat && { marginLeft: "auto", backgroundColor: `${style.color_green_ligth}`, color: `${style.color_white}` }
        ]}>
            <Box sx={{ fontSize: "14px", margin: "0" }}>
                {message.message}
                <Typography sx={{ fontSize: "xx-small", marginLeft: "10px", display: "inline-block" }}>
                    {moment(message?.createdAt).subtract('hour').fromNow()}
                </Typography>
            </Box>
        </Box >
    )
}

export default Message;