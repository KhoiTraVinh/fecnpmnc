import React from "react";
import { Link } from "react-router-dom";
import {
    People,
    HotelOutlined,
    AccountBalanceWallet,
    Wifi,
    Add,
  } from "@mui/icons-material";
import { getRoom } from "../../actions/HotelAction";
import { useDispatch } from 'react-redux';

const RoomItem = (props) => {

    const { room } = props
    const dispatch = useDispatch();
    const OrderRoom = () => {
        dispatch(getRoom(room));
    };
    return (
        <div className="roomBookingBottom">
            <img src="../../img/room.jpg" alt="" className="roomBookingBottomImg" />
            <div className="roomBookingBottomContent">
                <div className="left">
                    <span className="leftTitle">{room.Name}</span>
                    <h2 className="leftDet">
                        <People className="BottomIcon" />{room.PeoNum}
                    </h2>
                    <h2 className="leftDet">
                        <HotelOutlined className="BottomIcon" />{room.Bed}
                    </h2>

                    <h2 className="leftDet">
                        <AccountBalanceWallet className="BottomIcon" />
                        {room.Refund}
                    </h2>

                    <h2 className="leftDet">
                        <Wifi className="BottomIcon" />
                        {room.Wifi}
                    </h2>
                </div>
                <div className="right">
                    <h2 className="right1">
                        <Add className="BottomIcon1" /> {room.Price} VND &nbsp;
                    </h2>
                    <h2 className="right2">/ người</h2>
                </div>
            </div>
            <div className="roomBookingBottomBookingButton">
                <Link to="/comboDetail">
                    <button className="buttonB" onClick={OrderRoom()}>Đặt ngay</button>
                </Link>
                <h2 className="buttonDetail">{room.EmptyRoom} Phòng trống</h2>
            </div>
        </div>
    );
};

export default RoomItem;



