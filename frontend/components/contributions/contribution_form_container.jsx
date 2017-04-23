import { connect } from 'react-redux';
import { fetchReward } from './../../actions/reward_actions';
import ContributionForm from './contribution_form';
import { fetchCampaign, updateCampaign } from './../../actions/campaign_actions';
import { createContribution } from './../../actions/contribution_actions';

const mapStateToProps = (state, ownProps) => {
  debugger;
  const rewardId = (ownProps.params.reward) ? ownProps.params.reward.id : 1;

  const campaign = state.campaigns[ownProps.params.campaignId];

  return {
    contribution: {
      campaign_id: campaign.id,
      user_id: state.session.currentUser.id,
      reward_id: rewardId,
      amount: ownProps.params.amount
    },
    campaign
  };
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
  fetchCampaign:  id => dispatch(fetchCampaign()),
  updateCampaign: campaign => dispatch(updateCampaign(campaign)),
  createContribution: reward => dispatch(createContribution(reward)),
  fetchReward: reward =>  dispatch(fetchReward(reward))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContributionForm);
