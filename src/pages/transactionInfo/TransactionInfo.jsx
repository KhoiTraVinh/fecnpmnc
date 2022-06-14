import "./transactionInfo.css";
import {
  Add,
  Call,
  MailOutline,
  LocationSearching,
  MapsHomeWork,
  AttachMoney,
  Flight,
  AirlineSeatReclineExtra,
  FlightTakeoff,
  FlightLand,
  Paid,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { transactionRows } from "../../dummyData";

export default function TransactionInfo() {
  const [data, setData] = useState(transactionRows);
  const history = useHistory();

  function update(e) {
    alert("Cập nhật thành công");
    history.push("/transactions");
  }

  return (
    <div className="transactionInfo">
      <div className="transactionInfoTitleContainer">
        <h1 className="transactionInfoTitle">Thông Tin Chi Tiết</h1>
      </div>
      <div className="transactionInfoUser">
        <div className="transactionInfoShowTop">
          <img
            src="https://i.pinimg.com/474x/ea/f2/9d/eaf29d7da7ee6459bc76950547630114--johnny-depp-news-jack-oconnell.jpg"
            alt=""
            className="transactionInfoShowImg"
          />
          <div className="transactionInfoShowTopTitle">
            <span className="transactionInfoShowName1">Phạm Tri Thức</span>
          </div>
        </div>
        <div className="transactionInfoShowInfo">
          <Call className="transactionInfoShowIcon" />
          <span className="transactionInfoShowInfoTitle">0989901328</span>
        </div>
        <div className="transactionInfoShowInfo">
          <MailOutline className="transactionInfoShowIcon" />
          <span className="transactionInfoShowInfoTitle">
            phamtrithuc22022000@gmail.com
          </span>
        </div>
        <div className="transactionInfoShowInfo">
          <Paid className="transactionInfoShowIcon" />
          <span className="transactionInfoShowInfoTitle">
            $5500 (Tổng đơn giao dịch)
          </span>
        </div>
      </div>

      <div className="transactionInfoContainer">
        {/* transactionInfo show flex 1 */}
        <div className="transactionInfoShow">
          {/* Top details */}
          <div className="transactionInfoShowTop">
            <img
              src="https://cf.bstatic.com/xdata/images/xphoto/max1440/48351257.jpg?k=eac7044b3c9e45490f29daf08f4a44aed55618de404cdb813bc4e3841bf6772c&o="
              alt=""
              className="transactionInfoShowImg"
            />
            <div className="transactionInfoShowTopTitle">
              <span className="transactionInfoShowName">
                Khách sạn Vip Pro 5 sao
              </span>
            </div>
          </div>

          {/* Bottom details */}
          <div className="transactionInfoShowBottom">
            <span className="transactionInfoShowTitle">Thông tin phòng</span>
            <div className="transactionInfoShowInfo">
              <MapsHomeWork className="transactionInfoShowIcon" />
              <span className="transactionInfoShowInfoTitle">Phòng VIP</span>
            </div>
            <div className="transactionInfoShowInfo">
              <AttachMoney className="transactionInfoShowIcon" />
              <span className="transactionInfoShowInfoTitle">500$</span>
            </div>
            <span className="transactionInfoShowTitle">Thông tin liên lạc</span>
            <div className="transactionInfoShowInfo">
              <Call className="transactionInfoShowIcon" />
              <span className="transactionInfoShowInfoTitle">0989901328</span>
            </div>
            <div className="transactionInfoShowInfo">
              <MailOutline className="transactionInfoShowIcon" />
              <span className="transactionInfoShowInfoTitle">
                phamtrithuc22022000@gmail.com
              </span>
            </div>
            <div className="transactionInfoShowInfo">
              <LocationSearching className="transactionInfoShowIcon" />
              <span className="transactionInfoShowInfoTitle">
                445 Gia Phú, P3, Q6, TPHCM
              </span>
            </div>
          </div>
        </div>

        {/* transactionInfo Update flex 2 */}
        <div className="transactionInfoUpdate">
          <span className="transactionInfoUpdateTitle">
            Thông Tin Chuyến Bay
          </span>
          <div className="transactionInfoShowBottom">
            <span className="transactionInfoShowTitle">Thông tin chi tiết</span>
            <div className="transactionInfoShowInfo">
              <Flight className="transactionInfoShowIcon" />
              <span className="transactionInfoShowInfoTitle">
                VietNam Airline
              </span>
            </div>
            <div className="transactionInfoShowInfo">
              <AirlineSeatReclineExtra className="transactionInfoShowIcon" />
              <span className="transactionInfoShowInfoTitle">Thương gia</span>
            </div>
            <div className="transactionInfoShowInfo">
              <AttachMoney className="transactionInfoShowIcon" />
              <span className="transactionInfoShowInfoTitle">$5000</span>
            </div>
            <span className="transactionInfoShowTitle">Lộ Trình</span>

            <div className="transactionInfoShowInfo1">
              <div className="transactionInfoShowInfoCover">
                <FlightTakeoff className="transactionInfoShowIcon" />
                <span className="transactionInfoShowInfoTitle">Hà Lội</span>
              </div>
              <h5 className="transactionInfoShowInfoDateTime">
                &nbsp; &nbsp; &nbsp; &nbsp; (22:30 - 01/06/2022)
              </h5>
            </div>
            <div className="transactionInfoShowInfo1">
              <div className="transactionInfoShowInfoCover">
                <FlightLand className="transactionInfoShowIcon" />
                <span className="transactionInfoShowInfoTitle">
                  Thành Phố Hồ Chí Minh
                </span>
              </div>
              <h5 className="transactionInfoShowInfoDateTime">
                &nbsp; &nbsp; &nbsp; &nbsp; (01:00 - 02/06/2022)
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}