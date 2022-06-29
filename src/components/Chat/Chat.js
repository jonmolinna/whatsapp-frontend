import React, { useEffect, useContext, useRef } from 'react';
import { Box, IconButton, Avatar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import { blueGrey } from '@mui/material/colors';
import Message from './Message';
import { style } from '../../style';
import useMessages from '../../hooks/useMessages';
import { ContextMessages } from '../../context/messages/Context';
import { ContextUsers } from '../../context/users/Context';
import { Capitalize } from '../../util/capitalize';
import { chatAt } from '../../util/chatAt';
import moment from 'moment';
import 'moment/locale/es';
import { RESET_MESSAGES_BY_USER } from '../../context/messages/Types';
import { CLEAR_USER_TO_CHAT } from '../../context/users/Types';
import Pusher from 'pusher-js';

const pusher = new Pusher('3cddea69a989a4f7e3bd', {
    cluster: 'us2'
});

const Chat = () => {
    const [getMessagesByUser, message, setMessage, handleSendMessage] = useMessages();
    const { messages, dispatch: dispatchMessages } = useContext(ContextMessages);
    const { userChat, dispatch: dispatchUsers } = useContext(ContextUsers);
    const ultFechaConect = userChat?.latestMessage?.createdAt || userChat?.createdAt;
    const isMountedRef = useRef(true);

    useEffect(() => {
        pusher.unsubscribe('messages');

        getMessagesByUser();

        const channel = pusher.subscribe('messages');
        channel.bind('newMessages', function (data) {
            getMessagesByUser();
        });

        return () => {
            isMountedRef.current = false;
        }
    }, [getMessagesByUser]);

    const handleSubmitMessage = (e) => {
        e.preventDefault();
        if (!message) return false;
        handleSendMessage();
    };

    const handleCloseChat = () => {
        dispatchMessages({
            type: RESET_MESSAGES_BY_USER
        });
        dispatchUsers({
            type: CLEAR_USER_TO_CHAT
        });
    };

    return (
        <Box sx={{ height: "100vh" }}>
            <Box sx={{ padding: ".4rem", height: "3.5rem", borderBottom: `2px solid ${style.border_color}` }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={() => handleCloseChat()}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Avatar sx={{ bgcolor: blueGrey[700], marginRight: "1ch" }}>
                        {chatAt(userChat?.name)}
                    </Avatar>
                    <Box sx={{ flexGrow: "1" }}>
                        <Typography
                            variant="subtitle1"
                            component="h3"
                        >
                            {Capitalize(userChat?.name)}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{ marginTop: "-7px" }}
                        >
                            últ. vez {moment(ultFechaConect).subtract('hour').fromNow()}
                        </Typography>
                    </Box>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box
                sx={{
                    height: "calc(100vh - 3.5rem - 3.5rem)", overflowY: "scroll", overflowX: "hidden", backgroundRepeat: "repeat", backgroundPosition: "left top",
                    backgroundImage: 'url("https://res.cloudinary.com/dhdxq3mkm/image/upload/v1656282167/whatsapp-project/fondo_chat_ligth_lryzvx.jpg")'
                }}
            >
                <Box sx={{ padding: "1rem" }}>
                    {
                        messages && messages.map(message => (
                            <Message key={message._id} message={message} />
                        ))
                    }
                </Box>
            </Box>
            <Box sx={{ height: "3.5rem", padding: ".4rem", borderTop: `2px solid ${style.border_color}` }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                        <InsertEmoticonIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <Box
                        component="form"
                        autoComplete='off'
                        onSubmit={handleSubmitMessage}
                        sx={{ flexGrow: "1", backgroundColor: `${style.color_white}`, padding: ".3rem", borderRadius: "7px" }}
                    >
                        <input
                            type="text"
                            placeholder='Escribe un mensaje aquí'
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{ width: "100%", border: "none", outline: "none" }}
                        />
                        <button type='submit' style={{ display: "none" }}>Send</button>
                    </Box>
                    <IconButton onClick={handleSubmitMessage}>
                        {
                            message.length > 0 ? <SendIcon /> : <MicIcon />
                        }
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
};

export default Chat;