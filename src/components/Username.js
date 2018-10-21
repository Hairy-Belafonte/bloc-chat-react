import React, { Component } from 'react';
import { format } from 'url';

class User extends Component {

    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
      }
    
        
    
    componentDidMount() {
        this.props.firebase.auth().onAuthStateChanged( user => {
            this.props.setUser(user);
        });
    }
    
  
    
    signIn (){
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup( provider )
        
        
    }
    
    signOut () {
        this.props.firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }
    
    
    render() {
    return (
        
        <section className="sign-in-wrapper">
        {this.props.user ? this.props.user.displayName : "Guest"}
        <div className="sign-in-button">
        <button type="button" value="sign-in" onClick={ () => this.signIn() }>Sign In</button>
        </div>
        <button type="button" value="sign-out" onClick={ () => this.signOut() }>Sign Out</button>
      </section>
    );
  }
}

    export default User;