import React from "react";
import {
    LocationOn,
    AirplaneTicket,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const HotelItem = (props) => {
    const { hotel } = props
    return (
        <Link to={`/hotel/${hotel._id}`} className="linkaaa">
            <div className="bookingContentDetailHotel">
                <img
                    src="../../img/room.jpg"
                    alt="aa"
                    className="bookingContentDetailHotelImg"
                />

                <div className="bookingContentDetailHotel1">
                    <div className="bookingContentDetailHotelTop">
                        <div className="hotelName">{hotel.Name}</div>
                        <div className="address1">
                            <LocationOn className="hotelIcon" />{hotel.Address}
                        </div>
                        <hr />
                    </div>
                    <div className="bookingContentDetailHotelBottom">
                        <div className="hotelPriceDefault">
                            <span className="hotelTitle">Giá mua riêng</span>
                            <h2 className="hotelPrice">{hotel.Price}</h2>
                        </div>
                        <div className="hotelPriceDefault">
                            <span className="hotelTitle1">Giá combo tiết kiệm</span>
                            <h2 className="hotelSavePrice">{hotel.PriceDiscount}</h2>
                        </div>
                        <div className="hotelPriceDefault">
                            <span className="hotelSaved">Tiết kiệm: {hotel.Percent}% </span>
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
    );
};

export default HotelItem;



