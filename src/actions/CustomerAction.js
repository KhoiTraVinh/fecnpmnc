import Axios from 'axios'
import {
    KHACHHANG_DANGNHAP_REQUEST,
    KHACHHANG_DANGNHAP_THANHCONG,
    KHACHHANG_DANGNHAP_THATBAI,
    KHACHHANG_DANGKI_REQUEST,
    KHACHHANG_DANGKI_THANHCONG,
    KHACHHANG_DANGKI_THATBAI,
    KHACHHANG_DANGXUAT,
} from '../constants/CustomerConstant.js'


export const DangNhap = (email, password) => async (dispatch) => {
    dispatch({ type: KHACHHANG_DANGNHAP_REQUEST, payload: {email, password}});
    try{
        const {data} = await Axios.post('https://servertmdt.herokuapp.com/api/users/dangnhap', {email, password});
        dispatch({ type: KHACHHANG_DANGNHAP_THANHCONG, payload: data});
        localStorage.setItem('ThongTinKhachHang', JSON.stringify(data));
    }catch(e){
        dispatch({
            type: KHACHHANG_DANGNHAP_THATBAI,
            payload: 
            e.response && e.response.data.message 
            ? e.response.data.message
            : e.message,
        });
    }
};

export const DangKi = (name, email, password) => async (dispatch) => {
    dispatch({ type: KHACHHANG_DANGKI_REQUEST, payload: {email, password}});
    try{
        const {data} = await Axios.post('https://servertmdt.herokuapp.com/api/users/dangki', {name, email, password});
        dispatch({ type: KHACHHANG_DANGKI_THANHCONG, payload: data});
        dispatch({ type: KHACHHANG_DANGNHAP_THANHCONG, payload: data});
        localStorage.setItem('ThongTinKhachHang', JSON.stringify(data));
    }catch(e){
        dispatch({
            type: KHACHHANG_DANGKI_THATBAI,
            payload: 
            e.response && e.response.data.message 
            ? e.response.data.message
            : e.message,
        });
    }
};

export const DangXuat = () => (dispatch) => {
    localStorage.removeItem('ThongTinKhachHang');
    localStorage.removeItem('ChiTietDonHang');
    localStorage.removeItem('ThongTinGiaoHang')
    dispatch({type: KHACHHANG_DANGXUAT});
    document.location.href = '/DangNhap'
}