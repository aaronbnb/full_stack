import * as RewardAPIUtil from '../util/reward_api_util';
export const RECEIVE_CAMPAIGN_REWARD = 'RECEIVE_CAMPAIGN_REWARD';
export const RECEIVE_CAMPAIGN_REWARDS = 'RECEIVE_CAMPAIGN_REWARDS';

export const createReward = reward => dispatch => (
  RewardAPIUtil.createReward(reward)
  .then(newReward => dispatch(receiveCampaignReward(newReward)))
);

export const fetchRewards = id => dispatch => (
  RewardAPIUtil.fetchRewards(id)
  .then( campaignRewards => dispatch(receiveCampaignRewards(campaignRewards)))
);

export const fetchReward = reward => dispatch => (
  RewardAPIUtil.fetchReward(reward)
  .then( campaignReward => dispatch(receiveCampaignReward(campaignReward)))
);

export const receiveCampaignReward = reward => ({
  type: RECEIVE_CAMPAIGN_REWARD,
  reward
});

export const receiveCampaignRewards = rewards => ({
  type: RECEIVE_CAMPAIGN_REWARDS,
  rewards
});
