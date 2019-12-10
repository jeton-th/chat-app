import React, { useState, useEffect } from 'react';
import Chatkit from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from '../../config';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [joinableRooms, setJoinableRooms] = useState([]);
  const [joinedRooms, setJoinedRooms] = useState([]);


  const getRooms = () => {
    currentUser.getJoinableRooms()
      .then((rooms) => {
        setJoinableRooms(rooms);
        setJoinedRooms(currentUser.rooms);
      })
      .catch((err) => err);
  };

  useEffect(() => {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'jeton',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl,
      }),
    });

    chatManager.connect()
      .then((user) => {
        setCurrentUser(user);
        getRooms();
      })
      .catch((err) => err);
  }, [roomId]);

  console.log(joinableRooms);
  console.log(joinedRooms);

  return (
    <div className="App">
      Hello
    </div>
  );
};

export default App;
