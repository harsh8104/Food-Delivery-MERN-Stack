import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";
import axios from "axios";
import { toast } from "react-toastify";
const bigExplodeProps = {
  force: 0.6,
  duration: 5000,
  particleCount: 200,
  floorHeight: 1600,
  floorWidth: 1600,
};

const Cart = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [code, setCode] = useState("");
  const [isCouponCodeTrue, setIsCouponCodeTrue] = useState(false);
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);
  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      {
        headers: { token },
      }
    );
    setData(response.data.data);
    return response.data.data;
  };
  const onChangeHandler = (e) => {
    const code = e.target.value;
    setCode(code);
  };
  const handleClick = async () => {
    const orderData = await fetchOrders();
    console.log(data);
    if (code === "FIRST-ORDER" && orderData.length === 0) {
      setDeliveryFee(0);
      setIsCouponCodeTrue(true);
    } else {
      toast.error("This code is only valid for first order");
      setIsCouponCodeTrue(false);
    }
    setIsExploding(!isExploding);
  };
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    deliveryFee,
    setDeliveryFee,
    cartLoading,
  } = useContext(StoreContext);
  const navigate = useNavigate();
  if (getTotalCartItems() > 0) {
    if (!cartLoading) {
      return (
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={index}>
                    <div className="cart-items-title cart-items-item">
                      <img src={url + "/images/" + item.img} alt="" />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>${item.price * cartItems[item._id]}</p>
                      <p
                        className="cross"
                        onClick={() => removeFromCart(item._id)}
                      >
                        X
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Total</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>${getTotalCartAmount() === 0 ? 0 : deliveryFee}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>
                    $
                    {getTotalCartAmount() === 0
                      ? 0
                      : getTotalCartAmount() + deliveryFee}
                  </b>
                </div>
              </div>
              <button onClick={() => navigate("/order")}>
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>If you have a promo code,Enter it here</p>
                <div className="cart-promocode-input">
                  <input
                    type="text"
                    placeholder="Enter Promo Code"
                    onChange={onChangeHandler}
                  />
                  <div>
                    <button type="button" onClick={handleClick}>
                      {isExploding && isCouponCodeTrue && (
                        <div>
                          <ConfettiExplosion {...bigExplodeProps} />
                        </div>
                      )}
                      Apply Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else
      return (
        <div className="spinner">
          <div className="spin"></div>
        </div>
      );
  } else {
    return (
      <div>
        <video className="empty-cart" muted loop autoPlay>
          <source src={assets.Empty_Cart} type="video/mp4" />
        </video>
        <h2 className="empty-cart-title">Good food is always cooking</h2>
        <h4 className="empty-cart-text-one">Your cart is empty.</h4>
        <h4 className="empty-cart-text-two">Add something from menu.</h4>

        <button className="empty-cart-button">
          <Link to="/">View Menu</Link>
        </button>
      </div>
    );
  }
};

export default Cart;
