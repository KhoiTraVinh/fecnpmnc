import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DangXuat } from "./actions/CustomerAction";
import HomePage from "./pages/homePage/HomePage";
import Hotel from "./pages/hotelPage/Hotel";
import { BrowserRouter } from "react-router-dom";
import BookingPage from "./pages/bookingPage/BookingPage.jsx";

import ComboDetail from "./pages/comboDetail/ComboDetail";
import BookingInfo from "./pages/formPage";
import {PayPage} from './pages/payPage';
import Success from "./pages/successPage";

function App() {
  const ThongTinDangNhap = useSelector((state) => state.DangNhap);
  const { ThongTinKhachHang } = ThongTinDangNhap;
  const dispatch = useDispatch();
  const Dangxuatne = () => {
    dispatch(DangXuat());
  };
  return (
    <BrowserRouter>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/booking">
        <BookingPage />
      </Route>
      <Route path="/hotel/:id">
        <Hotel />
      </Route>
      <Route path="/comboDetail">
        <ComboDetail />
      </Route>
      <Route path="/form">
        <BookingInfo />
      </Route>
      <Route path="/pay">
        <PayPage />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </BrowserRouter>
  );
}

export default App;
