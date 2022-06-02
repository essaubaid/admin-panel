import "./orderDetails.css";
import {
  CalendarToday,
  LocationSearching,
  PermIdentity,
  PhoneAndroid,
  Home,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

const OrderDetails = (props) => {

  const Order = props.comp
  console.log(Order)

  return (
    <div className="user">
      <div className="userTitleContainer">
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Order Placed By: {Order.shipping_address.name}</span>
              <span className="userShowUserTitle">user ID: {Order._id}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{Order.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{format(Order.createdAt)}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <Home className="userShowIcon" />
              <span className="userShowInfoTitle">{Order.shipping_address.address.line1}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{Order.shipping_address.address.city} | {Order.shipping_address.address.country}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails