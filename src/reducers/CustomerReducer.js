import {
    KHACHHANG_DANGNHAP_REQUEST,
    KHACHHANG_DANGNHAP_THANHCONG,
    KHACHHANG_DANGNHAP_THATBAI,
    KHACHHANG_DANGKI_REQUEST,
    KHACHHANG_DANGKI_THANHCONG,
    KHACHHANG_DANGKI_THATBAI,
    KHACHHANG_DANGXUAT,
} from '../constants/CustomerConstant.js'

export const KhachHangDangNhapReducer = (state = {}, action) => {
    switch(action.type){
        case KHACHHANG_DANGNHAP_REQUEST:
            return {loading: true}
        case KHACHHANG_DANGNHAP_THANHCONG:
            return {loading: false, ThongTinKhachHang: action.payload}
        case KHACHHANG_DANGNHAP_THATBAI:
            return {loading: false, error: action.payload}
        case KHACHHANG_DANGXUAT:
            return {};
        default:
            return state;
    }
};

export const KhachHangDangKiReducer = (state = {}, action) => {
    switch(action.type){
        case KHACHHANG_DANGKI_REQUEST:
            return {loading: true}
        case KHACHHANG_DANGKI_THANHCONG:
            return {loading: false, ThongTinKhachHang: action.payload}
        case KHACHHANG_DANGKI_THATBAI:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
};