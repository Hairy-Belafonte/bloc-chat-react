import React, { Component } from 'react';
import { format } from 'url';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            signInOrOut: 'Sign In'
        };
        
        
    }
    
    componentDidMount() {
        this.props.firebase.auth().onAuthStateChanged( user => {
        this.props.setUser(user);
        });
    }
    
  
    
    signInWithPopup = (e) => {
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup( provider );
        
        console.log('sign in sequance' + ' ' + this.props.user);
        
        this.setState(
            {
                display: 'block',
                signInOrOut: 'Sign Out'
            }
        )
    }
    
    signOut = (e) => {
        console.log('sign out sequance called');
        this.props.firebase.auth().signOut();
        this.setState(
            {
                signInOrOut: 'Sign In'
            }
        )
    }
    
    hideSignIn = (e) => {
        this.setState(
            {
                display: 'none'
            }
        )
    }
    
    render() {
    return (
        
        <div>
            {this.props.user ? this.props.user.displayName : 'guest'}
            
            <div className='signInPopUp'
                style={{display: this.state.display}}>
                *Please Enter Your Username and Password*
                
                <form >
                    
                    <input placeholder='Username'/>
                        <br />
                    <input placeholder='Password' />
                    
                </form>
                
            </div>
    
            <button onClick={!this.props.user ? this.signInWithPopup : this.signOut}>
                {this.state.signInOrOut}
            </button>
            
            <br />< br />
            
            <div className='currentUser'>
                <p></p>
            </div>
            
        </div>
        );
    }
    
    
    
    }

    export default User;