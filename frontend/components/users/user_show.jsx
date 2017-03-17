import React from 'react';
import { Link } from 'react-router';
import UserFormContainer from './user_form_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.profileImage = this.profileImage.bind(this);
  }

  render() {
    const {formType} = this.props;
    return (
      <div>
        <h1 className="user-title">{this.state.username}</h1>
        <div className="user-profile-img">{this.profileImage()}</div>
      </div>
    );
  }

  profileImage() {
    if (this.state.profile_img_url === "") {
      return (
        <div width="150px" height="150px">H</div>
      );
    }

  }




}

export default UserShow;
