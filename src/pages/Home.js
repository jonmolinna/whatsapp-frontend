import React from 'react';
import './Home.css';
// import Chat from '../components/Chat';
// import Sidebar from '../components/Sibebar';

// import { useMessageState } from '../context/message';

const Home = () => {
    // const { message } = useMessageState();

    return (
        <div className='home'>
            {/* <article className={`home__sidebar ${message? 'chat__none' : ''}`}>
                <Sidebar />
                </article>
                <article className={`home__chat ${message? '' : 'chat__none'}`}>
                <Chat />
            </article> */}
            {/* <Sidebar /> */}
            {/* <Chat /> */}
        </div>
    )
}

export default Home;