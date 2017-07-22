import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      // this.state = { username: "", password: ""};
      this.state = {
          username: "",
          password: "",
          modalOpen: false,
			    modalType: 'login'
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.demo = this.demo.bind(this);
      this.headerDemo = this.headerDemo.bind(this);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  headerDemo() {
    this.openModal('login');
    setTimeout(
    this.setState({
      username: "aaron11",
      password: "password"
    }),
    2000);
    this.props.login({user: {username: "aaron11", password: "password"}});
  }

  demo() {
    this.setState({
      username: "aaron12",
      password: "password"
    });
    this.props.login(this.state);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  render() {

    return (

			<div className="login-signup-box">
				<nav className="login-signup">
          <Link onClick={this.headerDemo.bind(this)}
            >Demo</Link>
          &nbsp;  &nbsp;
					<Link onClick={this.openModal.bind(this, 'signup')}
            >Sign Up</Link>
          &nbsp;  &nbsp;
          <Link onClick={this.openModal.bind(this, 'login')}
            className='rightmost'>Log In</Link>
          &nbsp;  &nbsp;
				</nav>

				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					style={ModalStyle}
          >
          <p className="modal-title">Welcome to IndieClono!</p>

        <br/>
					<form onSubmit={this.handleSubmit} >
            {this.renderErrors()}
            <p className="signup-text">
              <em>{(this.state.modalType === 'signup')
              ? 'sign up ' : 'log in '}</em></p>
						<div className="login-form">
							<label> Username:
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>
							<br/>
							<label> Password:
							<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
              <br/>
              <div className='modal-btn-container'>
							  <input className='modal-btn' type="submit"
                      value={this.modalSubmit(this.state.modalType)} />
                <button className='modal-btn' onClick={this.demo}>Demo</button>
              </div>
              <div className="footer-text-container">
                {this.modalAltText(this.state.modalType)}
              </div>
          </div>
					</form>

          <br/>
				</Modal>
      </div>
);

  }

  modalAltText(modalType) {
    if(modalType === 'login') {
      return (<p className="modal-alt-login">New to Indieclono?
      <Link className='modal-alt-link'
        onClick={this.openModal.bind(this,'signup')}>Sign Up </Link></p>);
    } else {
      return (
        <div>
          <p className="modal-signup-privacy">By signing up, you agree to our
            <br/>
            <a href="https://en.wikipedia.org/wiki/Privacy_policy"
                  target="_blank"
                  className='modal-alt-link'
                  >
                  Terms of Use
            </a>
          and Privacy Policy
          </p>
          <p className='modal-alt-login'>
            Already have an account?
            <Link className='modal-alt-link'
                  onClick={this.openModal.bind(this,'login')}>
            Log In
            </Link>
          </p>
      </div>
    );
    }
  }

  modalSubmit(modalType) {
    return (modalType === 'login') ? "LOG IN" : "CREATE AN ACCOUNT";
  }

  navLink() {
    if (this.state.modalType === 'login') {
      return <button className='alt-portal-button'
        onClick={this.openModal.bind(this, 'signup')}>Sign Up</button>;
    } else {
      return <button className='alt-portal-button'
        onClick={this.openModal.bind(this, 'login')}>Log In</button>;
    }
  }

  openModal(modalType) {
		this.setState({
			modalOpen: true,
			modalType
	  });
	}

  closeModal() {
		this.setState({modalOpen: false});
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

    if (this.state.modalType === 'login') {
      delete user.modalOpen;
      delete user.modalType;
			this.props.login({user});
		} else {
      delete user.modalOpen;
      delete user.modalType;
			this.props.signup({user});
		}
 }
}

export default withRouter(SessionForm);
