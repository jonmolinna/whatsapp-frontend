import React, { useState, useEffect } from 'react';
import './ChatBody.css';
import ChatMessage from './ChatMessage';
import ChatInicioMessage from './ChatInicioMessage';

import axios from '../util/axios';

const ChatBody = ({ name }) => {
    const [messages, setMessages] = useState([]);
    const token = localStorage.getItem('token-whatsapp');
    let usuario = name?.username;

    useEffect(() => {
        const getMessagesUser = async (usuario) => {
            try {
                let options = {
                    method: 'GET',
                    headers: {
                        "Content-type" : "application/json; charset=utf-8",
                        "authorization": token? `Bearer ${token}` : null,
                    }
                };
    
                const res = await axios(`/getMessages?to=${usuario}`, options);
                setMessages(res.data.messages)
                
            } catch (err) {
                console.log(err.response);
            }
        };

        getMessagesUser(usuario);
    }, [token, usuario]);

    return (
        <div className='chatBody'>
            <div className='chatBody__content'>
                {
                    messages.length > 0?
                    (
                        messages.map(message => (
                            <ChatMessage key={message._id} message={message} />
                        ))
                    ) : (
                        <ChatInicioMessage />
                    )
                }
            </div>
        </div>
    )
}

export default ChatBody;