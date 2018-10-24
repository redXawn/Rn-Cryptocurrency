import axios from 'axios';
import { apiBaseUrl } from './../../Utils/Constants';
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from './../../Utils/ActionTypes';

export default function FetchCoinData() {
  return dispatch => {
    dispatch({ type: FETCHING_COIN_DATA })

    return axios.get(`${apiBaseUrl}/v2/ticker/?limit=10&structure=array`)
      .then(response => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: response.data.data })
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data  })
      })
  }
}