
import * as actions from '../actions';

const initState = {
  test: '',
  actionType: '',
};


const authReducer = (state = initState, action) => {
  switch (action.type) {
    case (actions.LOGGED_IN):
      return {
        ...state,
        actionType: action.type,
      };
    default: return state;
  }
};
export default authReducer;
