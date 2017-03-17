import React from 'react';
import { Link } from 'react-router';

import SessionFormContainer from '../session/session_form_container';
import CampaignFormContainer from '../campaigns/campaign_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks() {
    return(
      <SessionFormContainer />
    );
  }

  personalGreeting(currentUser, logout) {
    return(
      <hgroup className="header-group">
        <h3 className="header-name">
          <Link to={`campaigns`} className='campaign-create-btn' formType={'new'} currentUser={currentUser}>Start a campaign</Link>
          <Link to={`users/${currentUser.id}`}>{currentUser.username}</Link>
        </h3>
        <br></br>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    );
  }

  render() {
    return(
      <div>
        {this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()}
      </div>
    );
  }


    // Add click listener to gear icon which invokes toggle function;
  }






//
// const loggedIn = ( currentUser, logout ) => (
//   <div className="logged-in-header">
//     <h2>{`Hi ${currentUser}!`}</h2>
//       <br></br>
//     <button onClick={logout}>Log Out</button>
//   </div>
// );
//
// const sessionLinks = () => (
//   <nav className="login-signup">
//     <Link to="/signup" >Sign Up</Link>
//     &nbsp; &nbsp;
//     <Link to="/login" >Log In</Link>
//   </nav>
// );
//
// const Greeting = ({ currentUser, logout }) => {
//   return (currentUser ? loggedIn(currentUser.username, logout) : sessionLinks());
// }
// ;


export default Greeting;
