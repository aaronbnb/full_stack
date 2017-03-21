import { connect } from 'react-redux';
import { updateCampaign, createCampaign, destroy, fetchCampaigns } from './../../actions/campaign_actions';
import CampaignIndex from './campaign_index';

const mapStateToProps = state => {
  return ({
    campaigns: Object.keys(state.campaigns).map(id => state.campaigns[id])
  });
};

const mapDispatchToProps = dispatch => ({
  fetchCampaigns: () => dispatch(fetchCampaigns())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignIndex);
