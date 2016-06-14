import { combineReducers } from 'redux';
import friendList from './friendList';

const rootReducer = combineReducers({
  friendList
});

export default rootReducer;

// Selectors
export const getFriendList = (state) => {
  return state.friendList;
}
