import { connect } from 'react-redux';
import { login, signup, logout } from './../../actions/session_actions';
import RewardForm from './reward_form';
import { fetchCampaign, fetchCampaigns } from './../../actions/campaign_actions';
import { createReward } from './../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => {
  let newReward = {
    campaign_id: ownProps.params.campaignId,
    title: "",
    description: "",
    supply : 0,
    price: 0,
    more_rewards: false
  };
return ({currentUser: state.session.currentUser,
  reward: newReward});
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
  fetchCampaigns: () => dispatch(fetchCampaigns()),
  fetchCampaign:  id => dispatch(fetchCampaign()),
  createReward: reward => dispatch(createReward(reward))
});

export default connect(mapStateToProps, mapDispatchToProps)(RewardForm);
