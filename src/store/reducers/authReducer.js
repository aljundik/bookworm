
import * as actions from '../actions';

const initState = {
  test: '',
  user: {
    email: '',
    token: '',
  },
};


const authReducer = (state = initState, action) => {
  switch (action.type) {
    case (actions.LOGGED_IN):
      return {
        ...state,
        user: action.payroll,
      };
    case (actions.LOGGED_OUT):
      return {
        ...state,
      };
    default: return state;
  }
};
export default authReducer;
