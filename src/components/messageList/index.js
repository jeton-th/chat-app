import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Message from '../message';

const MessageList = ({ roomId, messages }) => {
  // let node;
  // let shouldScroll;

  // if (node) {
  //   shouldScroll = useRef(
  //     node.scrollTop + node.clientHeight + 100 >= node.scrollHeight,
  //   );
  // }

  // useEffect(() => {
  //   if (!shouldScroll.current) return;
  //   node.scrollTop = node.scrollHeight;
  // });

  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current.scrollTop);
    // `ref.current` now refers to the first non-empty child
  }, []);

  if (!roomId) {
    return (
      <div className="message-list">
        <div className="join-room">
          Join a room! &rarr;
        </div>
      </div>
    );
  }

  return (
    <div ref={ref}>
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
    </div>
  );
};

MessageList.propTypes = {
  roomId: PropTypes.number,
  messages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

MessageList.defaultProps = {
  roomId: 1,
};

export default MessageList;
