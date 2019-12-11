import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SendMessageForm = ({ disabled, sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage('');
  };

  return (
    <form
      className="send-message-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={message}
        placeholder="SendMessageForm"
        disabled={disabled}
        onChange={handleChange}
      />
    </form>
  );
};

SendMessageForm.propTypes = {
  disabled: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default SendMessageForm;
