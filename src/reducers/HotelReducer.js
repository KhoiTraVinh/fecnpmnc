import {
    CUS_GETALLHOTEL_REQUEST,
    CUS_GETALLHOTEL_SUCCESS,
    CUS_GETALLHOTEL_FAIL,
    CUS_GETONEHOTEL_REQUEST,
    CUS_GETONEHOTEL_SUCCESS,
    CUS_GETONEHOTEL_FAIL,
} from '../constants/HotelConstant.js'

export const GetAllHotelReducer = (state = {}, action) => {
    switch (action.type) {
        case CUS_GETALLHOTEL_REQUEST:
            return { loading: true };
        case CUS_GETALLHOTEL_SUCCESS:
            return { loading: false, success: true, hotels: action.payload };
        case CUS_GETALLHOTEL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const GetOneHotelReducer = (state = {}, action) => {
    switch (action.type) {
        case CUS_GETONEHOTEL_REQUEST:
            return { loading: true };
        case CUS_GETONEHOTEL_SUCCESS:
            return { loading: false, success: true, hotel: action.payload };
        case CUS_GETONEHOTEL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};