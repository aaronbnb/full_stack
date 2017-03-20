import React from 'react';
import { Link } from 'react-router';
import UserFormContainer from './user_form_container';

class UserNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: (this.props.location.pathname.slice(-2) === 'it') ? 'edit' : 'show'
    };
  }

  componentWillReceiveProps() {
    this.state = {
      page: (this.props.location.pathname.slice(-2) === 'it') ? 'edit' : 'show'
    };
  }

  render() {
    return (
      <div>
        { this.navBar(this.state.page) }
        <div>{ this.props.children }</div>
      </div>

    );
  }

  navBar(pageType) {
    if (this.state.page === 'edit') {
      return (
      <div>
        <div className='user-nav-bar-container'>
          <nav className='user-nav-bar'>
            <div className="nav-bar-unselected">
              <Link to={`users/${this.props.currentUser.id}`}>
                <i className="fa fa-eye fa-2x" aria-hidden="true"/>
                &nbsp;
                View Profile
              </Link>
            </div>
            <div className={"nav-bar-selected"}>
              <Link to={`users/${this.props.currentUser.id}/edit`} formType={'edit'}>
                <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"/>
                &nbsp;
                Edit Profile & Settings
              </Link>
            </div>
          </nav>
        </div>
      </div>
      );
    } else {
      return (
        <div>
        <div className='user-nav-bar-container'>
          <nav className='user-nav-bar'>
            <div className="nav-bar-selected">
              <Link to={`users/${this.props.currentUser.id}`}>
                <i className="fa fa-eye fa-2x" aria-hidden="true"/>
                &nbsp;
                View Profile
              </Link>
            </div>
            <div className="nav-bar-unselected">
              <Link to={`users/${this.props.currentUser.id}/edit`} formType={'edit'}>
                <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"/>
                &nbsp;
                Edit Profile & Settings
              </Link>
            </div>
          </nav>
        </div>
        </div>
      );
    }
  }

}

export default UserNav;
