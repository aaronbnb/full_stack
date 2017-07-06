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
  }

  sessionLinks() {
    return (
      <SessionFormContainer />
    );
  }

  userMenu(e){
    return (
      <UserMenuContainer toggle={this.toggleUserMenu}/>
    );
  }

  toggleUserMenu(e) {
    this.setState({"showUserMenu": !this.state.showUserMenu,
                  "arrow": !this.state.arrow});
  }

  personalGreeting(currentUser, logout) {
    return(
        <hgroup className="header-group">
          <br></br>
            <Link to={`campaigns`} className='campaign-create-btn'
              currentUser={currentUser}>Start a campaign</Link>

            <div className='user-dropdown-container'>
              <div className='current-user-link'
                onMouseOver={this.toggleUserMenu}>
                {currentUser.username}
                <div className={(this.state.arrow) ? 'arrow-up' : 'arrow-down'}>
                  <span id="arrow"> > </span>
                </div>
              </div>

                 {(this.state.showUserMenu === true) ? this.userMenu() : ""}

            </div>
          <br></br>
        </hgroup>
    );
  }

  render() {
    const { currentUser } = this.props;
    return(
      <div>
        {currentUser ?
          this.personalGreeting(currentUser, this.props.logout) : this.sessionLinks()}
      </div>
    );
  }
}


export default Greeting;
