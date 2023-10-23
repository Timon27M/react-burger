import styles from "./app.module.css";
import Main from "../../pages/main/main";
import AppHeader from "../app-header/app-header";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import ProfileInfo from "../profile-info/profile-info";
import ProtectedRoute from "../protected-route/protected-route";
import { getUser } from "../../services/actions/current-user";
import { getCookie } from "../../utils/cookie";
import IngredientDetails from "../ingredient-details/ingredient-details";
// import OrdersHistory from "./orders-history/orders-history";
import { getIsOpenedPopupIngradient } from "../../services/selectors";
import { closeIngredientPopup } from "../../services/actions/ingredient-details";
import { closeOrderPopup } from "../../services/actions/order";
import IngredientPopup from "../../pages/ingredient-popup/ingredient-popup";


function App() {
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(closeIngredientPopup());
    dispatch(closeOrderPopup());
  };

  useEffect(() => {
      const token = getCookie('accessToken')
      if (token) {
        dispatch(getUser())
      }
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Main closePopup={closePopup}/>} />
        <Route path="/login" element={<ProtectedRoute element={Login} auth/>} />
        <Route path="/register" element={<ProtectedRoute element={Register} auth/>} />
        <Route path="/forgot-password" element={<ProtectedRoute element={ForgotPassword} auth/>} />
        <Route path="/reset-password" element={<ProtectedRoute element={ResetPassword} auth/>} />
        <Route path="/profile/" element={<ProtectedRoute element={Profile} />}>
          <Route path="" element={<ProtectedRoute element={ProfileInfo} />} />
          <Route path="orders" />
        </Route>
        <Route path="/ingredient/:id" element={<IngredientPopup closePopup={closePopup}/>} />
      </Routes>
    </div>
  );
}

export default App;
