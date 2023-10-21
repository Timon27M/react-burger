import styles from "./app.module.css";
import Main from "../../pages/main/main";
import AppHeader from "../app-header/app-header";
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import ProfileInfo from "../profile-info/profile-info";
import ProtectedRoute from "../protected-route/protected-route";
// import OrdersHistory from "./orders-history/orders-history";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<ProtectedRoute element={Profile} />}>
          <Route path="" element={<ProtectedRoute element={ProfileInfo} />} />
          {/* <Route path="orders" /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
