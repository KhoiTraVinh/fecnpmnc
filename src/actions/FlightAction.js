import Axios from 'axios'
import {
    CUS_CREATEFLIGHT_REQUEST,
    CUS_CREATEFLIGHT_SUCCESS,
    CUS_CREATEFLIGHT_FAIL,
} from '../constants/FlightConstant.js'



export const CreateFlight = (flight) => async (dispatch) => {
    dispatch({ type: CUS_CREATEFLIGHT_REQUEST, payload: flight });
    console.log(flight)
    try {
        const { data } = await Axios.post(
            'https://servercnpmnc.herokuapp.com/api/flight',
            flight,
        );
        dispatch({
            type: CUS_CREATEFLIGHT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: CUS_CREATEFLIGHT_FAIL, payload: message });
    }
};