import React from 'react';
import PropTypes from 'prop-types';
import Message from '../message';
import './style.scss';

const MessageList = ({ roomId, roomName, messages }) => {
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

  // const ref = useRef(null);

  // useEffect(() => {
  // console.log(ref.current.scrollTop);
  // `ref.current` now refers to the first non-empty child
  // }, []);

  if (!roomId) {
    return (
      <div
        className="message-list"
      // ref={ref}
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
    // ref={ref}
    >
      <h2>{roomName}</h2>
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
