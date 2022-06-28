import React, { useContext } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { style } from '../../style';
import { Capitalize } from '../../util/capitalize';
import { chatAt } from '../../util/chatAt';
import moment from 'moment';
import 'moment/locale/es';
import { ContextUsers } from '../../context/users/Context';
import { ADD_USER_TO_CHAT } from '../../context/users/Types';

const SidebarChat = ({ user }) => {
    const { dispatch } = useContext(ContextUsers);

    const addIdUser = (userChat) => {
        dispatch({
            type: ADD_USER_TO_CHAT,
            payload: userChat,
        });
    };

    return (
        <Box
            onClick={() => addIdUser(user)}
            sx={{
                display: "flex", alignItems: "center", padding: ".4rem", borderBottom: `2px solid ${style.border_color}`,
                "&:hover": { backgroundColor: "#eeeeee", cursor: "pointer" },
            }}
        >
            <Avatar sx={{ bgcolor: blueGrey[700], marginRight: "1ch" }}>
                {chatAt(user.name)}
            </Avatar>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography
                        variant="subtitle2"
                        component="h2"
                    >
                        {Capitalize(user.name)}
                    </Typography>
                    <Typography
                        variant="body2"
                        component="p"
                        sx={{ fontSize: "12px" }}
                    >
                        {
                            user.latestMessage && `${moment(user.latestMessage?.createdAt).format('L')}`
                        }
                    </Typography>

                </Box>
                <Typography
                    variant="body2"
                    component="p"
                >
                    {
                        user.latestMessage?.message || `${Capitalize(user.name)} esta en whatsapp`
                    }
                </Typography>
            </Box>
        </Box >
    )
};

export default SidebarChat;