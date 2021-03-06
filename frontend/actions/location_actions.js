import * as SessionAPIUtil from '../util/session_api_util';
import * as LocationAPIUtil from '../util/location_api_util';


export const RECEIVE_CITIES_INFO = 'RECEIVE_CITIES_INFO';
export const RECEIVE_CITY_INFO = 'RECEIVE_CITY_INFO';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';

export const receiveCitiesInfo = cities => {
  return {
    type: RECEIVE_CITIES_INFO,
    cities
  }
}

export const receiveCityInfo = city => {
  return {
    type: RECEIVE_CITY_INFO,
    city
  }
}

export const receiveEvents = events => {
  return {
    type: RECEIVE_EVENTS,
    events
  }
}

export const receiveEvent = event => {
  return {
    type: RECEIVE_EVENT,
    eventt
  }
}

export const getEvents = locationId => dispatch => (
  LocationAPIUtil.getEvents(locationId).then(events => (
    dispatch(receiveEvents(events))
  ))
);

export const getEvent = id => dispatch => {
  LocationAPIUtil.getEvent(id).then(event => (
    dispatch(receiveEvent(event))
  ))
}

export const getCity = id => dispatch => (
  LocationAPIUtil.getCity(id).then(city => (
    dispatch(receiveCityInfo(city))
  ))
);

export const getCities = cities => dispatch => (
  LocationAPIUtil.getCities(cities).then((cities) => (
    dispatch(receiveCitiesInfo(cities))
  ))
);
