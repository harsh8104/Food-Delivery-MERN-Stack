import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";
const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token, convertUSDToINR } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);
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
                  <p>₹{convertUSDToINR(order.amount)}.00</p>
                  <p>Items: {order.items.length}</p>
                  <p>
                    <span>&#x25cf;</span>
                    <b>{order.status}</b>
                  </p>
                  <div className="order-datetime">
                    <p>
                      <strong>Order Date:</strong>{" "}
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
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
            Oops!! You haven&apos;t ordered anything yet...
          </h2>
          <h4 className="empty-cart-text-one">Make your first order fast!!!</h4>
        </div>
      );
    }
  }
};

export default MyOrders;
