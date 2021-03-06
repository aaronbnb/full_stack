import React from 'react';
import { link, hashHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  if (state.session.currentUser.id === parseInt(ownProps.params.userId)) {
    return ({user: state.session.currentUser,
            formType: ownProps.formType});
  } else {
    return ({
      user: state.user,
      formType: ownProps.formType
    });
  }

  // .currentUser[ownProps.params.userId]
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  logout: id => dispatch(logout(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
