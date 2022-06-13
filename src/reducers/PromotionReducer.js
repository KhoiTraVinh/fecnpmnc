export const GetInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CUS_GETINFO_REQUEST':
            return { loading: true };
        case 'CUS_GETINFO_SUCCESS':
            return { loading: false, success: true, info: action.payload };
        case 'CUS_GETINFO_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const CreatePromoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CUS_CREATEPROMOTION_REQUEST':
            return { loading: true };
        case 'CUS_CREATEPROMOTION_SUCCESS':
            return { loading: false, success: true, promo: action.payload };
        case 'CUS_CREATEPROMOTION_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};