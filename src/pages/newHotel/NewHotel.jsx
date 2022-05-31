import "./newHotel.css";
import { useHistory } from "react-router-dom";

export default function NewHotel() {
  const history = useHistory();

  const handleClick = (e) => {
    alert("Đã thêm khách sạn thành công");
    history.push("/hotels");
  };

  return (
    <div className="newFlight">
      <h1 className="newFlightTitle">Thêm khách sạn mới</h1>
      <form className="newFlightForm">
        <div className="newFlightItemLeft">
          <div className="newFlightItem">
            <label>Tên khách sạn</label>
            <input
              name="username"
              type="text"
              placeholder="Khách sạn 5 sao VIP PRO"
            />
          </div>
          <div className="newFlightItem">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="khachsan5sao@gmail.com"
            />
          </div>
          <div className="newFlightItem">
            <label>Số điện thoại</label>
            <input name="phone" type="text" placeholder="+84 188 732 215" />
          </div>
          <div className="newFlightItem">
            <label>Ảnh</label>
            <input type="file" id="file" />
          </div>
        </div>
        <div className="newFlightItemRight">
          <div className="newFlightItem">
            <label>Loại phòng</label>
            <input name="address" type="text" placeholder="Phòng đơn - VIP" />
          </div>

          <div className="newFlightItem">
            <label>Giá tiền</label>
            <input name="price" type="number" placeholder="500$" />
          </div>

          <div className="newFlightItem">
            <label>Địa chỉ</label>
            <input name="address" type="text" placeholder="NewYork -- USA" />
          </div>
          <div className="newFlightItem">
            <button className="newFlightButton" onClick={handleClick}>
              Tạo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
