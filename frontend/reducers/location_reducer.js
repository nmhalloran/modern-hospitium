import { RECEIVE_ADDRESS_INFO} from '../actions/location_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({ id: null });

const locationReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ADDRESS_INFO:
      const locationId = String(Math.floor(action.address.results[0].geometry.location.lat * 10)) + String(Math.floor(action.address.results[0].geometry.location.lng * 10));
      console.log(Math.floor(action.address.results[0].geometry.location.lng * 1000));
      return merge( {}, state, { [locationId]: { geolocation: action.address.results[0].geometry.location, formatted_address: action.address.results[0].formatted_address} });
    default:
      return state;
  }
};

export default locationReducer;
