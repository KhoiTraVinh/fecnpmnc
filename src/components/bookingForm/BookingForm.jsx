import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Link } from "react-router-dom";
import "./bookingForm.css";
import { useHistory } from "react-router-dom";

export const BookingForm = () => {
  const [value, setValue] = React.useState([null, null]);

  const places = [
    { label: "Hà Nội" },
    { label: "Hồ Chí Minh" },
    { label: "Đà Nẵng" },
    { label: "Nha Trang" },
    { label: "Đà Lạt" },
    { label: "Cao Bằng" },
    { label: "Hội An" },
  ];

  const peoNum = [
    { number: 0 },
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 },
    { number: 10 },
  ];

  const seat = [
    { label: "Phổ thông" },
    { label: "Phổ thông đặc biệt" },
    { label: "Thương gia" },
    { label: "Hạng nhất" },
  ];

  return (
    <div>
      <div className="searchForm">
        <span className="Title">Chi Tiết Chuyến Bay</span>
        <div className="searchFormTop">
          <div className="searchFrom">
            <span className="searchTitle">Chọn điểm xuất phát</span>
            <Autocomplete
              disablePortal
              className="comboboxPlace"
              options={places}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="From" />}
            />
          </div>

          <div className="searchFrom">
            <span className="searchTitle">Chọn điểm đến</span>
            <Autocomplete
              disablePortal
              className="comboboxPlace"
              options={places}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="To" />}
            />
          </div>

          <div className="searchFrom">
            <span className="searchTitle">Số người lớn</span>
            <Autocomplete
              disablePortal
              className="comboboxPlace"
              options={peoNum.map((option) => option.number)}
              sx={{ width: 160 }}
              renderInput={(params) => (
                <TextField {...params} label="Người lớn" />
              )}
            />
          </div>

          <div className="searchFrom">
            <span className="searchTitle">Số trẻ em</span>
            <Autocomplete
              disablePortal
              className="comboboxPlace"
              options={peoNum.map((option) => option.number)}
              sx={{ width: 160 }}
              renderInput={(params) => <TextField {...params} label="Trẻ em" />}
            />
          </div>
        </div>
        <div className="searchFromBottom">
          <div className="searchFromBottomLeft">
            <div className="searchFrom">
              <span className="searchTitle">Ngày khởi hành</span>
              <div className="coverDatime">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Basic example"
                    className="comboboxPlace"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="searchFrom">
              <span className="searchTitle">Hạng ghế</span>
              <Autocomplete
                disablePortal
                className="comboboxPlace"
                options={seat}
                sx={{ width: 250 }}
                renderInput={(params) => (
                  <TextField {...params} label="Hạng ghế" />
                )}
              />
            </div>
          </div>
          <Link to="/booking">
            <button className="search">TIẾP THEO</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
