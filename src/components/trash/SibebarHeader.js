import React, { useContext } from 'react';
import './SibebarHeader.css';
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { blueGrey } from '@mui/material/colors';
import { useAuthState, useAuthDispatch } from '../context/auth';
import { useMessageDispatch } from '../context/message';
import { chatAt } from '../util/chatAt';
import { ContextAuth } from '../context/login/Context';

const SibebarHeader = () => {
    // const { user } = useAuthState();
    const dispatchAuth = useAuthDispatch();
    const dispatchMessage = useMessageDispatch();
    const { user } = useContext(ContextAuth);

    const handleLogout = () => {
        dispatchAuth({
            type: 'LOGOUT'
        });
        dispatchMessage({
            type: 'REMOVE_MESSAGE'
        });
    };

    return (
        <div className='sibebarHeader'>
            <Avatar
                sx={{ bgcolor: blueGrey[700] }}
                onClick={handleLogout}
            >
                {chatAt(user.name)}
            </Avatar>
            <div className='sibebarHeader__right'>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default SibebarHeader;