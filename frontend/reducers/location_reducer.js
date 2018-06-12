import { RECEIVE_CITY_INFO} from '../actions/location_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({ id: null });

const locationReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CITY_INFO:
      return merge( {}, state, { [action.city.id]: action.city });
    default:
      return state;
  }
};

export default locationReducer;
