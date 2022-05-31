import "./orderSummary.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { useState } from "react";
import OrderDetails from "../../components/orderDetails/orderDetails";
import styled from "styled-components";


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
  console.log(productRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "product",
        headerName: "Product",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="orderSummaryListItem">
              <img className="orderSummaryListImg" src={params.row.img} alt="" />
              {params.row.name}
            </div>
          );
        },
      },
      {
        field: "perUnit",
        headerName: "Per Unit Cost",
        width: 160,
      },
       {
        field: "quantity",
        headerName: "Quantity",
        width: 160,
      },
  
      {
        field: "totalc",
        headerName: "Total cost",
        width: 160,
      },
     
    
   

   
  
  ];

  return (
    <div className="orderSummaryList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
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
    <OrderDetails/>      
    </div>

  );



}
