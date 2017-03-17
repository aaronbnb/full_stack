export const update = campaign => (
  $.ajax({
    method: 'PATCH',
    url: `api/campaigns/${campaign.id}`,
    data: { campaign }
  })
);

export const create = campaign => {
  $.ajax({
    method: 'POST',
    url: 'api/campaigns',
    data: campaign
  });
};

export const destroy = campaign => (
  $.ajax({
    method: 'DELETE',
    url: `api/campaigns/${campaign.id}`,
    data: { campaign }
  })
);
