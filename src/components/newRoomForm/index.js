import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
          placeholder="Create a room"
          required
        />
        <button id="create-room-btn" type="submit">+</button>
      </form>
    </div>
  );
};

NewRoomForm.propTypes = {
  createRoom: PropTypes.func.isRequired,
};

export default NewRoomForm;
