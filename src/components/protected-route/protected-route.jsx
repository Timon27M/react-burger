import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../services/selectors";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, auth, ...props }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (isLoggedIn === false && !auth) {
    return <Navigate to="/login" replace />;
  }

  if (isLoggedIn === true && auth) {
    return <Navigate to="/profile/" replace />;
  }

  return <Component {...props} />;
}

export default ProtectedRoute;
