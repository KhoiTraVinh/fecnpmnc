import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/Topbar/Topbar";
import BookingForm from "../../components/bookingForm/BookingForm";
import { Link } from "react-router-dom";
import {
  Send,
  Circle,
  ArrowForward,
  ConnectingAirports,
  ArrowDownward,
  MapsHomeWork,
  LocationOn,
  AirplaneTicket,
} from "@mui/icons-material";
import { useState } from "react";
import Popup from "../../components/Popup/Popup";
import "reactjs-popup/dist/index.css";
import "./bookingPage.css";

export const BookingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bookingPage">
      <TopBar />
      <div className="bookingDetail">
        <div className="bookingDetailTop">
          <span className="bookingDetailInfo">
            Chi tiết chuyến bay từ Hồ Chí Minh đến Hà Nội
          </span>
          <div className="bookingChange">Thay đổi tìm kiếm chuyến bay</div>
        </div>
        <div className="bookingDetailBottom">
          Ngày tháng năm - ngày tháng năm
        </div>
      </div>
      <div className="bookingContent">
        <Sidebar />
        <div className="bookingContentDetail">
          <span className="title">
            {" "}
            <ConnectingAirports className="titleIcon" />
            Chuyến bay
          </span>
          <div className="bookingContentDetailFly">
            <div className="bookingContentDetailFlyLeft">
              <div className="titleTop">
                <span className="bookingContentFlyTitle">
                  Chi tiết chuyến bay
                </span>
                <div className="airlinecover">
                  <h2 className="airline">Hãng hàng không: Việt Nam Airline</h2>
                </div>
              </div>
              <div className="titleBottom">
                <div className="titleBottom1">
                  <h1 className="flyTime">T3, 29 Th03 2022</h1>
                  <h2 className="flyDirection">Chuyến bay đi</h2>
                </div>
                <div className="titleBottom1">
                  <h1 className="flyTime">22:50</h1>
                  <h2 className="flyDirection">DAD</h2>
                </div>
                <div className="titleBottom1">
                  <ArrowForward className="bookingContentIcon" />
                </div>
                <div className="titleBottom1">
                  <h1 className="flyTime">00:20</h1>
                  <h2 className="flyDirection">SGN</h2>
                </div>
                <div className="titleBottom1">
                  <Send className="bookingContentIcon" />
                </div>
                <div className="titleBottom1">
                  <h1 className="flyTime">1h 30m</h1>
                  <h2 className="flyDirection">
                    <Circle className="circle" /> Bay thẳng
                  </h2>
                </div>
              </div>
            </div>
            <div className="bookingContentDetailFlyRight">
              <span className="quest">Bạn muốn tìm chuyến bay khác?</span>
              <h1 className="popup1" onClick={togglePopup}>
                {" "}
                Thay đổi chuyến bay{" "}
              </h1>
              {isOpen && (
                <Popup
                  content={
                    <>
                      <BookingForm />
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          </div>

          <span className="alert">
            Giá vé máy bay đã bao gồm trong mức giá được hiển thị bên dưới{" "}
            <ArrowDownward />
          </span>
          <br />

          <span className="title">
            {" "}
            <MapsHomeWork className="titleIcon" />
            Khách sạn
          </span>
          <div className="bookingHotel">
            <Link to="/hotel" className="linkaaa">
              <div className="bookingContentDetailHotel">
                <img
                  src="./img/room.jpg"
                  alt="aa"
                  className="bookingContentDetailHotelImg"
                />

                <div className="bookingContentDetailHotel1">
                  <div className="bookingContentDetailHotelTop">
                    <div className="hotelName">Khách sạn Corvin</div>
                    <div className="address1">
                      <LocationOn className="hotelIcon" /> 21 thùy vân, phường
                      2, Tp Vũng Tàu, Bà rịa – Vũng Tàu
                    </div>
                    <hr />
                  </div>
                  <div className="bookingContentDetailHotelBottom">
                    <div className="hotelPriceDefault">
                      <span className="hotelTitle">Giá mua riêng</span>
                      <h2 className="hotelPrice">1.500.000</h2>
                    </div>
                    <div className="hotelPriceDefault">
                      <span className="hotelTitle1">Giá combo tiết kiệm</span>
                      <h2 className="hotelSavePrice">1.368.000</h2>
                    </div>
                    <div className="hotelPriceDefault">
                      <span className="hotelSaved">Tiết kiệm: 15% </span>
                      <div className="coverTicket">
                        <h2 className="hotelPlaneTicket">
                          Đã bao gồm vé máy bay{" "}
                          <AirplaneTicket className="hotelIcon" />
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/hotel" className="linkaaa">
              <div className="bookingContentDetailHotel">
                <img
                  src="./img/room.jpg"
                  alt="aa"
                  className="bookingContentDetailHotelImg"
                />
                <div className="bookingContentDetailHotel1">
                  <div className="bookingContentDetailHotelTop">
                    <div className="hotelName">Khách sạn Corvin</div>
                    <div className="address">
                      {" "}
                      <LocationOn className="hotelIcon" /> 21 thùy vân, phường
                      2, Tp Vũng Tàu, Bà rịa – Vũng Tàu
                    </div>
                    <hr />
                  </div>
                  <div className="bookingContentDetailHotelBottom">
                    <div className="hotelPriceDefault">
                      <span className="hotelTitle">Giá mua riêng</span>
                      <h2 className="hotelPrice">1.500.000</h2>
                    </div>
                    <div className="hotelPriceDefault">
                      <span className="hotelTitle1">Giá combo tiết kiệm</span>
                      <h2 className="hotelSavePrice">1.368.000</h2>
                    </div>
                    <div className="hotelPriceDefault">
                      <span className="hotelSaved">Tiết kiệm: 15% </span>
                      <div className="coverTicket">
                        <h2 className="hotelPlaneTicket">
                          Đã bao gồm vé máy bay{" "}
                          <AirplaneTicket className="hotelIcon" />
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/hotel" className="linkaaa">
              <div className="bookingContentDetailHotel">
                <img
                  src="./img/room.jpg"
                  alt="aa"
                  className="bookingContentDetailHotelImg"
                />
                <div className="bookingContentDetailHotel1">
                  <div className="bookingContentDetailHotelTop">
                    <div className="hotelName">Khách sạn Corvin</div>
                    <div className="address">
                      {" "}
                      <LocationOn className="hotelIcon" /> 21 thùy vân, phường
                      2, Tp Vũng Tàu, Bà rịa – Vũng Tàu
                    </div>
                    <hr />
                  </div>
                  <div className="bookingContentDetailHotelBottom">
                    <div className="hotelPriceDefault">
                      <span className="hotelTitle">Giá mua riêng</span>
                      <h2 className="hotelPrice">1.500.000</h2>
                    </div>
                    <div className="hotelPriceDefault">
                      <span className="hotelTitle1">Giá combo tiết kiệm</span>
                      <h2 className="hotelSavePrice">1.368.000</h2>
                    </div>
                    <div className="hotelPriceDefault">
                      <span className="hotelSaved">Tiết kiệm: 15% </span>
                      <div className="coverTicket">
                        <h2 className="hotelPlaneTicket">
                          Đã bao gồm vé máy bay{" "}
                          <AirplaneTicket className="hotelIcon" />
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/hotel" className="linkaaa">
              <div className="bookingContentDetailHotel">
                <img
                  src="./img/room.jpg"
                  alt="aa"
                  className="bookingContentDetailHotelImg"
                />
                <div className="bookingContentDetailHotel1">
                  <div className="bookingContentDetailHotelTop">
                    <div className="hotelName">Khách sạn Corvin</div>
                    <div className="address">
                      {" "}
                      <LocationOn className="hotelIcon" /> 21 thùy vân, phường
                      2, Tp Vũng Tàu, Bà rịa – Vũng Tàu
                    </div>
                    <hr />
                  </div>
                  <div className="bookingContentDetailHotelBottom">
                    <div className="hotelPriceDefault">
                      <span className="hotelTitle">Giá mua riêng</span>
                      <h2 className="hotelPrice">1.500.000</h2>
                    </div>
                    <div className="hotelPriceDefault">
                      <span className="hotelTitle1">Giá combo tiết kiệm</span>
                      <h2 className="hotelSavePrice">1.368.000</h2>
                    </div>
                    <div className="hotelPriceDefault">
                      <span className="hotelSaved">Tiết kiệm: 15% </span>
                      <div className="coverTicket">
                        <h2 className="hotelPlaneTicket">
                          Đã bao gồm vé máy bay{" "}
                          <AirplaneTicket className="hotelIcon" />
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/hotel" className="linkaaa">
              <div className="bookingContentDetailHotel">
                <img
                  src="./img/room.jpg"
                  alt="aa"
                  className="bookingContentDetailHotelImg"
                />
                <div className="bookingContentDetailHotel1">
                  <div className="bookingContentDetailHotelTop">
                    <div className="hotelName">Khách sạn Corvin</div>
                    <div className="address">
                      {" "}
                      <LocationOn className="hotelIcon" /> 21 thùy vân, phường
                      2, Tp Vũng Tàu, Bà rịa – Vũng Tàu
                    </div>
                    <hr />
                  </div>
                  <div className="bookingContentDetailHotelBottom">
                    <div className="hotelPriceDefault">
                      <span className="hotelTitle">Giá mua riêng</span>
                      <h2 className="hotelPrice">1.500.000</h2>
                    </div>
                    <div className="hotelPriceDefault">
                      <span className="hotelTitle1">Giá combo tiết kiệm</span>
                      <h2 className="hotelSavePrice">1.368.000</h2>
                    </div>
                    <div className="hotelPriceDefault">
                      <span className="hotelSaved">Tiết kiệm: 15% </span>
                      <div className="coverTicket">
                        <h2 className="hotelPlaneTicket">
                          Đã bao gồm vé máy bay{" "}
                          <AirplaneTicket className="hotelIcon" />
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
