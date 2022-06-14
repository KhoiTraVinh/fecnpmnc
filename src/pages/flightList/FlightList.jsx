import "./flightList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { flightRows } from "../../dummyData";
import Axios from 'axios';
import { useEffect } from "react";


export default function FlightList() {
  const [data, setData] = useState(flightRows);
  const [flight, setFlight] = useState();


  const getFlight = async () => {
    await Axios.get("https://servercnpmnc.herokuapp.com/api/flight").then(res=>{
      setFlight(res.data);
      console.log(res.data);
    })
    .catch(err=>console.log(err))
  }
  
  useEffect(() => {
    getFlight();
  },[])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.ID !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 180 },
    {
      field: "Airlines",
      headerName: "Hãng bay",
      width: 200,
    },
    {
      field: "From",
      headerName: "Điểm xuất phát",
      width: 150,
    },
    {
      field: "To",
      headerName: "Điểm đến",
      width: 150,
    },
    {
      field: "Time",
      headerName: "Thời Gian",
      width: 90,
    },
    {
      field: "seatclass",
      headerName: "Hạng ghế",
      width: 90,
    },
    {
      field: "peonum",
      headerName: "Số hành khách",
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
        rows={flight}
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
