import "./flightList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { flightRows } from "../../dummyData";

export default function FlightList() {
  const [data, setData] = useState(flightRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.ID !== id));
  };

  const columns = [
    { field: "ID", headerName: "ID", width: 180 },
    {
      field: "airport",
      headerName: "Hãng bay",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flightListItem">
            <img src={params.row.img} alt="" className="flightListImg" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "startpoint",
      headerName: "Điểm xuất phát",
      width: 150,
    },
    {
      field: "endpoint",
      headerName: "Điểm đến",
      width: 150,
    },
    {
      field: "price",
      headerName: "Giá",
      width: 90,
    },
    {
      field: "seat",
      headerName: "Hạng ghế",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/flight/" + params.row.ID}>
              <button className="flightListEdit">Edit</button>
            </Link>

            <DeleteOutline
              className="flightListDelete"
              onClick={() => handleDelete(params.row.ID)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="flightList">
      <div className="flightListTitle">
        <div className="left"></div>
        <div className="right">
          <Link to="/newflight" className="link">
            <button className="flightListAddButton">Create</button>
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
