import React, { useState, useEffect, useCallback } from 'react';
import Chatkit from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from '../../config';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  // const [roomId, setRoomId] = useState(null);
  const [joinedRooms, setJoinedRooms] = useState([]);
  const [joinableRooms, setJoinableRooms] = useState([]);

  const getRooms = useCallback(() => {
    currentUser.getJoinableRooms()
      .then((rooms) => {
        setJoinableRooms(rooms);
        setJoinedRooms(currentUser.rooms);
      })
      .catch((err) => err);
  }, [currentUser]);

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
      })
      .catch((err) => err);
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    getRooms();
  }, [currentUser, getRooms]);


  return (
    <div className="App">
      {
        currentUser && (
          <div>
            <h2>{currentUser.name}</h2>

            <h3>Joined Rooms</h3>
            <ul>
              {joinedRooms.map((room) => <li key={room.id}>{room.name}</li>)}
            </ul>

            <h3>Other Rooms</h3>
            <ul>
              {joinableRooms.map((room) => <li key={room.id}>{room.name}</li>)}
            </ul>
          </div>
        )
      }
    </div>
  );
};

export default App;
