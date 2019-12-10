import React from 'react';
import PropTypes from 'prop-types';

const RoomList = ({ subscribeToRoom, rooms, roomId }) => {
  const orderedRooms = [...rooms].sort((a, b) => a.id > b.id);

  return (
    <div className="rooms-list">
      <ul>
        <h3>Your rooms:</h3>
        {orderedRooms.map((room) => {
          const active = room.id === roomId ? 'active' : '';
          return (
            <li key={room.id} className={`room ${active}`}>
              <button
                type="button"
                onClick={() => subscribeToRoom(room.id)}
              >
                {room.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

RoomList.propTypes = {
  subscribeToRoom: PropTypes.func.isRequired,
  rooms: PropTypes.arrayOf(PropTypes.string).isRequired,
  roomId: PropTypes.number.isRequired,
};

export default RoomList;
