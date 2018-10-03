import React, { Component } from 'react';
import { format } from 'url';
import NewRoom from './NewRoom';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            roomId: this.props.selectedRoom || 2
            
        };
        this.messagesRef = this.props.firebase.database().ref('messages');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps !== this.props) {
          this.setState({ ...this.state, roomId : nextProps.selectedRoom})
        }    
    }

    componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
          const message = snapshot.val();
          message.key = snapshot.key;
          this.setState({...this.state, messages: this.state.messages.concat( message ) });
        });
        
    }
    render() {
      const roomMessages = this.state.messages
          .filter( ({roomId = 1}) => roomId === this.state.roomId )
          .sort( (a, b) => a.sentAt - b.sentAt )
          
          

      return (
        <div className="MessageList">
         <ul>{roomMessages.map(message =>
          <li key={message.key}>
            {`${message.username}: ${message.content}`}
          </li>
        )}
        </ul>    
        </div>
  
      );
    }

} 
export default MessageList