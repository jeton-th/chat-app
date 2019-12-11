import React from 'react';
import './style.scss';

const NewRoomForm = () => (
  <div className="new-room-form">
    <form>
      <input
        type="text"
        placeholder="NewRoomForm"
        required
      />
      <button id="create-room-btn" type="submit">+</button>
    </form>
  </div>
);

export default NewRoomForm;
