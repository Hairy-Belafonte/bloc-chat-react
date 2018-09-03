import React, { Component } from 'react';
import { format } from 'url';
import NewRoom from './NewRoom';

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        };
        this.roomsRef = this.props.firebase.database().ref('rooms');
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
          const room = snapshot.val();
          room.key = snapshot.key;
          this.setState({ rooms: this.state.rooms.concat( room ) });
        });
    }

    render() {
        console.log(this.state.rooms)
      return (
        <div className="RoomList">
          <NewRoom roomsRef={this.roomsRef}/>
            <ul>{this.state.rooms.map(room => 
                <li key={room.key}>
                  {room.name}
                </li>
              )}
            </ul>
            
        </div>
  
      );
    }
  }
  
  export default RoomList;
  

//Add a form to create a room
// there should be a submit button that executes a createRoom method that 
//pushes a new room to Firebase