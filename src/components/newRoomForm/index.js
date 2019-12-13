import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const NewRoomForm = ({ createRoom, roomsToggle }) => {
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
    <div className={`new-room-form ${roomsToggle && 'toggle'}`}>
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
  roomsToggle: PropTypes.bool.isRequired,
};

export default NewRoomForm;
