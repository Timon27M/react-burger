import styles from "./app.module.css";
import Main from "../../pages/main/main";
import AppHeader from "../app-header/app-header";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import { closeOrderPopup } from "../../services/actions/order";
import IngredientPopup from "../../pages/ingredient-popup/ingredient-popup";
import { getIngradients } from "../../services/actions/ingredients";
import ingredientsApi from "../../utils/ingredientsApi";


function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  const navigate = useNavigate();

  const closePopupOrder = () => {
    dispatch(closeOrderPopup());
  };

  const closePopupIngredientDetails = () => {
    navigate(-1, {replace: true})
  }

  const background = location.state && location.state.background

  useEffect(() => {
      const token = getCookie('accessToken')
      if (token) {
        dispatch(getUser())
      }
      dispatch(getIngradients(ingredientsApi))
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Main closePopup={closePopupOrder}/>} />
        <Route path="/login" element={<ProtectedRoute element={Login} auth/>} />
        <Route path="/register" element={<ProtectedRoute element={Register} auth/>} />
        <Route path="/forgot-password" element={<ProtectedRoute element={ForgotPassword} auth/>} />
        <Route path="/reset-password" element={<ProtectedRoute element={ResetPassword} auth/>} />
        <Route path="/profile/" element={<ProtectedRoute element={Profile} />}>
          <Route path="" element={<ProtectedRoute element={ProfileInfo} />} />
          <Route path="orders" />
        </Route>
        <Route path="/ingredient/:id" element={<IngredientDetails />} />
      </Routes>
      <Routes>
        {background && <Route path="/ingredient/:id" element={<IngredientPopup closePopup={closePopupIngredientDetails}/>} /> }
        </Routes>
    </div>
  );
}
export default App;
