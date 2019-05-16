import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FriendCard from './FriendCard';


const FriendList = (props) => {
  return (
    <div className="friend-list">
      <h1>{props.friend.name}</h1>
      <h2>{props.friend.age}</h2>
      <h3>{props.friend.email}</h3>
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
