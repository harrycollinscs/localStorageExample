import {SET_USER} from '../actions/actionTypes';

interface userType {
  __id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  accessToken: string;
}

interface stateType {
  user: userType | null;
}

const initialState: stateType = {
  user: null,
};

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        user: action.payload,
      });
  }

  return state;
}

export default rootReducer;
