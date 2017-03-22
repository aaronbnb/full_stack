export const createReward = reward => (
  $.ajax({
    method: 'POST',
    url: `/api/campaigns/${reward.campaign_id}/rewards`,
    data: {reward}
  })
);

export const fetchReward = reward => (
  $.ajax({
    method: 'GET',
    url: `/api/campaigns/${reward.campaign_id}/rewards/${reward.id}`
  })
);
