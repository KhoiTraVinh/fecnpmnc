import "./homePage.css";
import * as React from "react";
import {
  Flight,
  Person,
  Restaurant,
  PersonPinCircle,
  ArrowRightAlt,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { BookingForm } from "../../components/bookingForm/BookingForm";

export const HomePage = () => {
  return (
    <div className="homePage">
      <div className="coverHomePage">
        <div className="topbar">
          <nav>
            <h2 className="logo">
              <Link to="/comboDetail">ComBo<span> UuDai</span></Link>
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

        <div className="content">
          <div className="contentTop">
            <h4>ComBo</h4>
            <h1>
              Uu <span>Dai</span>
            </h1>
            <h3>Du Lịch Tiết Kiệm - Không Lo Chi Phí</h3>
            {/* <div className="newslatter">
            <form>
              <input
                type="text"
                name=""
                id=""
                placeholder="Nhập nơi bạn muốn đến"
              />
              <input type="submit" name="submit" value="Bắt đầu" />
            </form>
          </div> */}
          </div>
          <div className="contentBottom">
            <BookingForm />
          </div>
        </div>
      </div>

      {/* Next */}
      <div className="introduce">
        <div className="introduceTop">
          <div className="introduceTopLeft">
            <img
              src="/img/du_lich.jpg"
              alt=""
              className="introduceTopLeftImg"
            />
          </div>
          <div className="introduceTopRight">
            <div className="introduceTopRightCoverSpan">
              <span className="introduceTopRightSpan">TRẢI NGHIỆM </span>
              <span className="introduceTopRightSpan1">TUYỆT VỜI</span>
            </div>
            <h2 className="introduceTopRightInfo">
              Chúng tôi mang bên mình sứ mệnh đảm bảo tất cả các khách có một kỳ
              nghỉ trên cả mong đợi. Hãy thôi lo lắng về những ổ gà trên đường
              và tận hưởng cuộc hành trình thôi nào
            </h2>
          </div>
        </div>

        <div className="introduceBottom">
          <div className="introduceBottomLeft">
            <div className="introduceBottomLeftCoverSpan">
              <span className="introduceBottomLeftSpan">CUỘC PHIÊU LƯU </span>
              <span className="introduceBottomLeftSpan1">ĐÁNG GIÁ</span>
            </div>
            <h2 className="introduceBottomLeftInfo">
              Chúng ta bắt đầu biết đi ngay từ khi còn bé. Vậy nên không có lý
              do gì khi đôi chân đang khỏe mà bạn lại phải ngồi im. Chúng tôi có
              mặt để cùng bạn bước đi trên mọi nẻo đường.
            </h2>
            <button className="introduceBottomLeftButton">
              THAM GIA NGAY <ArrowRightAlt className="Icon" />
            </button>
          </div>
          <div className="introduceBottomRight">
            <img
              src="/img/du_lich1.jpg"
              alt=""
              className="introduceBottomRightImg"
            />
          </div>
        </div>
      </div>

      <div className="introduce1">
        <span className="introduceTitle">CHÚNG TÔI&nbsp;</span>
        <span className="introduceTitleRed">MANG ĐẾN</span>
      </div>
      <div className="introduceCover">
        <div className="container">
          <div className="container__image">
            <div className="container__info container__author">
              TRẢI NGHIỆM &nbsp;
              <a
                className="link"
                href="https://instagram.com/thuc2202"
                target="_blank"
              >
                TUYỆT VỜI
              </a>
            </div>
            <div className="container__info container__location">
              Chúng tôi mang bên mình sứ mệnh đảm bảo tất cả các khách có một kỳ
              nghỉ trên cả mong đợi. Hãy thôi lo lắng về những ổ gà trên đường
              và tận hưởng cuộc hành trình thôi nào!
            </div>
          </div>
        </div>
      </div>

      {/* Our Achives */}
      <div className="achive">
        <div className="achiveTop">Chúng tôi liên kết và làm việc với:</div>
        <div className="achiveBottom">
          <div className="achiveIntroduce">
            <Person className="achiveIcons" />
            <h1 className="achiveNumber">5000</h1>
            <h2 className="achiveInfo">Khách Hàng</h2>
          </div>

          <div className="achiveIntroduce">
            <PersonPinCircle className="achiveIcons" />
            <h1 className="achiveNumber">100</h1>
            <h2 className="achiveInfo">Amazing Tours</h2>
          </div>

          <div className="achiveIntroduce">
            <Restaurant className="achiveIcons" />
            <h1 className="achiveNumber">50</h1>
            <h2 className="achiveInfo">Nhà Hàng</h2>
          </div>

          <div className="achiveIntroduce">
            <Flight className="achiveIcons" />
            <h1 className="achiveNumber">8</h1>
            <h2 className="achiveInfo">Hãng Hàng Không</h2>
          </div>
        </div>
      </div>

      {/* PLACE */}
      <div className="place">
        <div className="placeTitleWrap">
          <div className="title">
            <span className="introduceTitle">CÁC ĐỊA ĐIỂM&nbsp;</span>
            <span className="introduceTitleRed">NỔI TIẾNG </span>
          </div>
          <h3 className="placeTitleInfo">
            Hãy cùng nhau khám phá các địa điểm du lịch nổi tiếng vòng quanh
            mảnh đất hình chữ S xinh đẹp nào!!!
          </h3>
        </div>
        <div className="placePop">
          <figure className="snip0019">
            <img src="/img/vinh_ha_long.jpg" alt="sample11" />
            <figcaption>
              <div>
                <h2>
                  <span>HẠ LONG</span> tình yêu trong tôi
                </h2>
              </div>
              <div>
                <p>
                  Hạ Long luôn chào đón, tiếp đãi chúng ta như một người tình
                  vậy! Luôn gửi trao những yêu thương thơ mộng nhất. Hãy đến và
                  cảm nhận cùng chúng nhau nào!!!
                </p>
              </div>
              <a href="#"></a>
            </figcaption>
          </figure>
          <figure className="snip0019">
            <img src="/img/phu_quoc.jpg" alt="sample12" />
            <figcaption>
              <div>
                <h2>
                  Ngọc đảo của VIỆT NAM <span>PHÚ QUỐC</span>
                </h2>
              </div>
              <div>
                <p>
                  Ẩn sau một Phú Quốc thiên đường, còn là những câu chuyện chưa
                  kể, những con người chưa được nhắc đến và những nắng mưa tảo
                  tần chưa ai nếm trải.
                </p>
              </div>
              <a href="#"></a>
            </figcaption>
          </figure>
          <figure className="snip0019">
            <img src="/img/hoi_an.jpg" alt="sample13" />
            <figcaption>
              <div>
                <h2>
                  phố cổ <span>Hội an</span> nẻo về của những{" "}
                  <span>Giấc mơ</span>{" "}
                </h2>
              </div>
              <div>
                <p>
                  Không một âm thanh huyên náo, không một tiếng động cơ gầm rú,
                  cũng chẳng có những thương hiệu rực rỡ đèn màu. Hội An lắng
                  mình trong vẻ đẹp của sự trầm mặc, cổ kính.
                </p>
              </div>
              <a href="#"></a>
            </figcaption>
          </figure>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
