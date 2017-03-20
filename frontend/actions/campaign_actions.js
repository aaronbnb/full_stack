import * as CampaignAPIUtil from './../util/campaign_api_util';

export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const RECEIVE_CAMPAIGNS = 'RECEIVE_CAMPAIGNS';
export const RECEIVE_CAMPAIGN_ERRORS = 'RECEIVE_CAMPAIGN_ERRORS';
export const REMOVE_CAMPAIGN = 'REMOVE_CAMPAIGN';
export const RECEIVE_CONTRIBUTION = 'RECEIVE_CONTRIBUTION';

export const createCampaign = campaign => dispatch => (
  CampaignAPIUtil.create(campaign)
  .then( newCampaign => dispatch(receiveCampaign(newCampaign)),
  errors => dispatch(receiveCampaignErrors(errors.responseJSON)))
);

export const updateCampaign = campaign => dispatch => (
  CampaignAPIUtil.update(campaign)
  .then( updatedCampaign => dispatch(receiveCampaign(updatedCampaign)),
  errors => dispatch(receiveCampaignErrors(errors.responseJSON)))
);

export const deleteCampaign = id => dispatch => (
  CampaignAPIUtil.destroy(id)
  .then( updatedCampaign => dispatch(receiveCampaign(updatedCampaign)),
  errors => dispatch(receiveCampaignErrors(errors.responseJSON)))
);

const receiveCampaign = campaign => ({
  type: RECEIVE_CAMPAIGN,
  campaign
});

const receiveCampaigns = campaigns => ({
  type: RECEIVE_CAMPAIGNS,
  campaigns
});

const receiveContribution = contribution => ({
  type: RECEIVE_CONTRIBUTION,
  contribution
});

const removeCampaign = campaign => ({
  type: REMOVE_CAMPAIGN,
  campaign
});

const receiveCampaignErrors = errors => ({
  type: RECEIVE_CAMPAIGN_ERRORS,
  errors
});
