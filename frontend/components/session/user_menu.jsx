
import React from 'react';
import {withRouter, Link} from 'react-router';
import { logout } from '../../actions/session_actions';

 class UserMenu extends React.Component{
 	  constructor(props){
 	    super(props);
      this.state = this.props;
      this.link = this.link.bind(this);
 	  }

    link(path){
      return (e) =>
    { this.props.toggle();
      this.props.router.push(path);};
    }

 	  render(){
 	    return(
        <div>
          <ul className="header-popout">
            <li className="popout-li" onClick={this.link(`/users/${this.props.currentUser.id}/campaigns`)}>My Campaigns</li>
            <li className="popout-li" onClick={this.link(`/users/${this.props.userId}/contributions`)}>My Contributions</li>
            <li className="popout-li"><Link to={`users/${this.props.currentUser.id}`} formType={'show'}>My Profile</Link></li>
            <li className="popout-li"><Link to={`users/${this.props.currentUser.id}/edit`} formType={'edit'}>My Settings</Link></li>
            <li className="popout-li" onClick={this.props.logout}>Log Out</li>
          </ul>
        </div>
 	    );
 	  }
 }

 export default withRouter(UserMenu);
