import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
const initialState = {
    DangNhap: {
        ThongTinKhachHang: localStorage.getItem('ThongTinKhachHang')
        ? JSON.parse(localStorage.getItem('ThongTinKhachHang'))
        : null,
    },
    GioHang: {
        ChiTietDonHang: localStorage.getItem('ChiTietDonHang')
        ? JSON.parse(localStorage.getItem('ChiTietDonHang'))
        : [],
        ThongTinGiaoHang: localStorage.getItem('ThongTinGiaoHang')
        ? JSON.parse(localStorage.getItem('ThongTinGiaoHang'))
        : {},
        PhuongThucThanhToan: '',
    },
};
const reducer = combineReducers({
    
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store