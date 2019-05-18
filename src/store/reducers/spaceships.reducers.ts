import * as actionTypes from '../actions/actionTypes';

const initialState = {
  spaceships: [],
  loading: false
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOAD_SPACESHIPS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case actionTypes.LOAD_SPACESHIPS_SUCCESS:
      return {
        ...state,
        loading: false,
        spaceships: action.spaceships
      };

    case actionTypes.LOAD_SPACESHIPS_FAILURE:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
