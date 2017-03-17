import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = this.props.currentUser;
    this.state.description = "";
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
  //  this.props.processForm(user);
  //modal code...
    debugger;
    this.props.update(user);
 }

 update(field) {
  return (e) => {
    this.setState({[field]: e.target.value});
  };
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <br/>
          <h2>Basic Info</h2>
          <br/>
            <label> Username
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="edit-input" />
            </label>
          <br/>
          <h2>Your Story</h2>
          <label> About Me
          <textarea className="about-me-box"
            value={this.state.description}
            onChange={this.update('description')}/>
          </label>
          <br/>

        </div>
        <input className='update-btn' type='submit'/>
      </form>

    );
  }
}

export default UserForm;
