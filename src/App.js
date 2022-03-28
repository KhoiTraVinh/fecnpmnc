import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DangXuat } from "./actions/CustomerAction";
import HomePage from "./pages/homePage/HomePage.jsx";
import { BrowserRouter } from "react-router-dom";
import BookingPage from "./pages/bookingPage/BookingPage.jsx";

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
    </BrowserRouter>
  );
}

export default App;
