import { assign } from 'lodash';

// Actions
const createActionConst = (action) => `frontend-boilerplate-experiments/friendList/${action}`;
export const ADD_FRIEND = createActionConst('ADD_FRIEND');
export const STAR_FRIEND = createActionConst('STAR_FRIEND');
export const DELETE_FRIEND = createActionConst('DELETE_FRIEND');

// Reducer
const initialState = {
  friends: [0, 1, 2],
  friendsById: [
    {
      id: 0,
      name: '2Pac'
    },
    {
      id: 1,
      name: 'Dr.Dre'
    },
    {
      id: 2,
      name: 'Big Pun'
    }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_FRIEND: {
      const len = state.friends.length ? state.friends.length : 1;
      const newId = (state.friends[len - 1] + 1) || 0;
      return {
        ...state,
        friends: state.friends.concat(newId),
        friendsById: [
          ...state.friendsById,
          {
            id: newId,
            name: action.name
          }
        ]
      };
    }

    case DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter((id) => id !== action.id),
        friendsById: state.friendsById.filter((friend) => friend.id !== action.id)
      };

    case STAR_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.map((friend) => {
          if (friend.id !== action.id) {
            return friend;
          }

          return assign({}, friend, {
            starred: !friend.starred
          });
        })
      };

    default:
      return state;
  }
}

// Action Creators
export function addFriend(name) {
  return {
    type: ADD_FRIEND,
    name
  };
}

export function deleteFriend(id) {
  return {
    type: DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: STAR_FRIEND,
    id
  };
}
