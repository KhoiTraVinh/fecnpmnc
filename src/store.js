import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { KhachHangDangNhapReducer, KhachHangDangKiReducer } from './reducers/CustomerReducer';
import { CreateFlightReducer } from './reducers/FlightReducer';
import { GetAllHotelReducer, GetOneHotelReducer, GetRoomReducer } from './reducers/HotelReducer';
import thunk from 'redux-thunk';
import { CreatePromoReducer, GetInfoReducer } from './reducers/PromotionReducer';
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
    FlightCreate: CreateFlightReducer,
    GetAllHotel: GetAllHotelReducer,
    GetOneHotel: GetOneHotelReducer,
    GetRoom: GetRoomReducer,
    Infocus: GetInfoReducer,
    PromoCreate: CreatePromoReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store