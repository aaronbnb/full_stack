import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';

export const fetchUser = id => dispatch => (
  UserAPIUtil.fetchUser(id)
  .then(user => dispatch(receiveUser(user)))
);

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});