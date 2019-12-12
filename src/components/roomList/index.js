import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const RoomList = ({
  subscribeToRoom, rooms, roomId, toggleRooms,
}) => {
  const orderedRooms = [...rooms].sort((a, b) => a.id > b.id);

  return (
    <div className="rooms-list">
      <h3>Rooms</h3>
      <button
        type="button"
        className="list-button"
        onClick={() => toggleRooms()}
      >
        Arrow
      </button>
      <ul>
        {orderedRooms.map((room) => {
          const active = room.id === roomId ? 'active' : '';
          return (
            <li key={room.id}>
              <button
                type="button"
                className={`room ${active}`}
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

RoomList.defaultProps = {
  roomId: null,
};

RoomList.propTypes = {
  subscribeToRoom: PropTypes.func.isRequired,
  rooms: PropTypes.arrayOf(PropTypes.object).isRequired,
  roomId: PropTypes.string,
  toggleRooms: PropTypes.func.isRequired,
};

export default RoomList;
