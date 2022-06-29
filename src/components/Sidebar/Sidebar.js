import React, { useContext, useEffect, useRef } from 'react';
import { Box, Avatar, IconButton } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import { style } from '../../style';
import { ContextAuth } from '../../context/login/Context';
import { ContextUsers } from '../../context/users/Context';
import { ContextMessages } from '../../context/messages/Context';
import { chatAt } from '../../util/chatAt';
import useUsers from '../../hooks/useUsers';
import { LOGOUT } from '../../context/login/Types';
import { RESET_ALL_USERS } from '../../context/users/Types';
import { RESET_MESSAGES_BY_USER } from '../../context/messages/Types';
import Pusher from 'pusher-js';

const pusher = new Pusher('3cddea69a989a4f7e3bd', {
    cluster: 'us2'
});

const Sidebar = () => {
    const { user, dispatch: dispatchAuth } = useContext(ContextAuth);
    const { users, dispatch: dispatchUsers } = useContext(ContextUsers);
    const { dispatch: dispatchMessages } = useContext(ContextMessages);
    const [getAllUsers] = useUsers();
    const isMountedRef = useRef(true);

    useEffect(() => {
        pusher.unsubscribe('messages');
        getAllUsers();

        const channel = pusher.subscribe('messages');
        channel.bind('newMessages', function (data) {
            getAllUsers();
        });

        // Component Desmount
        return () => {
            isMountedRef.current = false;
        }
    }, [getAllUsers]);

    const handleLogout = () => {
        dispatchMessages({
            type: RESET_MESSAGES_BY_USER,
        });
        dispatchUsers({
            type: RESET_ALL_USERS,
        });
        dispatchAuth({
            type: LOGOUT,
        });
    };

    return (
        <Box sx={{ borderRight: `2px solid ${style.border_color}`, height: "100vh" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", padding: ".4rem", height: "3.5rem" }}>
                <Avatar sx={{ bgcolor: blueGrey[700] }} onClick={() => handleLogout()}>
                    {chatAt(user.name)}
                </Avatar>
                <Box>
                    <IconButton >
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ padding: ".4rem", backgroundColor: style.color_white, borderBottom: `2px solid ${style.border_color}`, height: "3.5rem" }}>
                <Box sx={{ display: "flex", alignItems: "center", backgroundColor: style.color_gray, padding: ".4rem", borderRadius: "10px" }}>
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder='Busca un chat'
                        style={{ backgroundColor: 'inherit', outline: "none", border: "none", width: "100%", marginLeft: "3ch" }}
                    />
                </Box>
            </Box>
            <Box sx={{ backgroundColor: style.color_white, overflowY: "scroll", overflowX: "hidden", height: "calc(100vh - 3.5rem - 3.5rem)" }}>
                {
                    users && users.map(user => (
                        <SidebarChat key={user._id} user={user} />
                    ))
                }
            </Box>
        </Box >
    )
}

export default Sidebar;