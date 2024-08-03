import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodlist] = useState([]);
  const [loader, setLoader] = useState(true);
  const [avatar, setAvatar] = useState("");
  const [OTP, setOTP] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(2);
  const [cartLoading, serCartLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      await fetchFoodlist();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        setAvatar(localStorage.getItem("avatar"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    if (food_list.length) {
      setLoader(false);
    }
  }, [food_list]);
  useEffect(() => {
    if (Object.keys(cartItems).length) serCartLoading(false);
  }, [cartItems]);
  const url = "https://full-stack-1f9p.onrender.com";

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmt = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmt += itemInfo.price * cartItems[item];
      }
    }
    return totalAmt;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const fetchFoodlist = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodlist(response.data.data);
  };
  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    getTotalCartAmount,
    url,
    token,
    setToken,
    getTotalCartItems,
    loader,
    setAvatar,
    avatar,
    deliveryFee,
    setDeliveryFee,
    setOTP,
    OTP,
    cartLoading,
    serCartLoading,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
