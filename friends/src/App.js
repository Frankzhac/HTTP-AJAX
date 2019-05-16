import React from 'react';
import './App.css';
import axios from "axios";
import { Route } from 'react-router-dom';
import FriendList from "./Components/FriendList";
import Friend from "./Components/Friend";




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      message: "",
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {this.setState({ friends: res.data, message: "New Blah blah" })
      })
      .catch(err => {
        this.setState({
          message: "Data fetching failed!"
        });
      });
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    // friend={this.state}
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => console.log(res))
      .catch(err =>
        console.log(err)
      )
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render(){
    // console.log(this.state.message);
    return (
      <>
        <form>
         <input type="text" placeholder="name..." name="name" value={this.state.name} onChange={this.onChange}/>
         <input type="number" placeholder="age..." name="age" value={this.state.age} onChange={this.onChange}/>
         <input type="email" placeholder="email..." name="email" value={this.state.email} onChange={this.onChange}/>
         <button onClick={this.addFriend}>Add Friend</button>
        </form>
        {this.state.friends.map(friend => <FriendList friend={friend} key={friend.id}/>)}
      </>

        // {this.state.friends.map(friend =>
        // <Route exact path="/"  render={props => <FriendList {...props} friend={friend}/> } />)}
        // <Route
        //   path="/friend-list/:id"
        //   render={props => <Friend {...props} friends={this.state.friends} />}
        // />
    )
  }

}

export default App;
