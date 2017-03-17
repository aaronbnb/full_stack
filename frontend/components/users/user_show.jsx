import React from 'react';
import { Link } from 'react-router';
import UserFormContainer from './user_form_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = this.props;
  }

  render() {
    const {formType} = this.props;
    return (
      <div>
        <h2>We're at user show</h2>
      </div>

    );
  }


}

export default UserShow;
