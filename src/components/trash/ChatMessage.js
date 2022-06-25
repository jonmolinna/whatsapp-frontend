import React from 'react';
import './ChatMessage.css';
import moment from 'moment';
import 'moment/locale/es';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-hot-toast';

import { useAuthState } from '../context/auth';
import axios from '../util/axios';

const ChatMessage = ({ message }) => {
    const { user } = useAuthState();
    let isUser = user.username === message.from;
    const token = localStorage.getItem('token-whatsapp');
    let idMessage = message?._id

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleDeleteMessage = async () => {
        try {
            let options = {
                method: "PUT",
                headers: {
                    "Content-type" : "application/json; charset=utf-8",
                    "authorization": token? `Bearer ${token}` : null,
                }
            };

            const res = await axios(`/deleteMessage?idMessage=${idMessage}`, options);
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };


    return (
        <div className={`chatMessage ${isUser? 'chatMessage__reciever': ''}`}>
            {
                message?.status === false ?
                (
                    <p>
                        { message.message }
                        <time>
                            {moment(message.createdAt).subtract('hour').fromNow()}
                        </time>
                        {
                            isUser && (
                                <IconButton 
                                    className='chatMessage__delete'
                                    size="small"

                                    onClick={handleClick} 
                                    sx={{ ml: 2 }}>
                                    <ExpandMoreIcon sx={{ fontSize: 15 }} 
                                />
                                </IconButton>
                            )
                        }
                
                    </p>
                ) : (
                    <p className='chatMessage__deleted'>
                        <DoNotDisturbIcon />
                        Se eliminó este mensaje
                        <time>
                            {moment(message.createdAt).subtract('hour').fromNow()}
                        </time>
                    </p>
                )
            }

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: '#3a4347',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                style: {
                    backgroundColor: '#3a4347',
                    color: "#f4f4f4",
                }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleDeleteMessage}>
                    Eliminar
                </MenuItem>
            </Menu>
            
        </div>
    )
};

export default ChatMessage;