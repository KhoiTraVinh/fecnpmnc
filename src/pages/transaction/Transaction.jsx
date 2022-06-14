import React, { useEffect } from "react";
import "./transaction.css";
import { DataGrid } from "@mui/x-data-grid";
import { Add, DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { transactionRows } from "../../dummyData";
import Axios from 'axios';

export default function HotelList() {
  const [data, setData] = useState(transactionRows);

  const [promotion, setPromotion] = useState('');

  const getPromo = async () => {
    await Axios.get('https://servercnpmnc.herokuapp.com/api/promotion')
    .then(res=>{
      setPromotion(res.data);
      console.log(res.data);
    })
    .catch(err=>console.log(err))
  }

  useEffect(() => {
    getPromo();
  },[])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.ID !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 180 },
    {
      field: "hotelId",
      headerName: "Khách sạn",
      width: 200,
    },
    {
      field: "flightId",
      headerName: "Chuyến bay",
      width: 200,
    },
    {
      field: "infocustomer",
      headerName: "Thông tin khách hàng",
      width: 120,
    },
    {
      field: "price",
      headerName: "Giá gốc",
      width: 120,
    },
    {
      field: "pricediscount",
      headerName: "Giá trị giao dịch",
      width: 100,
    },
    {
      field: "isPay",
      headerName: "Trạng thái giao dịch",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/transaction/" + params.row.ID}>
              <button className="transactionListEdit">Detail</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="transactionList">
      <div className="transactionListTitle">
        <div className="left"></div>
        <div className="right">
          <Link to="/newhotel" className="link">
            <button className="transactionListAddButton">
              {" "}
              <Add className="addButton" /> Create{" "}
            </button>
          </Link>
        </div>
      </div>
      <DataGrid
        rows={promotion}
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