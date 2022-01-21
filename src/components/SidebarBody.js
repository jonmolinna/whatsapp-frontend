import React, { useEffect, useState } from 'react';
import './SidebarBody.css';
import SidebarChat from './SidebarChat';
import SearchIcon from '@mui/icons-material/Search';

import axios from '../util/axios';

const SidebarBody = () => {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token-whatsapp');

    useEffect(() => {
        const getChats = async () => {
            try {
                let options = {
                    method: 'GET',
                    headers: {
                        "Content-type" : "application/json; charset=utf-8",
                        "authorization": token? `Bearer ${token}` : null,
                    }
                };
                const res = await axios('/getUsersLastMessage', options);
                setUsers(res.data.users)
            } catch (err) {
                console.log(err.response);
            }
        };

        getChats();
    }, [token]);

    return (
        <div className='sidebarBody'>
            <aside className='sidebarBody__search'>
                <article className='sidebarBody__input'>
                    <SearchIcon />
                    <input type="text" placeholder='Busca un chat' />
                </article>
            </aside>
            <aside className='sidebarBody__chats'>
                {
                    users && users.map(user => (
                        <SidebarChat key={user._id} user={user} />
                    ))
                }
            </aside>
        </div>
    )
}

export default SidebarBody;