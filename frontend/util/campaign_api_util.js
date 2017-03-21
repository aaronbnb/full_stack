export const updateCampaign = campaign => (
  $.ajax({
    method: 'PATCH',
    url: `/api/campaigns/${campaign.id}`,
    data: { campaign }
  })
);

export const createCampaign = campaign => (
  $.ajax({
    method: 'POST',
    url: '/api/campaigns',
    data: {campaign}
  })
);

export const destroy = campaign => (
  $.ajax({
    method: 'DELETE',
    url: `api/campaigns/${campaign.id}`,
    data: { campaign }
  })
);

export const fetchCampaigns = campaigns => (
  $.ajax({
    method: 'GET',
    url: "/api/campaigns"
  })
);

export const fetchCampaign = id => (
  $.ajax({
    method: 'GET',
    url: `/api/campaigns/${id}`
  })
);
