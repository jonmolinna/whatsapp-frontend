import React from 'react';
import './Chat.css';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import ChatHeader from './ChatHeader';
import ChatPresent from './ChatPresent';

import { useMessageState } from '../context/message';


const Chat = () => {
    const { message } = useMessageState();

    return (
        <div className='chat'>
            {
                message? (
                    <>
                        <ChatHeader name={message} />
                        <ChatBody name={message} />
                        <ChatFooter />
                    </>
                ) : (
                    <ChatPresent />
                )
            }
        </div>
    )
}

export default Chat;