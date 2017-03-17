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
      username: "test",
      password: "password"
    }),
    2000);
    this.props.login({user: {username: "test", password: "password"}});
  }

  demo() {
    this.setState({
      username: "test",
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
    //need to add classes to this form
    // const { formType } = this.props;
    // const formHeader = (formType === 'login') ? "Log In" : "Sign Up";

    return (

			<div className="login-signup-box">
				<nav className="login-signup">
          <Link onClick={this.headerDemo.bind(this)}>Demo</Link>
          &nbsp;  &nbsp;
					<Link onClick={this.openModal.bind(this, 'signup')}>Sign Up</Link>
          &nbsp;  &nbsp;
          <Link onClick={this.openModal.bind(this, 'login')} className='rightmost'>Log In</Link>
          &nbsp;  &nbsp;

				</nav>
				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					style={ModalStyle}>
          Welcome to IndieClono!
 					<br/>
            Please {this.state.modalType} or {this.navLink()}
					<form onSubmit={this.handleSubmit} >
						{this.renderErrors()}
						<div className="login-form">
							<br/>
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
							<input className='modal-btn' type="submit" value={this.modalSubmit(this.state.modalType)} />
                <button className='modal-btn' onClick={this.demo}>Demo</button>
                {this.modalAltText(this.state.modalType)}
          </div>
					</form>
          <br/>
				</Modal>
      </div>
);

  }

  modalAltText(modalType) {
    if(modalType === 'login') {
      return (<p className="modal-alt-text-log-in">New to Indieclono?&nbsp;
      <Link className='modal-alt-link' onClick={this.openModal.bind(this,'signup')}> Sign Up </Link></p>);
    } else {
      return (<p className="modal-alt-text-sign-up">By signing up you agree to our
      <Link className='modal-alt-link' onClick={() => "en.wikipedia.org/wiki/Privacy_policy"}> Terms of Use </Link> and Privacy Policy</p>);
    }
  }

  modalSubmit(modalType) {
    return (modalType === 'login') ? "LOG IN" : "CREATE AN ACCOUNT";
  }

  navLink() {
    // const { formType } = this.props;
    //
    // if(formType === 'login') {
    //   return <Link to={'/signup'}>Sign Up instead</Link>;
    // } else {
    //   return (
    //     <Link to={'/login'}>Log In instead</Link>
    //   );
    // }
    if (this.state.modalType === 'login') {
      return <button onClick={this.openModal.bind(this, 'signup')}>Sign Up</button>;
    } else {
      return <button onClick={this.openModal.bind(this, 'login')}>Log In</button>;
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
  //  this.props.processForm(user);
  //modal code...
    if (this.state.modalType === 'login') {
			this.props.login({user});
		} else {
			this.props.signup({user});
		}
 }
  //...
}

export default withRouter(SessionForm);
