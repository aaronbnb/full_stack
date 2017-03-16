import React from 'react';
import { link, hashHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  return ({currentUser: state.session.currentUser,
          formType: "show"});
  // .currentUser[ownProps.params.userId]
};

const mapDispatchToProps = dispatch => ({
  logout: id => dispatch(logout(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
