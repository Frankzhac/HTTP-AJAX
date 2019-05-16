import React from 'react';
import './App.css';
import axios from "axios"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      message: "Blah Blah"
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {this.setState({ friends: res.data, message: "New Blah blah" });
      })
      .catch(err => {
        this.setState({
          message: "Data fetching failed!"
        });
      });
  }

  render(){
    console.log(this.state.message);
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    )
  }



}

export default App;
