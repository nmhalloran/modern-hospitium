import * as SessionAPIUtil from '../util/session_api_util';
import * as LocationAPIUtil from '../util/location_api_util';


export const RECEIVE_ADDRESS_INFO = 'RECEIVE_ADDRESS_INFO';
export const RECEIVE_CITY_INFO = 'RECEIVE_CITY_INFO';

export const receiveAddressInfo = address => {
  return {
    type: RECEIVE_ADDRESS_INFO,
    address
  }
}

export const receiveCityInfo = city => {
  return {
    type: RECEIVE_CITY_INFO,
    city
  }
}

export const getCity = id => dispatch => (
  LocationAPIUtil.getCity(id).then(city => (
    dispatch(receiveCityInfo(city))
  ))
);

export const geocode = address => dispatch => (
  SessionAPIUtil.geocode(address).then((address) => (
    dispatch(receiveAddressInfo(address))
  ))
);
