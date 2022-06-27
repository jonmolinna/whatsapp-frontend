import React from 'react';
import { Box, IconButton, Avatar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { blueGrey } from '@mui/material/colors';
import Message from './Message';
import { style } from '../../style';

const Chat = () => {


    return (
        <Box sx={{ height: "100vh" }}>
            <Box sx={{ padding: ".4rem", height: "3.5rem", borderBottom: `2px solid ${style.border_color}` }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                    <Avatar sx={{ bgcolor: blueGrey[700], marginRight: "1ch" }}>T</Avatar>
                    <Box sx={{ flexGrow: "1" }}>
                        <Typography
                            variant="subtitle1"
                            component="h3"
                        >
                            Name User
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{ marginTop: "-7px" }}
                        >
                            fecha
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
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
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
                        sx={{ flexGrow: "1", backgroundColor: `${style.color_white}`, padding: ".3rem", borderRadius: "7px" }}
                    >
                        <input
                            type="text"
                            placeholder='Escribe un mensaje aquí'
                            style={{ width: "100%", border: "none", outline: "none" }}
                        />
                        <button type='submit' style={{ display: "none" }}>Send</button>
                    </Box>
                    <IconButton>
                        <MicIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Chat;