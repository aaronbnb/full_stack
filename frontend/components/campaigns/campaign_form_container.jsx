import { connect } from 'react-redux';
import { updateCampaign, createCampaign, destroy } from './../../actions/campaign_actions';
import CampaignForm from './campaign_form';

const mapStateToProps = (state, ownProps) => {
  let newCampaign = {
    title: "",
    description: "",
    location: "",
    overview: "",
    goal: 500,
    status: 0,
    main_img_url: "",
    user_id: state.session.currentUser.id,
    category_id: "",
    duration: 30,
    showRewardForm: false
  };
  let formType = ownProps.formType || "edit";

  return ({currentUser: state.session.currentUser,
  errors: state.campaigns.errors,
  campaign: newCampaign});
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
  updateCampaign: campaign => dispatch(updateCampaign(campaign)),
  createCampaign: campaign => dispatch(createCampaign(campaign)),
  destroy: id => dispatch(destroy(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignForm);
