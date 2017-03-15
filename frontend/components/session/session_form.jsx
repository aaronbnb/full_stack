import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  render() {
    //need to add classes to this form
    const { formType } = this.props;
    const formHeader = (formType === 'login') ? "Log In" : "Sign Up";
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>{ formHeader } or {this.navLink()}</h3>
          {this.renderErrors()}
          <br/>
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								/>
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								/>
						</label>
						<br/>
						<input type="submit" value="Submit" />
        </form>
      </div>

    );
  }

  formHeader() {

  }

  navLink() {
    const { formType } = this.props;

    if(formType === 'login') {
      return <Link to={'/signup'}>Sign Up instead</Link>;
    } else {
      return (
        <Link to={'/login'}>Log In instead</Link>
      );
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }


  handleSubmit(e) {
   e.preventDefault();
   const user = Object.assign({}, this.state);
   this.props.processForm(user);
 }
  //...
}

export default withRouter(SessionForm);
