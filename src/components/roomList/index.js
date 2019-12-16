import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const RoomList = ({
  subscribeToRoom, rooms, roomId, roomsToggle,
}) => {
  const orderedRooms = [...rooms].sort((a, b) => a.id > b.id);

  return (
    <ul className={`rooms-list ${roomsToggle && 'toggle'}`}>
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
  );
};

RoomList.defaultProps = {
  roomId: null,
};

RoomList.propTypes = {
  subscribeToRoom: PropTypes.func.isRequired,
  rooms: PropTypes.arrayOf(PropTypes.object).isRequired,
  roomId: PropTypes.string,
  roomsToggle: PropTypes.bool.isRequired,
};

export default RoomList;
