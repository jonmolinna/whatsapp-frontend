import React from 'react';
import { Box, Avatar, IconButton } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import { style } from '../../style';

const Sidebar = () => {
    return (
        <Box sx={{ borderRight: `2px solid ${style.border_color}`, height: "100vh" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", padding: ".4rem", height: "3.5rem" }}>
                <Avatar sx={{ bgcolor: blueGrey[700] }}>
                    N
                </Avatar>
                <Box>
                    <IconButton >
                        <DonutLargeIcon sx={{ color: grey[600] }} />
                    </IconButton>
                    <IconButton>
                        <MessageIcon sx={{ color: grey[600] }} />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon sx={{ color: grey[600] }} />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ padding: ".4rem", backgroundColor: style.color_white, borderBottom: `2px solid ${style.border_color}`, height: "3.5rem" }}>
                <Box sx={{ display: "flex", alignItems: "center", backgroundColor: style.color_gray, padding: ".4rem", borderRadius: "10px" }}>
                    <SearchIcon sx={{ color: grey[600] }} />
                    <input
                        type="text"
                        placeholder='Busca un chat'
                        style={{ backgroundColor: 'inherit', outline: "none", border: "none", width: "100%", marginLeft: "3ch" }}
                    />
                </Box>
            </Box>
            <Box sx={{ backgroundColor: style.color_white, overflowY: "scroll", overflowX: "hidden", height: "calc(100vh - 3.5rem - 3.5rem)" }}>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </Box>
        </Box >
    )
}

export default Sidebar