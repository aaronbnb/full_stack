import { connect } from 'react-redux';
import { fetchReward } from './../../actions/reward_actions';
import ContributionForm from './contribution_form';
import { fetchCampaign, updateCampaign } from './../../actions/campaign_actions';
import { CreateContribution } from './../../actions/contribution_actions';

const mapStateToProps = (state, ownProps) => {
  const rewardId = (ownProps.params.reward) ? ownProps.params.reward.id : null;
  const campaign = state.campaigns[ownProps.params.campaignId];
  return {
    campaign_id: campaign.id,
    campaign_name: campaign.title,
    user_id: state.session.currentUser,
    reward_id: rewardId,
    amount: ownProps.params.amount
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
  createContribution: reward => dispatch(CreateContribution(reward)),
  fetchReward: reward =>  dispatch(fetchReward(reward))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContributionForm);
