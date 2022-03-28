import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { KhachHangDangNhapReducer, KhachHangDangKiReducer } from './reducers/CustomerReducer';
import thunk from 'redux-thunk';
const initialState = {
    DangNhap: {
        ThongTinKhachHang: localStorage.getItem('ThongTinKhachHang')
        ? JSON.parse(localStorage.getItem('ThongTinKhachHang'))
        : null,
    },
};
const reducer = combineReducers({
    DangNhap: KhachHangDangNhapReducer,
    DangKi: KhachHangDangKiReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store