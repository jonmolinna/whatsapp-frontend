import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { style } from '../style';
import Sidebar from '../components/Sidebar/Sidebar';
import ChatHome from '../components/Chat/ChatHome';
import Chat from '../components/Chat/Chat';
import { ContextUsers } from '../context/users/Context';

const Home = () => {
    const { isIdMessage } = useContext(ContextUsers);

    return (
        <Box sx={{ backgroundColor: style.color_gray, height: '100vh' }}>
            <Grid container>
                <Grid item xs={4}>
                    <Sidebar />
                </Grid>
                <Grid item xs={8}>
                    {
                        isIdMessage ? <Chat /> : <ChatHome />
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;