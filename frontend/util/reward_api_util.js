export const createReward = reward => (
  $.ajax({
    method: 'POST',
    url: `/api/campaigns/${reward.campaign_id}/rewards`,
    data: {reward}
  })
);

export const fetchRewards = id => (
  $.ajax({
    method: 'GET',
    url: `/api/campaigns/${id}/rewards/`
  })
);
