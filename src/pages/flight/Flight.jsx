import { Add } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import "./flight.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { flightData } from "../../dummyData";

export default function Flight() {
  const history = useHistory();

  function update(e) {
    history.push("/flights");
  }

  return (
    <div className="flight">
      <div className="flightTitleContainer">
        <h1 className="flightTitle">Chuyến bay</h1>
        <Link to="/newflight" className="link">
          <button className="flightAddButton">
            <Add className="flightIcon" />
            Tạo mới
          </button>
        </Link>
      </div>
      <div className="flightTop">
        <div className="flightTopLeft">
          <Chart data={flightData} dataKey="Sales" title="Số lượng vé đã bán" />
        </div>
        <div className="flightTopRight">
          <div className="flightInfoTop">
            <img
              src="https://e7.pngegg.com/pngimages/232/927/png-clipart-hanoi-flight-vietnam-airlines-incheon-international-airport-others-leaf-symmetry.png"
              alt=""
              className="flightInfoImg"
            />
            <span className="flightName">VietNam Airline</span>
          </div>

          <div className="flightInfoBottom">
            <div className="flightInfoItem">
              <span className="flightInfoKey">ID:</span>
              <span className="flightInfoValue">1</span>
            </div>

            <div className="flightInfoItem">
              <span className="flightInfoKey">Điểm khởi hành:</span>
              <span className="flightInfoValue">Hà Lội</span>
            </div>

            <div className="flightInfoItem">
              <span className="flightInfoKey">Điểm kết thúc:</span>
              <span className="flightInfoValue">Hồ Chí Minh</span>
            </div>

            <div className="flightInfoItem">
              <span className="flightInfoKey">Status:</span>
              <span className="flightInfoValue">Active</span>
            </div>
          </div>
        </div>
      </div>

      <h1 className="flightTitleBottom">Cập nhật chuyến bay</h1>
      <div className="flightBottom">
        <form className="flightForm">
          <div className="flightFormLeft">
            <label>Tên hãng bay</label>
            <input
              name="title"
              type="text"
              placeholder="VietNam Airline"
              value="VietNam Airline"
              id="title"
            />
            <label>Điểm khởi hành</label>
            <input
              name="startpoint"
              type="text"
              placeholder="Hà Lội"
              value="Hà Lội"
              id="startpoint"
            />
            <label>Điểm kết thúc</label>
            <input
              name="endpoint"
              type="text"
              placeholder="Hồ Chí Minh"
              value="Hồ Chí Minh"
              id="endpoint"
            />
          </div>
          <div className="flightFormRight">
            <label>Hạng ghế</label>
            <input
              name="seat"
              type="text"
              placeholder="Thương gia"
              value="Thương gia"
              id="seat"
            />
            <label>Giá tiền</label>
            <input
              name="price"
              type="number"
              placeholder="500"
              value="500"
              id="seat"
            />
            <label>Status</label>
            <select name="status" value="Active" className="Active" id="status">
              <option value="true">Active</option>
              <option value="false">Decline</option>
            </select>
          </div>
        </form>
        <button className="flightButton" onClick={(e) => update(e)}>
          Update
        </button>
      </div>
    </div>
  );
}
