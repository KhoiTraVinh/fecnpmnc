import { Link } from "react-router-dom";
import "./topbar.css";

export const Topbar = () => {
  return (
    <div className="topbar1">
      <nav>
        <h2 className="logo">
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
          <div className="dropdown">
            <Link className="btn" to="/DangNhap">
              Login
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
                <Link to="#Dangxuat">Dang Xuat</Link>
              </li>
            </ul>
          </div>
          {/* <div className="dropdown">
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
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
