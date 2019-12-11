import React, { useState, useEffect, useCallback } from 'react';
import Chatkit from '@pusher/chatkit-client';
import RoomList from '../roomList';
import MessageList from '../messageList';
import NewRoomForm from '../newRoomForm';
import SendMessageForm from '../sendMessageForm';
import './style.scss';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [joinedRooms, setJoinedRooms] = useState([]);
  const [joinableRooms, setJoinableRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  const [roomId, setRoomId] = useState(null);
  const [roomName, setRoomName] = useState(null);

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

  const getRooms = useCallback(() => {
    currentUser.getJoinableRooms()
      .then((rooms) => {
        setJoinableRooms(rooms);
        setJoinedRooms(currentUser.rooms);
      })
      .catch((err) => err);
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) return;
    getRooms();
  }, [currentUser, getRooms]);

  const subscribeToRoom = (id) => {
    setMessages([]);

    currentUser.subscribeToRoom({
      roomId: id,
      hooks: {
        onMessage: (message) => {
          setMessages((prevMessages) => ([...prevMessages, message]));
        },
      },
    })
      .then((room) => {
        setRoomId(room.id);
        setRoomName(room.name);
        getRooms();
      })
      .catch((err) => err);
  };

  const sendMessage = (text) => {
    currentUser.sendMessage({
      text,
      roomId,
    });
  };

  return (
    <div className="app">
      <div className="rooms">
        <RoomList
          subscribeToRoom={subscribeToRoom}
          rooms={[...joinableRooms, ...joinedRooms]}
          roomId={roomId}
        />
        <NewRoomForm />
      </div>
      <div className="messages">
        <MessageList
          roomId={roomId}
          roomName={roomName}
          messages={messages}
        />
        <SendMessageForm
          disabled={!roomId}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default App;
