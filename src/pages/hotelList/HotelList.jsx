import "./hotelList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Add, DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { hotelRows } from "../../dummyData";

export default function HotelList() {
  const [data, setData] = useState(hotelRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.ID != id));
  };

  const columns = [
    { field: "ID", headerName: "ID", width: 180 },
    {
      field: "hotelname",
      headerName: "Khách sạn",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="hotelListItem">
            <img src={params.row.avatar} alt="" className="hotelListImg" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "address",
      headerName: "Địa chỉ",
      width: 190,
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      width: 110,
    },
    {
      field: "roomtype",
      headerName: "Loại phòng",
      width: 110,
    },
    {
      field: "price",
      headerName: "Giá",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/hotel/" + params.row.ID}>
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
        rows={data}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row.ID}
        pageSize={100}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
