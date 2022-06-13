import Axios from 'axios'


export const getInforCus = (info) => async (dispatch) => {
    dispatch({ type: 'CUS_GETINFO_REQUEST' });
    try {
        const  data = info
        dispatch({
            type: 'CUS_GETINFO_SUCCESS',
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: 'CUS_GETINFO_FAIL', payload: message });
    }
};


export const CreatePromotion = (promo) => async (dispatch) => {
    dispatch({ type: 'CUS_CREATEPROMOTION_REQUEST', payload: promo });
    console.log(promo);
    try {
        const { data } = await Axios.post(
            'https://servercnpmnc.herokuapp.com/api/promotion',
            promo,
        );
        dispatch({
            type: 'CUS_CREATEPROMOTION_SUCCESS',
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: 'CUS_CREATEPROMOTION_FAIL', payload: message });
    }
};