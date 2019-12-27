import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const SendMessageForm = ({ disabled, sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
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
        placeholder="Type A Message"
        disabled={disabled}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        <FontAwesomeIcon icon={faLocationArrow} />
      </button>
    </form>
  );
};

SendMessageForm.propTypes = {
  disabled: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default SendMessageForm;
