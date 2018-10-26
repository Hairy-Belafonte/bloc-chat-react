import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/Username';

import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyCUIuSwAUwIye4tvZR76PH27MegjI-QcTs",
  authDomain: "bloc-chat-react-0947.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-0947.firebaseio.com",
  projectId: "bloc-chat-react-0947",
  storageBucket: "bloc-chat-react-0947.appspot.com",
  messagingSenderId: "123517165138"
};
firebase.initializeApp(config);



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedRoom: "",
        user: ""
    };
  }
  setUser(user){
    this.setState({user: user});
  }
  setSelectedRoom(room) {
    this.setState({ selectedRoom: room });
  }

  render() {
    const updateRoom = roomId => this.setState({...this.state, selectedRoom : roomId})

    return (
      <div className="App">
        <RoomList firebase={firebase} setSelectedRoom={this.setSelectedRoom.bind(this)} roomClick={updateRoom} />
        <MessageList firebase={firebase} selectedRoom={this.state.selectedRoom.key} />
        <User firebase={firebase} setUser={this.setUser.bind(this)} user={this.state.user}/>
      </div>
    );
  }
}

export default App;