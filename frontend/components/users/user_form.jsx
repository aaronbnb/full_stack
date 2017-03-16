import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = this.props;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
  //  this.props.processForm(user);
  //modal code...
    this.props.update(user);
 }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <br/>
          <label> Email
            <input type="text"
              value={this.state.username}
              className="edit-input" />
          </label>
          <br/>
          <label> About Me
          <textarea />
          </label>
          <br/>
        </div>
        <input className='update-btn' type='submit'/>
      </form>

    );
  }
}

export default UserForm;
