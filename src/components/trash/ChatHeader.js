import React, { useState, useEffect } from 'react';
import './ChatHeader.css';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { blueGrey } from '@mui/material/colors';
import moment from 'moment';
import 'moment/locale/es';

import { useMessageDispatch } from '../context/message';
import { Capitalize } from '../util/capitalize';
import { chatAt } from '../util/chatAt';
import axios from '../util/axios';

const ChatHeader = ({ name }) => {
    const dispatch = useMessageDispatch();
    const [time, setTime] = useState({});
    const token = localStorage.getItem('token-whatsapp');
    let usuario = name?.username;

    const handleMessage = () => {
        dispatch({
            type: 'REMOVE_MESSAGE',
        })
    };

    useEffect(() => {
        const getUserLastTime = async (usuario) => {
            try {
                let options = {
                    method: 'GET',
                    headers: {
                        "Content-type" : "application/json; charset=utf-8",
                        "authorization": token? `Bearer ${token}` : null,
                    }
                };

                const res = await axios(`/getUserLastTime?to=${usuario}`, options);
                setTime(res.data.message);
            } catch (err) {
                console.log(err.response);
            }
        };

        getUserLastTime(usuario);

    }, [token, usuario]);

    return (
        <div className='chatHeader'>
            <IconButton onClick={handleMessage}>
                <ArrowBackIcon />
            </IconButton>
            <Avatar sx={{ bgcolor: blueGrey[700] }}>
                {chatAt(name.name)}
            </Avatar>
            <aside className='chatHeader__user'>
                <h2>{Capitalize(name.name)}</h2>
                {
                  time && <time>Ult. vez {moment(time?.updatedAt).subtract('hour').fromNow()}</time>
                }
            </aside>
            <aside className='chatHeader__botons'>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </aside>
        </div>
    )
}

export default ChatHeader;