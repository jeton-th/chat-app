import React, { useState, useEffect, useCallback } from 'react';
import Chatkit from '@pusher/chatkit-client';
import RoomList from '../roomList';
import MessageList from '../messageList';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [joinedRooms, setJoinedRooms] = useState([]);
  const [joinableRooms, setJoinableRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  const [roomId, setRoomId] = useState(null);

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
      instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
      userId: 'admin',
      tokenProvider: new Chatkit.TokenProvider({
        url: process.env.REACT_APP_TOKEN_URL,
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

  const subscribeToRoom = (roomID) => {
    setMessages([]);
    currentUser.subscribeToRoom({
      roomId: roomID,
      hooks: {
        onNewMessage: (message) => {
          setMessages([...messages, message]);
        },
      },
    })
      .then((room) => {
        setRoomId(room.id);
        getRooms();
      })
      .catch((err) => err);
  };

  return (
    <div className="App">
      <RoomList
        subscribeToRoom={subscribeToRoom}
        rooms={[...joinableRooms, ...joinedRooms]}
        roomId={roomId}
      />
      <MessageList
        roomId={roomId}
        messages={messages}
      />
    </div>
  );
};

export default App;
