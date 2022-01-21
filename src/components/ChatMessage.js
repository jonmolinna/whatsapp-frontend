import React from 'react';
import './ChatMessage.css';
import moment from 'moment';
import 'moment/locale/es';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';

import { useAuthState } from '../context/auth';

const ChatMessage = ({ message }) => {
    const { user } = useAuthState();
    let isUser = user.username === message.from;

    return (
        <div className={`chatMessage ${isUser? 'chatMessage__reciever': ''}`}>
            <p>
                { message.message }
                <time>
                    {moment(message.createdAt).subtract('hour').fromNow()}
                </time>
                {
                    isUser && (
                        <IconButton className='chatMessage__delete' size="small" >
                            <ExpandMoreIcon sx={{ fontSize: 15 }} />
                        </IconButton>
                    )
                }
                
            </p>
            
        </div>
    )
}

export default ChatMessage;