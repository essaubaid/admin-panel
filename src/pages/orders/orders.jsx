import "./orders.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Orders() {
  const [data, setData] = useState(productRows);
  console.log(productRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "customer",
        headerName: "Customer",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="orderListItem">
              <img className="orderListImg" src={params.row.img} alt="" />
              {params.row.name}
            </div>
          );
        },
      },
      {
        field: "date",
        headerName: "Date",
        width: 160,
      },
  
    {
        field: "amount",
        headerName: "Amount",
        width: 160,
      },
      { field: "transactionID", headerName: "Transaction ID", width: 200 },

   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/orderSummary/" + params.row.id}>
              <button className="orderListDetails">Details</button>
            </Link>
           
          </>
        );
      },
    },
  ];

  return (
    <div className="orderList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
