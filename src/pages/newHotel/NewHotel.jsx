import "./newHotel.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";

export default function NewHotel() {
  const [data, setData] = useState('');
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');
  const [data4, setData4] = useState('');
  const [data5, setData5] = useState('');
  const [data6, setData6] = useState('');

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [percent, setPercent] = useState();
  const [des, setDes] = useState('');
  const [price, setPrice] = useState();
  const [pricediscount, setPricediscount] = useState();
  const [flight, setFlight] = useState(true);
  const history = useHistory();

  const handleClick = async () => {
    const dataaa = await Axios.post('https://servercnpmnc.herokuapp.com/api/hotel', {
      Name: name,
      Address: address,
      Percent: percent,
      Describe: des,
      Price: price,
      PriceDiscount: pricediscount,
      Flight: flight,
      Room: Room,
    })
    console.log(dataaa);
    alert("Đã thêm khách sạn thành công");
    history.push("/hotels");
  };

  const Room = [];
  console.log(Room);

  useEffect(() => {
    console.log(Room);
  },[Room])

  const handleClick1 = (e) => {
    e?.preventDefault();
    const room = {
      Bed: data,
      EmptyRoom: data1,
      Name: data2,
      PeoNum: data3,
      Price: data4,
      Refund: data5,
      Wifi: data6
    }
    Room.push(room);
    console.log(Room);
    alert("Đã thêm phòng thành công");
  };

  return (
    <div className="newFlight">
      <div className="newFlightCoverTop">
      <h1 className="newFlightTitle">Thêm khách sạn mới</h1>
      <form className="newFlightForm">
        <div className="newFlightItemLeft">
          <div className="newFlightItem">
            <label>Tên khách sạn</label>
            <input
              name="username"
              type="text"
              placeholder="Khách sạn 5 sao VIP PRO"
              onChange={(e) => setName(e.target.value)} value={name}
            />
          </div>
          <div className="newFlightItem">
            <label>Địa Chỉ</label>
            <input
              name="DiaChi"
              type="text"
              placeholder="21 Đinh Bộ Lĩnh Bình Thạnh Hồ Chí Minh"
              onChange={(e) => setAddress(e.target.value)} value={address}
            />
          </div>
          <div className="newFlightItem">
            <label>Phần Trăm Giảm</label>
            <input name="PhanTram" type="number" placeholder="15" onChange={(e) => setPercent(e.target.value)} value={percent}/>
          </div>
          <div className="newFlightItem">
            <label>Mô Tả</label>
            <input type="text" id="mota" placeholder="Khách sạn giá rẻ nhất hồ chí minh" onChange={(e) => setDes(e.target.value)} value={des} />
          </div>
        </div>
        <div className="newFlightItemRight">
          <div className="newFlightItem">
            <label>Giá tiền gốc</label>
            <input name="price" type="number" placeholder="500$" onChange={(e) => setPrice(e.target.value)} value={price}/>
          </div>

          <div className="newFlightItem">
            <label>Giá đã giảm</label>
            <input name="price" type="number" placeholder="500$" onChange={(e) => setPricediscount(e.target.value)} value={pricediscount}/>
          </div>
          <div className="newFlightItem">
            <label>Có bao gồm vé máy bay</label>
            <input name="flightfalse" type="radio" value="false" onChange={(e) => setFlight(e.target.value)}/>
            <label>false</label>
          </div>
          <div className="newFlightItem">
            <button className="newFlightButton" onClick={handleClick}>
              Tạo
            </button>
          </div>
        </div>
      </form>
      </div>
      <hr />
      <hr />
      <hr />
      <div className="newFlightCoverBottom">
        <h1 className="newFlightTitle">Thêm Loại Phòng</h1>
        <form className="newFlightForm">
          <div className="newFlightItemLeft">
            <div className="newFlightItem">
              <label>Giường</label>
              <input name="username" type="text" placeholder="2 Giường đôi" onChange={(e) => setData(e.target.value)} value={data}/>
            </div>
            <div className="newFlightItem">
              <label>Số lượng phòng trống</label>
              <input
                name="empty room"
                type="empty room"
                placeholder="5 phòng trống"
                onChange={(e) => setData1(e.target.value)} value={data1}
              />
            </div>
            <div className="newFlightItem">
              <label>Tên phòng</label>
              <input
                name="roomname"
                type="roomname"
                placeholder="Phòng đơn - đôi"
                onChange={(e) => setData2(e.target.value)} value={data2}
              />
            </div>
            <div className="newFlightItem">
              <label>Số người (tối đa)</label>
              <input name="PeoNum" type="PeoNum" placeholder="2 người" onChange={(e) => setData3(e.target.value)} value={data3}/>
            </div>
          </div>
          <div className="newFlightItemRight">
            <div className="newFlightItem">
              <label>Giá</label>
              <input name="address" type="text" placeholder="1.000.000" onChange={(e) => setData4(e.target.value)} value={data4}/>
            </div>

            <div className="newFlightItem">
              <label>Hoàn tiền</label>
              <input name="price" type="text" placeholder="Hoàn tiền 1 phần" onChange={(e) => setData5(e.target.value)} value={data5}/>
            </div>

            <div className="newFlightItem">
              <label>Wifi</label>
              <input name="address" type="text" placeholder="Wifi miễn phí" onChange={(e) => setData6(e.target.value)} value={data6}/>
            </div>
            <div className="newFlightItem">
              <button className="newFlightButton" onClick={handleClick1}>
                Tạo
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
