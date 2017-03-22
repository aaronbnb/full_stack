import * as ContributionAPIUtil from '../util/contribution_api_util';
export const RECEIVE_CONTRIBUTION = 'RECEIVE_CONTRIBUTION';


export const createContribution = contribution => dispatch => (
  ContributionAPIUtil.createContribution( amount => dispatch(receiveContribution(amount)))
);

const receiveContribution = contribution => ({
  type: RECEIVE_CONTRIBUTION,
  contribution
});
