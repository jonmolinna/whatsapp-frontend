import React from 'react';
import { Box, Grid } from '@mui/material';
import { style } from '../style';
import Sidebar from '../components/Sidebar/Sidebar';
import Chat from '../components/Chat/Chat';

const Home = () => {

    return (
        <Box sx={{ backgroundColor: style.color_gray, height: '100vh' }}>
            <Grid container>
                <Grid item xs={4}>
                    <Sidebar />
                </Grid>
                <Grid item xs={8}>
                    <Chat />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;