import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/Topbar/Topbar";
import BookingForm from "../../components/bookingForm/BookingForm";
import {
  Send,
  Circle,
  ArrowForward,
  ConnectingAirports,
  ArrowDownward,
  MapsHomeWork,
} from "@mui/icons-material";
import { useState } from "react";
import Popup from "../../components/Popup/Popup";
import "reactjs-popup/dist/index.css";
import "./bookingPage.css";
import { useDispatch, useSelector } from 'react-redux';
import HotelItem from "../../components/hotelitem/index";
import { getHotel } from "../../actions/HotelAction";


export const BookingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const FlightDetail = useSelector((state) => state.FlightCreate);
  const { flight } = FlightDetail;
  const allhotel = useSelector((state) => state.GetAllHotel);
  const { hotels } = allhotel;
  const dispatch = useDispatch();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    dispatch(getHotel(flight?.To));
  }, [dispatch]);


  return (
    <div className="bookingPage">
      <TopBar />
      <div className="bookingDetail">
        <div className="bookingDetailTop">
          <span className="bookingDetailInfo">
            Chi tiết chuyến bay từ {flight?.From} đến {flight?.To}
          </span>
          <div className="bookingChange">Thay đổi tìm kiếm chuyến bay</div>
        </div>
        <div className="bookingDetailBottom">
          {flight?.Start} - {flight?.End}
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
                  <h2 className="airline">Hãng hàng không: {flight?.Airlines}</h2>
                </div>
              </div>
              <div className="titleBottom">
                <div className="titleBottom1">
                  <h1 className="flyTime">{flight?.Date}</h1>
                  <h2 className="flyDirection">{flight?.Type}</h2>
                </div>
                <div className="titleBottom1">
                  <h1 className="flyTime">{flight?.Start}</h1>
                  <h2 className="flyDirection">{flight?.From}</h2>
                </div>
                <div className="titleBottom1">
                  <ArrowForward className="bookingContentIcon" />
                </div>
                <div className="titleBottom1">
                  <h1 className="flyTime">{flight?.End.toString()}</h1>
                  <h2 className="flyDirection">{flight?.To}</h2>
                </div>
                <div className="titleBottom1">
                  <Send className="bookingContentIcon" />
                </div>
                <div className="titleBottom1">
                  <h1 className="flyTime">{flight?.Time}</h1>
                  <h2 className="flyDirection">
                    <Circle className="circle" /> {flight?.Landing}
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
            {hotels?.length === 0 && <div><h1 color="black">No Hotel Found</h1></div>}
            {hotels?.map((hotel) => (
              <div key={hotel._id}>
                <HotelItem hotel={hotel}></HotelItem>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
