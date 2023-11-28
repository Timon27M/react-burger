import styles from "./app.module.css";
import Main from "../../pages/main/main";
import AppHeader from "../app-header/app-header";
import { Routes, Route, useLocation, useNavigate, Location } from "react-router-dom";
import { useDispatch, useSelector } from "../../utils/type-hooks"; 
import { useEffect } from "react";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import ProfileInfo from "../profile-info/profile-info";
import ProtectedRoute from "../protected-route/protected-route";
import { getUser } from "../../services/actions/current-user";
import { deleteCookie, getCookie } from "../../utils/cookie";
import IngredientDetails from "../ingredient-details/ingredient-details";
// import OrdersHistory from "./orders-history/orders-history";
import { closeOrderPopup } from "../../services/actions/order";
import IngredientPopup from "../../pages/ingredient-popup/ingredient-popup";
import { getIngradients } from "../../services/actions/ingredients";
import api from "../../utils/api";
import NotFound from "../../pages/not-found/not-found";
import Feed from "../../pages/feed/feed";
import { WS_CONNECTION_START } from "../../services/actions/ws-orders";
import OrdersHistory from "./orders-history/orders-history";
import { WS_USER_ORDERS_CONNECTION_START } from "../../services/actions/ws-user-orders";
import { getCurrentUserAccessToken, getIsLoggedIn } from "../../services/selectors";


function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const navigate = useNavigate();

  const accessToken = useSelector(getCurrentUserAccessToken)

  const closePopupOrder = () => {
    dispatch(closeOrderPopup());
  };

  const closePopupIngredientDetails = () => {
    navigate(-1);
  };

  const locationState = location.state as { background: Location }

  const background = locationState && locationState.background;

  useEffect(() => {
    const token = getCookie("accessToken");
    dispatch({ type: WS_CONNECTION_START })
    if (token) {
      dispatch(getUser());
    }
    dispatch(getIngradients(api));
  }, []);

  useEffect(() => {
    if (isLoggedIn && accessToken) {
      dispatch({ type: WS_USER_ORDERS_CONNECTION_START })
    }
  }, [isLoggedIn, accessToken])

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Main closePopup={closePopupOrder} />} />
        <Route path="/feed" element={<Feed />} /> 
        <Route
          path="/login"
          element={<ProtectedRoute element={Login} auth />}
        />
        <Route
          path="/register"
          element={<ProtectedRoute element={Register} auth />}
        />
        <Route
          path="/forgot-password"
          element={<ProtectedRoute element={ForgotPassword} auth />}
        />
        <Route
          path="/reset-password"
          element={<ProtectedRoute element={ResetPassword} auth />}
        />
        <Route path="/profile/" element={<ProtectedRoute element={Profile} />}>
          <Route path="" element={<ProtectedRoute element={ProfileInfo} />} />
          <Route path="orders" element={<ProtectedRoute element={OrdersHistory} />}/>
        </Route>
        <Route path="/ingredient/:id" element={<IngredientDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredient/:id"
            element={
              <IngredientPopup closePopup={closePopupIngredientDetails} />
            }
          />
        </Routes>
      )}
    </div>
  );
}
export default App;
