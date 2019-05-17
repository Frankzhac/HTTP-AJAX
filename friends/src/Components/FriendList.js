import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import FriendCard from './FriendCard';


const FriendList = (props) => {
  const friend = props.friends.find(
    thing => `${thing.id}` === props.match.params.id
  );

  const deleteHandler = e => {
    e.preventDefault();
    props.deleteFriend(props.match.params.id);
  };

  const updateHandler = e => {
    e.preventDefault();
    props.updateFriend(props.match.params.id);
  };

    return (
      <div className="friend-list">
        <h1>{props.friend.name}</h1>
        <h2>{props.friend.age}</h2>
        <h3>{props.friend.email}</h3>
        <div className="delete-btn">
          <button className="md-button delete-btn" onClick={deleteHandler}>
            Delete
          </button>
          <button className="md-button update-btn" onClick={updateHandler}>
            Update
          </button>
        </div>
      </div>
    );
};



// function FriendDetails({ friend }) {
//   return (
//    <Link to={`/friends/${friend.id}`}>
//     <FriendCard friend={friend} />
//    </Link>
//   );
// }


export default FriendList;
