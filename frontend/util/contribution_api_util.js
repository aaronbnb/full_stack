export const createContribution = contribution => (
    $.ajax({
    method: 'POST',
    url: '/api/contributions',
    data: {contribution}
  })
);

export const fetchContributions = () => (
  $.ajax({
    method: 'GET',
    url: '/api/contributions'
  })
);
