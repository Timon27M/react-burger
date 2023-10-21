import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../services/selectors";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, ...props }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn === true ? (
     <Component {...props} />
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoute;
