import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Message from '../message';

const MessageList = ({ roomId, messages }) => {
  const [node, setNode] = useState(null);

  const shouldScroll = useRef(
    node.scrollTop + node.clientHeight + 100 >= node.scrollHeight,
  );

  useEffect(() => {
    if (!shouldScroll.current) return;
    node.scrollTop = node.scrollHeight;
  });

  if (!roomId) {
    return (
      <div className="message-list" ref={(div) => setNode(div)}>
        <div className="join-room">
          Join a room! &rarr;
        </div>
      </div>
    );
  }

  return (
    <div className="message-list">
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

MessageList.propTypes = {
  roomId: PropTypes.number.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MessageList;
