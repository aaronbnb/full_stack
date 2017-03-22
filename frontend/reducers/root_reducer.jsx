import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CampaignReducer from './campaign_reducer';
import UserReducer from './user_reducer';
import RewardReducer from './reward_reducer';
import ContributionReducer from './contribution_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  campaigns: CampaignReducer,
  user: UserReducer,
  rewards: RewardReducer,
  contributions: ContributionReducer
});

export default rootReducer;
