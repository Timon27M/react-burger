import styles from "./app.module.css";
import Main from "../../pages/main/main";
import AppHeader from "../app-header/app-header";
import { Routes, Route } from "react-router-dom";
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
// import OrdersHistory from "./orders-history/orders-history";

function App() {
  const dispatch = useDispatch();

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
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<ProtectedRoute element={Login} auth/>} />
        <Route path="/register" element={<ProtectedRoute element={Register} auth/>} />
        <Route path="/forgot-password" element={<ProtectedRoute element={ForgotPassword} auth/>} />
        <Route path="/reset-password" element={<ProtectedRoute element={ResetPassword} auth/>} />
        <Route path="/profile/" element={<ProtectedRoute element={Profile} />}>
          <Route path="" element={<ProtectedRoute element={ProfileInfo} />} />
          <Route path="orders" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
