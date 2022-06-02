import "./orderSummary.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { useState } from "react";
import OrderDetails from "../../components/orderDetails/orderDetails";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


const Updates = styled.select`
margin-left:5px;
padding:3px;
`;
const UpdateOptions = styled.option``;
const UpdateTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;
const OrderUpdate = styled.div`
position:absolute;
right: 50px;
margin:20px;
`;



export default function Orders() {
  const [data, setData] = useState(productRows);
  const location = useLocation()
  const orderId = location.pathname.split("/")[2];

  let order = useSelector(state => state.order.orderList.find(order => order._id === orderId))
  let productlist = order.OrderDetails
  if (!productlist) {
    productlist = []
  }

  let mapProduct = []

  productlist.map(item => (
    mapProduct.push({
      _id: item.product._id,
      image: item.product.productImageURL,
      quantity: item.quantity,
      price: item.product.productPrice,
      total: item.price
    })
  ))

  console.log(mapProduct)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="orderSummaryListItem">
            <img className="orderSummaryListImg" src={`http://localhost:5000/api/images/${params.row.image}`} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Per Unit Cost",
      width: 160,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 160,
    },

    {
      field: "total",
      headerName: "Total cost",
      width: 160,
    },






  ];

  return (
    <div className="orderSummaryList">
      <DataGrid
        rows={mapProduct}
        disableSelectionOnClick
        columns={columns}
        getRowId={row => row._id}
        pageSize={5}
        checkboxSelection


      />
      <OrderUpdate>
        <UpdateTitle>Order Update</UpdateTitle>
        <Updates>

          <UpdateOptions value={"Received"}>Received</UpdateOptions>
          <UpdateOptions value={"Accepted"}>Accepted</UpdateOptions>
          <UpdateOptions value={"Shipped"}>Shipped</UpdateOptions>
          <UpdateOptions value={"Delivered"}>Delivered</UpdateOptions>


        </Updates>
      </OrderUpdate>
      <OrderDetails />
    </div>

  );



}
