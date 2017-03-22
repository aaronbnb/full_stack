import { connect } from 'react-redux';
import { fetchCampaign } from './../../actions/campaign_actions';
import ContributionForm from './contribution_form';

const mapStateToProps = (state, ownProps) => {
  debugger;
  const selectedCampaign = state.campaigns[ownProps.params.campaignId];
  return ({currentUser: state.session.currentUser,
          campaign: selectedCampaign});

};

const mapDispatchToProps = (dispatch, {location}) => ({

  //ask for explanation about this one...
  // let formType = location.pathname.slice(1);
  // const processForm = (formType === 'login') ? login : signup;
  //
  // return {
  //   processForm: user => dispatch(processForm(user)),
  //   formType
  // };
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContributionForm);
