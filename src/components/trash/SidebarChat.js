import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import moment from 'moment';
import 'moment/locale/es';

import { Capitalize } from '../util/capitalize';
import { chatAt } from '../util/chatAt';
import { useMessageDispatch } from '../context/message'

const SidebarChat = ({ user }) => {
    const dispatch = useMessageDispatch();

    const handleMessage = () => {
        dispatch({
            type: 'CHAT_MESSAGE',
            payload: user
        });
    };
    
    return (
        <div className='sidebarChat' onClick={handleMessage}>
            <Avatar sx={{ bgcolor: blueGrey[700] }}>
                {chatAt(user.name)}
            </Avatar>
            <aside className='sidebarChat__content'>
                <h2>{Capitalize(user.name)}</h2>
                <p>
                    {
                        user.latestMessage? 
                        (user.latestMessage.status === false? (user.latestMessage.message) : ('mensaje eliminado')) 
                        : 
                        (`${user.name} esta en whatsapp`)
                    }
                </p>
            </aside>
            {
               user.latestMessage && (
                <time>{moment(user.latestMessage.createdAt).format('L')}</time>
               )
            }
        </div>
    )
}

export default SidebarChat;