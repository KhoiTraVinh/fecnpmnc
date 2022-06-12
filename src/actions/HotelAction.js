import Axios from 'axios'
import {
    CUS_GETALLHOTEL_REQUEST,
    CUS_GETALLHOTEL_SUCCESS,
    CUS_GETALLHOTEL_FAIL,
    CUS_GETONEHOTEL_REQUEST,
    CUS_GETONEHOTEL_SUCCESS,
    CUS_GETONEHOTEL_FAIL,
} from '../constants/HotelConstant.js'



export const getHotel = (To) => async (dispatch) => {
    dispatch({ type: CUS_GETALLHOTEL_REQUEST });
    try {
        const { data } = await Axios.get(
            'https://servercnpmnc.herokuapp.com/api/hotel',{
                params: {
                    "Address": To
                }
            }
        );
        dispatch({
            type: CUS_GETALLHOTEL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: CUS_GETALLHOTEL_FAIL, payload: message });
    }
};

export const getOneHotel = (hotelId) => async (dispatch) => {
    dispatch({ type: CUS_GETONEHOTEL_REQUEST });
    try {
        const { data } = await Axios.get(
            `https://servercnpmnc.herokuapp.com/api/hotel/${hotelId}`
        );
        dispatch({
            type: CUS_GETONEHOTEL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: CUS_GETONEHOTEL_FAIL, payload: message });
    }
};

export const getRoom = (room) => async (dispatch) => {
    dispatch({ type: 'CUS_GETROOM_REQUEST' });
    try {
        const  data = room
        dispatch({
            type: 'CUS_GETROOM_SUCCESS',
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: 'CUS_GETROOM_FAIL', payload: message });
    }
};