import "./hotelList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Add, DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { hotelRows } from "../../dummyData";
import Axios  from "axios";

export default function HotelList() {
  const [data, setData] = useState(hotelRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.ID != id));
  };

  const [hotel, setHotel] = useState();


  const getHotel = async () => {
    await Axios.get("https://servercnpmnc.herokuapp.com/api/hotel/get/all").then(res=>{
      setHotel(res.data);
    })
    .catch(err=>console.log(err))
  }
  
  useEffect(() => {
    getHotel();
  },[])

  const columns = [
    { field: "_id", headerName: "ID", width: 180 },
    {
      field: "Name",
      headerName: "Khách sạn",
      width: 200,
    },
    {
      field: "Address",
      headerName: "Địa chỉ",
      width: 190,
    },
    {
      field: "Flight",
      headerName: "Đã gồm vé máy bay",
      width: 110,
    },
    {
      field: "Room",
      headerName: "Loại phòng",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <label for="cars">Loại phòng:</label>
            <select id="cars">
              {params.value.map((room) => {
                console.log(room);
                <option key={room._id} value={room.Name}>
                  {room.Name}
                </option>
              })}
            </select>
          </>
        );
      },
    },
    {
      field: "Price",
      headerName: "Giá",
      width: 90,
    },
    {
      field: "PriceDiscount",
      headerName: "Giá Khuyến Mãi",
      width: 90,
    },
    {
      field: "Percent",
      headerName: "Phần trăm giảm giá",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/hotel/" + params.row._id}>
              <button className="hotelListEdit">Edit</button>
            </Link>

            <DeleteOutline
              className="hotelListDelete"
              onClick={() => handleDelete(params.row.ID)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="hotelList">
      <div className="hotelListTitle">
        <div className="left"></div>
        <div className="right">
          <Link to="/newhotel" className="link">
            <button className="hotelListAddButton">
              {" "}
              <Add className="addButton" /> Create{" "}
            </button>
          </Link>
        </div>
      </div>
      <DataGrid
        rows={hotel}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={100}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
