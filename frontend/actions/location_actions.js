import * as APIUtil from '../util/session_api_util';


export const RECEIVE_ADDRESS_INFO = 'RECEIVE_ADDRESS_INFO';

export const receiveAddressInfo = address => {
  return {
  type: RECEIVE_ADDRESS_INFO,
  address
}

};

export const geocode = address => dispatch => (
  APIUtil.geocode(address).then((address) => (
    dispatch(receiveAddressInfo(address))
  ))
);
