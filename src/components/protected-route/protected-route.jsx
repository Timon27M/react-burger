import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../services/selectors";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ element: Component, auth, ...props }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation();

  // if (isLoggedIn === true && location.pathname !== '/login') {
  //   return <Component {...props} />
  // } 
  
  if (isLoggedIn === false && !auth ) {
    return <Navigate to="/login" replace />
  }

  if (isLoggedIn === true && auth) {
    return <Navigate to="/profile/" replace />
  }

  return <Component {...props}/>

  // if (isLoggedIn === true && !auth ) {
  //   return <Component {...props} />
  // } 
  
  // if (isLoggedIn === false && !auth) {
  //   return <Navigate to="/login" />
  // }

  // if (isLoggedIn === true && auth ) {
  //   return
  // }



  // return isLoggedIn === true ? (
  //    <Component {...props} />
  // ) : (
  //   <Navigate to="/login" />
  // );
}

export default ProtectedRoute;
