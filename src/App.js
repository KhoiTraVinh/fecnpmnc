import { BrowserRouter, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {DangXuat} from './actions/CustomerAction';
import "./style.css";
import Test from './pages/testpage/test';
import { useState } from 'react';
import Ky from './pages/ky/index';

function App() {
  const [test, setTest] = useState("");
  const ThongTinDangNhap = useSelector((state) => state.DangNhap);
  const { ThongTinKhachHang } = ThongTinDangNhap;
  const dispatch = useDispatch();
  const Dangxuatne = () => {
    dispatch(DangXuat());
  };
  return (
    <BrowserRouter>
      <div className="hero">
        <nav>
          <h2 class="logo">
            ComBo<span> UuDai</span>
          </h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div>
            {ThongTinKhachHang ? (
              <div className="dropdown">
                <Link to="#">
                  {ThongTinKhachHang.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  {" "}
                  <li>
                    <Link to="/thongtinnguoidung">Profile</Link>
                  </li>{" "}
                  <li>
                    <Link to="/danhsachdonhang">DonHang</Link>
                  </li>
                  <li>
                    <Link to="/chatvoishipper">Chat</Link>
                  </li>
                  <li>
                    <Link to="#Dangxuat" onClick={Dangxuatne}>
                      Dang Xuat
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link className="btn" to="/DangNhap">Login</Link>
            )}
            {ThongTinKhachHang && ThongTinKhachHang.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/thongke">ThongKe</Link>
                  </li>
                  <li>
                    <Link to="/danhsachsanpham">SanPham</Link>
                  </li>
                  <li>
                    <Link to="/danhsachdonhangadmin">DonHang</Link>
                  </li>
                  <li>
                    <Link to="/taikhoan">TaiKhoan</Link>
                  </li>
                  <li>
                    <Link to="/voucher">Voucher</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
        <div class="content">
          <h4>ComBo</h4>
          <h1>
            Uu <span>Dai</span>
          </h1>
          <h3>ComBo Uu Dai</h3>
          <div class="newslatter">
            <form>
              <input
                type="email"
                name="email"
                id="mail"
                placeholder="Enter Your Email"
              />
              <input type="submit" name="submit" value="Lets Start" />
            </form>
          </div>
        </div>
      </div>
      <main>
        <Ky/>
      </main>
      <div class="contact-me">
        <p>Du Lich Thoi</p>
        <a class="button-two" href="#">
          Dat Ngay
        </a>
      </div>
      <footer>
        <p>Thien Khoi</p>
        <p>Contact:</p>
        <div class="social">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-dribbble"></i>
          </a>
        </div>
        <p class="end">CopyRight By Khoi</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
