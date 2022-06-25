import React, { useState } from 'react';
import './ChatFooter.css';
import { IconButton } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import { toast } from 'react-hot-toast';

import axios from '../util/axios';
import { useMessageState } from '../context/message';

const ChatFooter = () => {
    const [content, setContent] = useState('');
    const token = localStorage.getItem('token-whatsapp');
    const { message } = useMessageState();
    let toUser = message?.username

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let options = {
                method: 'POST',
                headers: {
                    "Content-type" : "application/json; charset=utf-8",
                    "authorization": token? `Bearer ${token}` : null,
                },
                data: JSON.stringify({
                    to: toUser,
                    content: content,
                })
            };
            await axios('/sendMessage', options);
            setContent('');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };


    return (
        <div className='chatFooter'>
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>
            <IconButton>
                <AttachFileIcon />
            </IconButton>
            <form className='chatFooter__input' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Escribe un mensaje aqui'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button type='submit'>Send</button>
            </form>
            {
                content.length > 0 ? (
                    <IconButton onClick={handleSubmit}>
                        <SendIcon />
                    </IconButton>
                ) : (
                    <IconButton>
                        <KeyboardVoiceIcon />
                    </IconButton>
                )
            }
        </div>
    )
}

export default ChatFooter;