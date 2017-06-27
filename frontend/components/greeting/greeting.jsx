import React from 'react';
import { Link } from 'react-router';
import UserMenuContainer from '../session/user_menu_container';
import SessionFormContainer from '../session/session_form_container';
import CampaignFormContainer from '../campaigns/campaign_form_container';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserMenu: false,
      arrow: true
    };
    this.toggleUserMenu = this.toggleUserMenu.bind(this);
    this.toggleArrow = this.toggleArrow.bind(this);
  }

  sessionLinks() {
    return(
      <SessionFormContainer />
    );
  }

  userMenu(e){

    return <UserMenuContainer toggle={this.toggleUserMenu}/>;
  }

  toggleUserMenu() {
    this.setState({"showUserMenu": !this.state.showUserMenu});
  }

  toggleArrow(e) {
    e.preventDefault();
    clearTimeout();
    console.log("hello");
    this.setState({'arrow': !this.state.arrow});
  }

  personalGreeting(currentUser, logout) {
    return(
      <div>
        <hgroup className="header-group">
          <br></br>
            <Link to={`campaigns`} className='campaign-create-btn' formType={'new'} currentUser={currentUser}>Start a campaign</Link>

            <div className='user-dropdown-container'>
              <div className='current-user-link'
                onClick={this.toggleUserMenu}
                onMouseEnter={this.toggleArrow}
                onMouseLeave={this.toggleArrow}
              >
                {currentUser.username}
                <div className={(this.state.arrow) ? 'arrow-up' : 'arrow-down'}>
                  <span> > </span>
                </div>
              </div>

              <ReactCSSTransitionGroup
                 transitionName="example-enter"
                 transitionEnterTimeout={500}
                 transitionLeaveTimeout={300}>
                 {(this.state.showUserMenu === true) ? this.userMenu() : ""}
              </ReactCSSTransitionGroup>
            </div>
          <br></br>
        </hgroup>
      </div>
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
