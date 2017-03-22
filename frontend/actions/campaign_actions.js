import * as CampaignAPIUtil from './../util/campaign_api_util';

export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const RECEIVE_CAMPAIGNS = 'RECEIVE_CAMPAIGNS';
export const RECEIVE_CAMPAIGN_ERRORS = 'RECEIVE_CAMPAIGN_ERRORS';
export const REMOVE_CAMPAIGN = 'REMOVE_CAMPAIGN';

export const createCampaign = campaign => dispatch => {
  return (CampaignAPIUtil.createCampaign(campaign).then( newCampaign => dispatch(receiveCampaign(newCampaign)),
  errors => dispatch(receiveCampaignErrors(errors.responseJSON))));
};

export const updateCampaign = campaign => dispatch => (
  CampaignAPIUtil.updateCampaign(campaign)
  .then( updatedCampaign => dispatch(receiveCampaign(updatedCampaign)),
  errors => dispatch(receiveCampaignErrors(errors.responseJSON)))
);

export const fetchCampaigns = () => dispatch => (
  CampaignAPIUtil.fetchCampaigns()
  .then( campaigns => dispatch(receiveCampaigns(campaigns)))
);

export const deleteCampaign = id => dispatch => (
  CampaignAPIUtil.destroy(id)
  .then( updatedCampaign => dispatch(receiveCampaign(updatedCampaign)),
  errors => dispatch(receiveCampaignErrors(errors.responseJSON)))
);

export const fetchCampaign = id => dispatch => (
  CampaignAPIUtil.fetchCampaign(id)
  .then( campaign => dispatch(receiveCampaign(campaign)))
);

const receiveCampaign = campaign => ({
  type: RECEIVE_CAMPAIGN,
  campaign
});

const receiveCampaigns = campaigns => ({
  type: RECEIVE_CAMPAIGNS,
  campaigns
});

const removeCampaign = campaign => ({
  type: REMOVE_CAMPAIGN,
  campaign
});

const receiveCampaignErrors = errors => ({
  type: RECEIVE_CAMPAIGN_ERRORS,
  errors
});
