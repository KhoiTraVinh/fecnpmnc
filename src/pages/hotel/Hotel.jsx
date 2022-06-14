import "./hotel.css";
import {
  Add,
  Call,
  MailOutline,
  LocationSearching,
  MapsHomeWork,
  AttachMoney,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function Hotel() {
  const history = useHistory();

  const [hotel, setHotel] = useState();

  const params = useParams();
  const getHotel = async () => {
    await Axios.get(`https://servercnpmnc.herokuapp.com/api/hotel/${params.hotelId}`).then(res=>{
      setHotel(res.data);
    })
    .catch(err=>console.log(err))
  }
  
  useEffect(() => {
    getHotel();
  },[])

  function update(e) {
    alert("Cập nhật thành công");
    history.push("/hotels");
  }

  return (
    <div className="hotel">
      <div className="hotelTitleContainer">
        <h1 className="hotelTitle">Thông Tin Khách Sạn</h1>
        <Link to="/newhotel" className="link">
          <button className="hotelAddButton">
            <Add className="hotelIcon" /> Create
          </button>
        </Link>
      </div>
      <div className="hotelContainer">
        {/* hotel show flex 1 */}
        <div className="hotelShow">
          {/* Top details */}
          <div className="hotelShowTop">
            <img
              src="https://cf.bstatic.com/xdata/images/xphoto/max1440/48351257.jpg?k=eac7044b3c9e45490f29daf08f4a44aed55618de404cdb813bc4e3841bf6772c&o="
              alt=""
              className="hotelShowImg"
            />
            <div className="hotelShowTopTitle">
              <span className="hotelShowhotelName">
                Khách sạn Vip Pro 5 sao
              </span>
            </div>
          </div>

          {/* Bottom details */}
          <div className="hotelShowBottom">
            <span className="hotelShowTitle">Thông tin phòng</span>
            <div className="hotelShowInfo">
              <MapsHomeWork className="hotelShowIcon" />
              <span className="hotelShowInfoTitle">{hotel?.Name}</span>
            </div>
            <div className="hotelShowInfo">
              <AttachMoney className="hotelShowIcon" />
              <span className="hotelShowInfoTitle">{hotel?.Price}</span>
            </div>
            <span className="hotelShowTitle">Thông tin</span>
            <div className="hotelShowInfo">
              <AttachMoney className="hotelShowIcon" />
              <span className="hotelShowInfoTitle">{
              hotel?.Percent}</span>
            </div>
            <div className="hotelShowInfo">
              <AttachMoney className="hotelShowIcon" />
              <span className="hotelShowInfoTitle">
                {hotel?.PriceDiscount}
              </span>
            </div>
            <div className="hotelShowInfo">
              <LocationSearching className="hotelShowIcon" />
              <span className="hotelShowInfoTitle">
                {hotel?.Address}
              </span>
            </div>
          </div>
        </div>

        {/* hotel Update flex 2 */}
        <div className="hotelUpdate">
          <span className="hotelUpdateTitle">Chỉnh sửa thông tin</span>
          <form className="hotelUpdateForm">
            {/* Left site of this form */}
            <div className="hotelUpdateLeft">
              <div className="hotelUpdateItem">
                <label>Tên khách sạn</label>
                <input
                  name="hotelname"
                  type="text"
                  placeholder="Khach san Vip Pro 5 sao"
                  className="hotelUpdateInput"
                  id="hotelname"
                />
              </div>
              <div className="hotelUpdateItem">
                <label>Loại phòng</label>
                <input
                  name="room"
                  type="text"
                  placeholder="Phòng VIP"
                  className="hotelUpdateInput"
                  id="fullname"
                />
              </div>
              <div className="hotelUpdateItem">
                <label>Giá tiền</label>
                <input
                  name="price"
                  type="text"
                  placeholder="500$"
                  id="email"
                  className="hotelUpdateInput"
                />
              </div>
            </div>

            {/* Right site */}
            <div className="hotelUpdateRight">
              <div className="hotelUpdateItem">
                <label>Số điện thoại</label>
                <input
                  name="phone"
                  type="text"
                  placeholder="0989901328"
                  className="hotelUpdateInput"
                  id="phone"
                />
              </div>
              <div className="hotelUpdateItem">
                <label>Địa chỉ</label>
                <input
                  name="address"
                  type="text"
                  placeholder="445 Gia Phú, P3, Q6, TPHCM"
                  className="hotelUpdateInput"
                  id="address"
                />
              </div>
              <button className="hotelUpdateBottom" onClick={update}>
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
