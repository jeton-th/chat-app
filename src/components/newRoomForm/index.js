import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const NewRoomForm = ({ createRoom, roomsToggle }) => {
  const [roomName, setRoomName] = useState('');

  const handleChange = (e) => {
    setRoomName(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!roomName) return;
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
        />
        <button
          type="submit"
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </form>
    </div>
  );
};

NewRoomForm.propTypes = {
  createRoom: PropTypes.func.isRequired,
  roomsToggle: PropTypes.bool.isRequired,
};

export default NewRoomForm;
