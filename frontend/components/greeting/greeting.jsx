import React from 'react';
import { Link } from 'react-router';


const loggedIn = ( currentUser, logout ) => (
  <div className="logged-in-header">
    <h2>{`Hi ${currentUser}!`}</h2>
      <br></br>
    <button onClick={logout}>Log Out</button>
  </div>
);

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/signup" >Sign Up</Link>
    &nbsp; &nbsp;
    <Link to="/login" >Log In</Link>
  </nav>
);

const Greeting = ({ currentUser, logout }) => {
  return (currentUser ? loggedIn(currentUser.username, logout) : sessionLinks());
}
;


export default Greeting;
