import "./orders.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderList } from "../../redux/apiCalls";
import { format } from "timeago.js";

export default function Orders() {
  const [data, setData] = useState(productRows);
  const dispatch = useDispatch();
  let orderslist = useSelector(state => state.order.orderList)
  if (!orderslist) {
    orderslist = []
  }

  useEffect(() => {
    getOrderList(dispatch)
  }, [dispatch])


  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const columns = [
    { field: "_id", headerName: "Order ID", width: 220 },
    {
      field: "username",
      headerName: "Customer",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="orderListItem">
            <img className="userListImg" src={`https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg`} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "Order Placed",
      headerName: "Order Placed",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {format(params.row.createdAt)}
          </div>
        );
      },
    },

    {
      field: "grossTotal",
      headerName: "Amount",
      width: 160,
    },
    { field: "orderStatus", headerName: "Order Status", width: 200 },


    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/orderSummary/" + params.row._id}>
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
        rows={orderslist}
        disableSelectionOnClick
        columns={columns}
        getRowId={row => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
