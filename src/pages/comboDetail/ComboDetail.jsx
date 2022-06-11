import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import "./comboDetail.css";
import { PayPalButton } from 'react-paypal-button-v2'
import {
  ArrowRightAlt,
  CallToAction,
  CheckCircleOutline,
  ErrorOutline,
  Fastfood,
  FlightTakeoff,
  Home,
  ListAlt,
  LocationCity,
  LocationOn,
  MapsHomeWork,
  ParkOutlined,
  Wifi,
} from "@mui/icons-material";

import { useDispatch, useSelector } from 'react-redux';
import { Axios } from "axios";

export const ComboDetail = () => {


  const FlightDetail = useSelector((state) => state.FlightCreate);
  const { flight } = FlightDetail;
  const onehotel = useSelector((state) => state.GetOneHotel);
  const { hotel } = onehotel;
  const getRoom = useSelector((state) => state.GetRoom);
  const { room } = getRoom;
  const [sdkReady, setSdkReady] = useState(false);
  console.log(flight);
  console.log(hotel);
  console.log(room);
  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get('https://servercnpmnc.herokuapp.com/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.scr = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if(hotel){
      if (hotel) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, sdkReady])

  const Success = () => {
    console.log("Mua Combo thanh cong");
  }
  return (
    <div className="comboDetail">
      <Topbar />
      <div className="comboDetailContent">
        <div className="comboDetail1">
          <div className="comboDetailTop">
            <span className="comboDetailInfo">Chi tiết chuyến Combo</span>
            <div className="comboFly">
              <FlightTakeoff className="comboDetailTopIcon" />
              {flight.From} → {flight.To} • {flight.Date} • 1 người lớn •
              Economy
            </div>
          </div>
          <div className="comboHotel">
            <MapsHomeWork className="comboDetailTopIcon" />
            {hotel.Name} • 30 Th03 2022 - 1 Th04 2022 • 2 đêm • 1 phòng • 1
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
              {flight.From}
              <ArrowRightAlt className="contentCoverIcon1" />
              {flight.To}
            </span>
            <hr />
            <div className="FlyDetail2">
              <span className="comboFlyDate">{flight.Date}</span>
              <div className="FlyDetailInfo">
                <div className="airport">
                  <img src="./img/a.png" alt="" className="airportImg" />
                  <div className="name">
                    <h2 className="name1">{flight.Airlines}</h2>
                    <h2 className="name2">Khuyến mãi</h2>
                  </div>
                </div>
                <div className="timeFly">
                  <div className="timeFly1">
                    <h2 className="timeFly1Time">{flight.Start}</h2>
                    <h2 className="timeFly1TimePlc">{flight.From}</h2>
                  </div>
                  <div className="timeFly2">
                    <h2 className="timeFly2Time">{flight.Time}</h2>
                    <hr className="coverHr" />
                    <h2 className="timeFly2TimePlc">{flight.Landing}</h2>
                  </div>
                  <div className="timeFly1">
                    <h2 className="timeFly1Time">{flight.End}</h2>
                    <h2 className="timeFly1TimePlc">{flight.To}</h2>
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
              {hotel.Address}
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
                    <h2 className="HotelName1">{hotel.Name}</h2>
                    <h2 className="HotelName2">
                      <LocationOn className="HotelIcon" />
                      {hotel.Address}
                    </h2>

                    <div className="HotelService">
                      <h2 className="HotelService1">
                        <CallToAction className="HotelIcon" />
                        {room.Name}
                      </h2>

                      <h2 className="HotelService1">
                        <Fastfood className="HotelIcon" />
                        {room.Bed}
                      </h2>

                      <h2 className="HotelService1">
                        <ParkOutlined className="HotelIcon" />
                        {room.Refund}
                      </h2>

                      <h2 className="HotelService1">
                        <Wifi className="HotelIcon" />
                        {room.Wifi}
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
          <div className="comboDetailContentRightTop">
            <span className="comboDetailContentRightTopTitle">
              <ListAlt className="comboDetailContentRightIcon" />
              Thông tin bổ sung
            </span>
            <hr />
            <div className="comboDetailContentRightTopFlight">
              <h2 className="flight">DAD - SGN</h2>
              <div className="flightservice">
                <h3 className="service1">
                  <ErrorOutline className="serviceIcon" /> Không hoàn tiền
                </h3>
                <h3 className="service2">
                  <CheckCircleOutline className="serviceIcon" /> Có áp dụng đổi
                  lịch bay
                </h3>
              </div>
            </div>
            <div className="comboDetailContentRightTopHotel">
              <h2 className="flight">Cozrum Lux Hotel</h2>

              <div className="hotelservice">
                <h3 className="service2">
                  <CheckCircleOutline className="serviceIcon" />
                  Có thể hoàn lại tiền
                </h3>
              </div>
            </div>
          </div>
          <div className="comboDetailContentRightBottom">
            <span className="comboDetailContentRightTopTitle">Tóm Tắt</span>
            <hr />
            <div className="summary">
              <div className="flightsummary">
                <h2 className="flightsummarytitle">
                  Giá mua riêng máy bay và khách sạn
                </h2>
                <h2 className="flightsummaryprice">VND {hotel.Price}</h2>
              </div>
              <div className="combosummary">
                <h2 className="flightsummarytitle">Ưu đãi combo</h2>
                <h2 className="flightsummaryprice">VND -{hotel.Price - hotel.PriceDiscount}</h2>
              </div>
              <hr id="aa" />
              <div className="flightsummary">
                <h2 className="flightsummarytitle">Giá bạn trả</h2>
                <h2 className="flightsummaryprice">VND {hotel.PriceDiscount}</h2>
              </div>
            </div>
          </div>
          <PayPalButton amount={hotel.PriceDiscount} onSuccess={Success()}></PayPalButton>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComboDetail;
