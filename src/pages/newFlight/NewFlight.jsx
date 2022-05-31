import "./newFlight.css";
import { useHistory } from "react-router-dom";

export default function NewFlight() {
  const history = useHistory();

  const handleClick = (e) => {
    alert("Đã thêm chuyến bay thành công");
    history.push("/products");
  };

  return (
    <div className="newFlight">
      <h1 className="newFlightTitle">Thêm chuyến bay</h1>
      <form className="newFlightForm">
        <div className="newFlightTop">
          <div className="newFlightItem">
            <label>Hãng hàng không</label>
            <input name="title" type="text" placeholder="Tên hãng hàng không" />
          </div>

          <div className="newFlightItem">
            <label>Điểm khởi hành</label>
            <input type="text" name="startpoint" placeholder="Điểm khởi hành" />
          </div>
          <div className="newFlightItem">
            <label>Điểm kết thúc</label>
            <input type="text" name="endpoint" placeholder="Điểm kết thúc" />
          </div>
        </div>

        <div className="newFlightBottom">
          <div className="newFlightFormCover">
            <div className="newFlightItem">
              <label>Hạng ghế</label>
              <input name="seat" type="text" placeholder="Hạng ghế" />
            </div>
            <div className="newFlightItem">
              <label>Giá</label>
              <input name="price" type="number" placeholder="$999" />
            </div>
            <div className="newFlightItem">
              <label>Hình ảnh</label>
              <input type="file" id="file" />
            </div>
          </div>
          <div className="newFlightButtonCreate">
            <button onClick={handleClick} className="newFlightButton">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
