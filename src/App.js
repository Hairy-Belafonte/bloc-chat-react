import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase}/>
      </div>
    );
  }
}



export default App;