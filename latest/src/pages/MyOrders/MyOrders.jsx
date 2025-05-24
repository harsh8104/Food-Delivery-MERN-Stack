import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleOrderTrack = () => {
    navigate("/track-order");
  };
  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      {
        headers: { token },
      }
    );
    setData(response.data.data);
    setLoading(false);
  };
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  if (loading) {
    return (
      <div className="verify">
        <div className="spinner"></div>
      </div>
    );
  } else {
    if (data.length > 0) {
      return (
        <div className="my-orders">
          <h2>My Orders</h2>
          <div className="container">
            {data.map((order, index) => {
              return (
                <div className="my-orders-order" key={index}>
                  <img src={assets.parcel_icon} alt="" />
                  <p>
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + " X " + item.quantity;
                      } else {
                        return item.name + " X " + item.quantity + ", ";
                      }
                    })}
                  </p>
                  <p>${order.amount}.00</p>
                  <p>Items: {order.items.length}</p>
                  <p>
                    <span>&#x25cf;</span>
                    <b>{order.status}</b>
                  </p>
                  {(order.status === "Food Processing" ||
                    order.status === "Out for delivery") && (
                    <button onClick={handleOrderTrack}>Track Order</button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="main">
          <img src={assets.Empty_Order} alt="" />
          <h2 className="empty-cart-title">
            Oops!! You don't order anything yet...
          </h2>
          <h4 className="empty-cart-text-one">Make your first order fast!!!</h4>
        </div>
      );
    }
  }
};

export default MyOrders;
