import React, { Component } from 'react';
import { format } from 'url';

export default class NewRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.createRoom = this.createRoom.bind(this);
    }
    handleChange(e) {
        this.setState({roomName: e.target.value})
    }
    createRoom(e) {
        e.preventDefault();
        
        if(this.state.roomName !== ""){
            this.props.roomsRef.push({
                name: this.state.roomName
            });
            this.setState({ roomName: '' });
        }
    }
    render() {
        
      return (
        <div className="NewRoom">
            <form onSubmit={this.createRoom}>
              <label>
                Name:
                <input type="text" name="name" 
                    value={this.state.roomName}
                    onChange={this.handleChange}/>
              </label>
              <input type="submit" value="Submit"/>
            </form>
        </div>
  
      );
    }
  }
  
 