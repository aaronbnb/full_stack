import * as ContributionAPIUtil from './../util/contribution_api_util';
export const RECEIVE_CONTRIBUTION = 'RECEIVE_CONTRIBUTION';
export const RECEIVE_CONTRIBUTIONS = 'RECEIVE_CONTRIBUTIONS';
import { hashHistory } from 'react-router';

const receiveContribution = contribution => ({
  type: RECEIVE_CONTRIBUTION,
  contribution
});

export const createContribution = contribution => dispatch => (
  ContributionAPIUtil.createContribution(contribution)
  .then(newContribution => {
    dispatch(receiveContribution(newContribution));
    hashHistory.push(`campaigns/${contribution.campaign_id}`);
    }
  )
);

export const fetchContributions = () => dispatch => (
  ContributionAPIUtil.fetchContributions()
  .then( campaigns => dispatch(receiveContributions(campaigns)))
);
///then update reward then update campaign
const receiveContributions = contributions => ({
  type: RECEIVE_CONTRIBUTIONS,
  contributions
});
