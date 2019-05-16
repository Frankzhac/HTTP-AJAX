import React, { Component } from "react";
import axios from "axios";
import FriendCard from "./FriendCard";

export default class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: null
    };
  }

  componentDidMount() {
    this.fetchFriend(this.props.match.params.id);
  }

  fetchFriend = id => {
    axios
      .get(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
        this.setState(() => ({ friend: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (!this.state.friend) {
      return <div>Finding friend information...</div>
    }

    return (
      <div>
        <FriendCard friend={this.state.friend} />
      </div>
    )
  }
}
