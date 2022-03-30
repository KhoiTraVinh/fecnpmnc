import { Link } from "react-router-dom";
import "./topbar.css";

export const Topbar = () => {
  return (
    <div className="topbar1">
      <nav>
        <h2 className="logo">
          <Link to="/">ComBo<span> UuDai</span></Link>
        </h2>
        <ul>
          <li>
            <Link to="/booking">Home</Link>
          </li>
          <li>
            <Link to="/hotel">Home</Link>
          </li>
          <li>
            <Link to="/comboDetail">Home</Link>
          </li>
          <li>
            <Link to="/form">Home</Link>
          </li>
          <li>
            <Link to="/pay">Home</Link>
          </li>
          <li>
            <Link to="/success">Home</Link>
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
