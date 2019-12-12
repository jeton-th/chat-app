import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const NewRoomForm = ({ createRoom }) => {
  const [roomName, setRoomName] = useState('');

  const handleChange = (e) => {
    setRoomName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createRoom(roomName);
    setRoomName('');
  };

  return (
    <div className="new-room-form">
      <form onSubmit={handleSubmit}>
        <input
          value={roomName}
          onChange={handleChange}
          type="text"
          placeholder="Create A Room"
          required
        />
      </form>
    </div>
  );
};

NewRoomForm.propTypes = {
  createRoom: PropTypes.func.isRequired,
};

export default NewRoomForm;
