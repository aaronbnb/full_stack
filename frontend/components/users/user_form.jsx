import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
  //  this.props.processForm(user);
  //modal code...
    this.props.update(user);
    hashHistory.push(`users/${this.props.currentUser.id}`);
 }

 update(field) {
  return (e) => {
    this.setState({[field]: e.target.value});
  };
}

  render() {
    return (
    <div>
      <br/>
      <br/>
      <h1 className="user-title">{this.props.currentUser.username}</h1>
    <div className="user-profile-update-component">
      <form onSubmit={this.handleSubmit} className="user-update-form">
        <div className="user-basic-info">
          <br/>
          <h2 className="user-form-header">Basic Info</h2>
          <br/>
            <label> &nbsp; Username
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
               />
            </label>
            <br/>
            <label> &nbsp;  Email
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
             />
            </label>
            <br/>
            <label> &nbsp; Post Code
              <input type="text"
                value={this.state.zip}
                onChange={this.update('zip')}
               />
            </label>
        </div>
          <br/>
          <br/>
        <div className="update-user-bio">
          <br/>
          <h2>Your Story</h2>
          <br/>
          <label> &nbsp; Short Description
          <input className="tagline-box"
              value={this.state.tagline}
              onChange={this.update('tagline')}/>
          </label>
          <br/>
          <label> &nbsp; About Me
          <textarea className="about-me-box"
            value={this.state.description}
            onChange={this.update('description')}/>
          </label>
          <br/>
        </div>

        <input className='user-update-btn' type='submit' value="save"></input>
      </form>
    </div>
    </div>
    );
  }
}

export default UserForm;
