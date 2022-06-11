import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import "./comboDetail.css";
import {PayPalButton} from 'react-paypal-button-v2'
import {
  ArrowRightAlt,
  CallToAction,
  Fastfood,
  FlightTakeoff,
  Home,
  LocationCity,
  LocationOn,
  MapsHomeWork,
  ParkOutlined,
  Wifi,
} from "@mui/icons-material";

export const ComboDetail = () => {
  return (
    <div className="comboDetail">
      <Topbar />
      <div className="comboDetailContent">
        <div className="comboDetail1">
          <div className="comboDetailTop">
            <span className="comboDetailInfo">Chi tiết chuyến Combo</span>
            <div className="comboFly">
              <FlightTakeoff className="comboDetailTopIcon" />
              Đà Nẵng (DAD) → TP HCM (SGN) • 30 Th03 2022 • 1 người lớn •
              Economy
            </div>
          </div>
          <div className="comboHotel">
            <MapsHomeWork className="comboDetailTopIcon" />
            Nouveau Happy Inn • 30 Th03 2022 - 1 Th04 2022 • 2 đêm • 1 phòng • 1
            khách
          </div>
        </div>
      </div>
      <div className="ContentCover">
        <div className="comboDetailContentLeft">
          <span className="comboLeftTitle">Combo tiết kiệm</span>
          <div className="FlyDetail">
            <span className="FlyDetail1">
              <FlightTakeoff className="contentCoverIcon" />
              Đà Nẵng (DAD)
              <ArrowRightAlt className="contentCoverIcon1" />
              TP HCM (SGN)
            </span>
            <hr />
            <div className="FlyDetail2">
              <span className="comboFlyDate">Wed, 30 Mar 2022</span>
              <div className="FlyDetailInfo">
                <div className="airport">
                  <img src="./img/a.png" alt="" className="airportImg" />
                  <div className="name">
                    <h2 className="name1">VietNam Airlines</h2>
                    <h2 className="name2">Khuyến mãi</h2>
                  </div>
                </div>
                <div className="timeFly">
                  <div className="timeFly1">
                    <h2 className="timeFly1Time">08:10</h2>
                    <h2 className="timeFly1TimePlc">DAD</h2>
                  </div>
                  <div className="timeFly2">
                    <h2 className="timeFly2Time">1h 25m</h2>
                    <hr className="coverHr" />
                    <h2 className="timeFly2TimePlc">Bay thẳng</h2>
                  </div>
                  <div className="timeFly1">
                    <h2 className="timeFly1Time">08:10</h2>
                    <h2 className="timeFly1TimePlc">DAD</h2>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="FlyDetail3">
              Thay đổi chuyến bay (Popup form booking)
            </div>
          </div>

          <div className="HotelDetail">
            <div className="FlyDetail1">
              <Home className="contentCoverIcon" />
              Quận 1, Thành phố Hồ Chí Minh
            </div>
            <hr />
            <div className="HotelDetail2">
              <div className="comboHotelDate">
                T4, 30 Th03 2022 - T6, 1 Th04 2022
              </div>
              <div className="HotelDetailInfo">
                <div className="room">
                  <img src="./img/room.jpg" alt="" className="roomImg" />
                  <div className="HotelName">
                    <h2 className="HotelName1">Nouveau Happy Inn</h2>
                    <h2 className="HotelName2">
                      <LocationOn className="HotelIcon" />
                      39 Bùi Thị Xuân, Phường Bến Thành, Phường Bến Thành, Quận
                      1, Thành phố Hồ Chí Minh, Việt Nam, 711060
                    </h2>

                    <div className="HotelService">
                      <h2 className="HotelService1">
                        <CallToAction className="HotelIcon" />
                        Máy lạnh
                      </h2>

                      <h2 className="HotelService1">
                        <Fastfood className="HotelIcon" />
                        Lễ tân 24/24
                      </h2>

                      <h2 className="HotelService1">
                        <ParkOutlined className="HotelIcon" />
                        Chỗ đậu xe
                      </h2>

                      <h2 className="HotelService1">
                        <Wifi className="HotelIcon" />
                        Wifi
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="HotelDetail3">
              Thay đổi khách sạn (Popup form booking)
            </div>
          </div>
        </div>
        <div className="comboDetailContentRight">
          <PayPalButton amount={1000} onSuccess={"kkkk"}></PayPalButton>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComboDetail;
