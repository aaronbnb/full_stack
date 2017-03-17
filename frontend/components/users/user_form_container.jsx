import React from 'react';
import { link, hashHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout, update } from '../../actions/session_actions';
import UserForm from './user_form';

const mapStateToProps = (state, ownProps) => {
  return ({currentUser: state.session.currentUser,
          formType: 'edit'});
  // .currentUser[ownProps.params.userId]
};

const mapDispatchToProps = dispatch => ({
  logout: id => dispatch(logout(id)),
  update: user => dispatch(update(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
