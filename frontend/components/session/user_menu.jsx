import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';
import { logout } from '../../actions/session_actions';

 class UserMenu extends React.Component{
 	  constructor(props){
 	    super(props);
      this.state = this.props;
      this.closeMenuAndLink = this.closeMenuAndLink.bind(this);
      this.logoutExit = this.logoutExit.bind(this);
 	  }

    closeMenuAndLink(path){
      return e =>
    { this.props.toggle();
      this.props.router.push(path);};
    }

    logoutExit() {
      return e => {
      this.props.logout()
      .then(this.props.toggle());
      this.setState({});
      hashHistory.push("/");};
    }

 	  render(){
 	    return(
        <div>
          <ul className="header-popout">
            <li className="popout-li" onClick={this.closeMenuAndLink(`/users/${this.props.currentUser.id}/campaigns`)}>My Campaigns</li>
            <li className="popout-li" onClick={this.closeMenuAndLink(`/users/${this.props.userId}/contributions`)}>My Contributions</li>
            <li className="popout-li" onClick={this.closeMenuAndLink(`/users/${this.props.currentUser.id}`)}>My Profile</li>
            <li className="popout-li" onClick={this.closeMenuAndLink(`users/${this.props.currentUser.id}/edit`)}>My Settings</li>
            <li className="popout-li" onClick={this.logoutExit()}>Log Out</li>
          </ul>
        </div>
 	    );
 	  }

 }

 export default withRouter(UserMenu);
