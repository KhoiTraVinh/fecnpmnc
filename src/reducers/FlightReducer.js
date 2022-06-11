import {
    CUS_CREATEFLIGHT_REQUEST,
    CUS_CREATEFLIGHT_SUCCESS,
    CUS_CREATEFLIGHT_FAIL,
} from '../constants/FlightConstant.js'


export const CreateFlightReducer = (state = {}, action) => {
    switch (action.type) {
        case CUS_CREATEFLIGHT_REQUEST:
            return { loading: true };
        case CUS_CREATEFLIGHT_SUCCESS:
            return { loading: false, success: true, flight: action.payload };
        case CUS_CREATEFLIGHT_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};