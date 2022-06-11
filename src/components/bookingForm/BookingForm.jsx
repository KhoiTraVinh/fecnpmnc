import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from 'react'
import Autocomplete from "@mui/material/Autocomplete";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "./bookingForm.css";
import { useDispatch } from 'react-redux';
import { CreateFlight } from '../../actions/FlightAction';
import { useHistory } from "react-router-dom";

export const BookingForm = () => {
  const [value, setValue] = React.useState([null, null]);
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [peo, setPeo] = useState('');
  const [chillren, setChillren] = useState('');
  const [typeSeat, setTypeSeat] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const FlightCreated = (e) => {
    e.preventDefault();
    dispatch(CreateFlight({
      to,
      from,
      peo,
      chillren,
      typeSeat,
      value,
    }));
    history.push("/booking")
  };


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
    { number: "0" },
    { number: "1" },
    { number: "2" },
    { number: "3" },
    { number: "4" },
    { number: "5" },
    { number: "6" },
    { number: "7" },
    { number: "8" },
    { number: "9" },
    { number: "10" },
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
              onChange={(event, value) => setFrom(value.label)}
              renderInput={(params) => <TextField {...params} label="From" />}
            />
          </div>

          <div className="searchFrom">
            <span className="searchTitle">Chọn điểm đến</span>
            <Autocomplete
              disablePortal
              className="comboboxPlace"
              options={places}
              onChange={(event, value) => setTo(value.label)}
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
              onChange={(event, value) => setPeo(value)}
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
              onChange={(event, value) => setChillren(value)}
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
                    onChange={(newvalue) => {
                      setValue(newvalue);
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
                onChange={(event, value) => setTypeSeat(value.label)}
                renderInput={(params) => (
                  <TextField {...params} label="Hạng ghế" />
                )}
              />
            </div>
          </div>
          <button className="search" onClick={FlightCreated}>TIẾP THEO</button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
