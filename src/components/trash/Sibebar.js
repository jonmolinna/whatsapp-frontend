import React from 'react';
import './Sibebar.css';
import SibebarHeader from './SibebarHeader';
import SidebarBody from './SidebarBody';

const Sibebar = () => {
    return (
        <div className='sidebar'>
            <SibebarHeader />
            <SidebarBody />
        </div>
    )
}

export default Sibebar;