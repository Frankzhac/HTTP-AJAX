import React, { Component } from "react";
import axios from "axios";

export default class AddFriendForm extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  }


  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.props)
    return (
      <form>
       <input type="text" placeholder="name..." name="name" value={this.state.name} onChange={this.onChange}/>
       <input type="number" placeholder="age..." name="age" value={this.state.age} onChange={this.onChange}/>
       <input type="email" placeholder="email..." name="email" value={this.state.email} onChange={this.onChange}/>
       <button onClick={(e) => this.props.addFriend(e,this.state)}>Add Friend</button>
      </form>
    )
  }
}
