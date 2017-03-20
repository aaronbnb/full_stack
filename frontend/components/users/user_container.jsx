import { connect } from 'react-redux';
import UserNav from './user_nav';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({currentUser: state.session.currentUser,
          formType: ownProps.location.pathname});
  // .currentUser[ownProps.params.userId]
};

const mapDispatchToProps = dispatch => ({
  logout: id => dispatch(logout(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNav);
