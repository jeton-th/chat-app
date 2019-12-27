import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Message from '../message';
import './style.scss';

const MessageList = ({ roomId, roomName, messages }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!roomId) return;
    const node = ref.current;
    const shouldScroll = node.scrollTop + node.clientHeight + 500 >= node.scrollHeight;
    if (shouldScroll) node.scrollTop = node.scrollHeight;
  }, [roomId, messages]);

  if (!roomId) {
    return (
      <div
        className="message-list"
      >
        <div className="join-room">
          &larr; Join a room!
        </div>
      </div>
    );
  }

  return (
    <div
      className="message-list"
      ref={ref}
    >
      <h3>{roomName}</h3>
      {
        messages.map((message) => (
          <Message
            key={message.id}
            username={message.senderId}
            text={message.text}
          />
        ))
        }
    </div>
  );
};

MessageList.defaultProps = {
  roomId: null,
  roomName: null,
};

MessageList.propTypes = {
  roomId: PropTypes.string,
  roomName: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default MessageList;
