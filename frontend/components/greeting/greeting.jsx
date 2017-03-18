import React from 'react';
import { Link } from 'react-router';
import UserMenuContainer from '../session/user_menu_container';
import SessionFormContainer from '../session/session_form_container';
import CampaignFormContainer from '../campaigns/campaign_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserMenu: false
    };
    this.toggleUserMenu = this.toggleUserMenu.bind(this);
  }

  sessionLinks() {
    return(
      <SessionFormContainer />
    );
  }

  userMenu(e){

    return <UserMenuContainer />;
  }

  toggleUserMenu() {
    console.log("works");
    this.setState({"showUserMenu": !this.state.showUserMenu});
  }

  personalGreeting(currentUser, logout) {
    return(
      <hgroup className="header-group">
          <br></br>
          <Link to={`campaigns`} className='campaign-create-btn' formType={'new'} currentUser={currentUser}>Start a campaign</Link>

          <div>
            <div className='current-user-link' onClick={this.toggleUserMenu}>{currentUser.username}</div>

            {(this.state.showUserMenu === true) ? this.userMenu() : ""}
          </div>
        <br></br>
      </hgroup>
    );
      // <Link to={`users/${currentUser.id}`}>{currentUser.username}</Link>
    // <button className="header-button" onClick={logout}>Log Out</button>
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
