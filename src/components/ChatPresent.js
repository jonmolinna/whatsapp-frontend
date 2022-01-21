import React from 'react';
import './ChatPresent.css';

import { useAuthState } from '../context/auth';
import { Capitalize } from '../util/capitalize';

const ChatPresent = () => {
    const { user } = useAuthState();

  return (
      <div className='chatPresent'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png" alt="" />
          <h2>{ Capitalize(user.name) }</h2>
          <p>Bienvenido a Whatsapp Clone</p>
      </div>
  );
};

export default ChatPresent;