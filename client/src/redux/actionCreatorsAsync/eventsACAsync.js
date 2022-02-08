import { FETCH_EDIT_EVENT, FETCH_JOIN_EVENT } from '../actionTypes/eventAT'

export const editEventFetchAC = (payload) => {
  return {
    type: FETCH_EDIT_EVENT,
    payload,
  }
}

export const joinEventFetchAC = (payload) => {
  return {
    type: FETCH_JOIN_EVENT,
    payload,
  }
}
