import React from "react";
import "./hotel.css";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  LocationOn,
  LocalParking,
  NetworkWifi,
  LocalBar,
  DirectionsBusFilled,
  Sailing,
  PriorityHigh,
  People,
  HotelOutlined,
  AccountBalanceWallet,
  Wifi,
  PlusOne,
  Add,
  ReportGmailerrorred,
} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export const Hotel = () => {
  const [value, setValue] = React.useState([null, null]);

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      title: "Bed",
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Chairs",
    },
    {
      img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
      title: "Candle",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
    },
    {
      img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
      title: "Storage",
    },
    {
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      title: "Coffee table",
    },
    {
      img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      title: "Blinds",
    },
  ];

  return (
    <div className="hotel">
      <Topbar />
      <div className="hotelContent">
        <div className="hotelOverview">
          <div className="hotelOverviewTitle">
            <span className="hotelName">Khách sạn Corvin</span>
            <div className="address">
              {" "}
              <LocationOn className="hotelIcon" /> 21 thùy vân, phường 2, Tp
              Vũng Tàu, Bà rịa – Vũng Tàu
            </div>
          </div>
          <div className="hotelOverviewCover">
            <div className="hotelOverviewImg">
              <ImageList
                sx={{ width: 700, height: 450 }}
                variant="woven"
                cols={3}
                gap={8}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=161&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
            <div className="hotelOverviewDetail">
              <span className="hotelOverviewTitle">Thông tin chi tiết</span>
              <hr />
              <h2 className="hotelTitleDetail">
                Chỗ nghỉ này cách bãi biển 6 phút đi bộ. Tọa lạc tại thành phố
                Vũng Tàu, cách Bãi Sau 500 m, Cen Hotel có dịch vụ nhận
                phòng/trả phòng cấp tốc, phòng nghỉ không gây dị ứng, quầy bar,
                WiFi miễn phí trong toàn bộ khuôn viên và sảnh khách chung. Chỗ
                nghỉ này có các phòng gia đình và sân hiên. Chỗ nghỉ cung cấp
                dịch vụ lễ tân 24 giờ, dịch vụ phòng và dịch vụ thu đổi ngoại tệ
                cho khách.
              </h2>
              <hr />
              <div className="hotelTitleHighlight">
                <span className="hotelTitleHighlightTitle">
                  Điểm nổi bật của chỗ nghỉ
                </span>
                <div className="coverHighlight">
                  <LocationOn className="hotelHighlightIcon" />
                  <h2 className="hotelTitleDetail">
                    Địa điểm hàng đầu: Được khách gần đây đánh giá cao (9,0
                    điểm)
                  </h2>
                </div>

                <div className="coverHighlight">
                  <LocalParking className="hotelHighlightIcon" />
                  <h2 className="hotelTitleDetail">
                    Có bãi đậu xe riêng miễn phí ở khách sạn này
                  </h2>
                </div>

                <div className="coverHighlight">
                  <NetworkWifi className="hotelHighlightIcon" />
                  <h2 className="hotelTitleDetail">Wifi miễn phí</h2>
                </div>

                <div className="coverHighlight">
                  <Sailing className="hotelHighlightIcon" />
                  <h2 className="hotelTitleDetail">Giáp biển</h2>
                </div>

                <div className="coverHighlight">
                  <DirectionsBusFilled className="hotelHighlightIcon" />
                  <h2 className="hotelTitleDetail">Xe đưa đón sân bay</h2>
                </div>

                <div className="coverHighlight">
                  <LocalBar className="hotelHighlightIcon" />
                  <h2 className="hotelTitleDetail">Quầy bar</h2>
                </div>
                <button className="hotelBookingButton">Đặt phòng</button>
              </div>
            </div>
          </div>
        </div>
        <div className="roomBooking">
          <div className="roomBookingTop">
            <span className="roomBookingTopTitle">Phòng trống</span>
            <h2 className="roomBookingTopDetail">
              {" "}
              <ReportGmailerrorred className="roomBookingTopIcon" /> Chọn ngày
              để xem phòng trống và giá tại chỗ nghỉ này{" "}
            </h2>
            <div className="coverSearch">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                  startText="Check-in"
                  endText="Check-out"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />

                <button className="searchc"> Tìm kiếm</button>
              </LocalizationProvider>
            </div>
          </div>
          <div className="roomBookingBottom">
            <img src="./img/room.jpg" alt="" className="roomBookingBottomImg" />
            <div className="roomBookingBottomContent">
              <div className="left">
                <span className="leftTitle">Phòng đơn - đôi</span>
                <h2 className="leftDet">
                  <People className="BottomIcon" />2 Người
                </h2>
                <h2 className="leftDet">
                  <HotelOutlined className="BottomIcon" />1 Giường đôi
                </h2>

                <h2 className="leftDet">
                  <AccountBalanceWallet className="BottomIcon" />
                  Hoàn tiền 1 phần
                </h2>

                <h2 className="leftDet">
                  <Wifi className="BottomIcon" />
                  Wifi miễn phí
                </h2>
              </div>
              <div className="right">
                <h2 className="right1">
                  <Add className="BottomIcon1" /> 500.000 VND &nbsp;
                </h2>
                <h2 className="right2">/ người</h2>
              </div>
            </div>
            <div className="roomBookingBottomBookingButton">
              <Link to="/comboDetail">
                <button className="buttonB">Đặt ngay</button>
              </Link>
              <h2 className="buttonDetail">5 Phòng trống</h2>
            </div>
          </div>

          <div className="roomBookingBottom">
            <img src="./img/room.jpg" alt="" className="roomBookingBottomImg" />
            <div className="roomBookingBottomContent">
              <div className="left">
                <span className="leftTitle">Phòng đơn - đôi</span>
                <h2 className="leftDet">
                  <People className="BottomIcon" />2 Người
                </h2>
                <h2 className="leftDet">
                  <HotelOutlined className="BottomIcon" />1 Giường đôi
                </h2>

                <h2 className="leftDet">
                  <AccountBalanceWallet className="BottomIcon" />
                  Hoàn tiền 1 phần
                </h2>

                <h2 className="leftDet">
                  <Wifi className="BottomIcon" />
                  Wifi miễn phí
                </h2>
              </div>
              <div className="right">
                <h2 className="right1">
                  <Add className="BottomIcon1" /> 500.000 VND &nbsp;
                </h2>
                <h2 className="right2">/ người</h2>
              </div>
            </div>
            <div className="roomBookingBottomBookingButton">
              <Link to="/comboDetail">
                <button className="buttonB">Đặt ngay</button>
              </Link>
              <h2 className="buttonDetail">5 Phòng trống</h2>
            </div>
          </div>

          <div className="roomBookingBottom">
            <img src="./img/room.jpg" alt="" className="roomBookingBottomImg" />
            <div className="roomBookingBottomContent">
              <div className="left">
                <span className="leftTitle">Phòng đơn - đôi</span>
                <h2 className="leftDet">
                  <People className="BottomIcon" />2 Người
                </h2>
                <h2 className="leftDet">
                  <HotelOutlined className="BottomIcon" />1 Giường đôi
                </h2>

                <h2 className="leftDet">
                  <AccountBalanceWallet className="BottomIcon" />
                  Hoàn tiền 1 phần
                </h2>

                <h2 className="leftDet">
                  <Wifi className="BottomIcon" />
                  Wifi miễn phí
                </h2>
              </div>
              <div className="right">
                <h2 className="right1">
                  <Add className="BottomIcon1" /> 500.000 VND &nbsp;
                </h2>
                <h2 className="right2">/ người</h2>
              </div>
            </div>
            <div className="roomBookingBottomBookingButton">
              <Link to="/comboDetail">
                <button className="buttonB">Đặt ngay</button>
              </Link>
              <h2 className="buttonDetail">5 Phòng trống</h2>
            </div>
          </div>

          <div className="roomBookingBottom">
            <img src="./img/room.jpg" alt="" className="roomBookingBottomImg" />
            <div className="roomBookingBottomContent">
              <div className="left">
                <span className="leftTitle">Phòng đơn - đôi</span>
                <h2 className="leftDet">
                  <People className="BottomIcon" />2 Người
                </h2>
                <h2 className="leftDet">
                  <HotelOutlined className="BottomIcon" />1 Giường đôi
                </h2>

                <h2 className="leftDet">
                  <AccountBalanceWallet className="BottomIcon" />
                  Hoàn tiền 1 phần
                </h2>

                <h2 className="leftDet">
                  <Wifi className="BottomIcon" />
                  Wifi miễn phí
                </h2>
              </div>
              <div className="right">
                <h2 className="right1">
                  <Add className="BottomIcon1" /> 500.000 VND &nbsp;
                </h2>
                <h2 className="right2">/ người</h2>
              </div>
            </div>
            <div className="roomBookingBottomBookingButton">
              <Link to="/comboDetail">
                <button className="buttonB">Đặt ngay</button>
              </Link>
              <h2 className="buttonDetail">5 Phòng trống</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hotel;
