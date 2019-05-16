import React from 'react';
import './App.css';
import axios from "axios";
import { Route } from 'react-router-dom';
import FriendList from "./Components/FriendList";
import Friend from "./Components/Friend";
import AddFriendForm from "./Components/AddFriendForm";




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      message: "",
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
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
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => this.setState({friends: res.data}))
      .catch(err =>
        console.log(err)
      )
  }


  render(){
    // console.log(this.state.message);
    return (
      <>
        <AddFriendForm addFriend={this.addFriend}/>
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
