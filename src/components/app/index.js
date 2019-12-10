import React, { useState, useEffect } from 'react';
import Chatkit from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from '../../config';

const App = () => {
  const [currentUser, setCurrentUser] = useState('');


  return (
    <div className="App">
      Hello
    </div>
  );
};

export default App;
