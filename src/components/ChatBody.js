import React, { useState, useEffect } from 'react';
import './ChatBody.css';
import ChatMessage from './ChatMessage';
import ChatInicioMessage from './ChatInicioMessage';
import Pusher from 'pusher-js';

import axios from '../util/axios';

const pusher = new Pusher('3cddea69a989a4f7e3bd', {
    cluster: 'us2'
});

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

        pusher.unsubscribe('messages')

        getMessagesUser(usuario);

        const channel = pusher.subscribe('messages');
        channel.bind('newMessages', function(data){
            getMessagesUser(usuario);
        });

        const channeldelete = pusher.subscribe('deleteMessage');
        channeldelete.bind('newDeleteMessage', function(data){
            getMessagesUser(usuario);
        });

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