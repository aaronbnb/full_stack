import React from 'react';
import { Link } from 'react-router';
import UserFormContainer from './user_form_container';

class UserNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    const {formType} = this.props;
    return (
      <div>
        <nav>{this.navBar(formType)}</nav>
        <br/><br/>
        <h1>We're coming from navBar, {this.props.currentUser.username} profile</h1>
        <br/><br/>
        { this.props.children }
      </div>

    );
  }

  navBar(pageType) {
    return (
      <nav className='user-nav-bar'>
        <img src="https://s5.postimg.org/w23pq1407/Screen_Shot_2017_03_16_at_2_01_26_PM.png"/>
        <Link to={`users/${this.props.currentUser.id}`}>
          View Profile</Link>
        <img src="https://s5.postimg.org/eq3d4laiv/Screen_Shot_2017_03_16_at_2_17_31_PM.png"/>
        <Link to={`users/${this.props.currentUser.id}/edit`}>
          Edit Profile & Settings</Link>
      </nav>
    );
  }

  editUser() {
    return (
      <UserFormContainer currentUser={this.props.currentUser} formType={'edit'}/>
    );
  }

}

export default UserNav;
