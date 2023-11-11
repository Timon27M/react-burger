import { useSelector } from "react-redux";
import { getIsLoggedIn, getIsLoading } from "../../services/selectors";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMemo, FC } from "react";

interface IProtectedRoute {
  element: FC;
  auth?: boolean
}

function ProtectedRoute({ element: Component, auth }: IProtectedRoute) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoading = useSelector(getIsLoading);
  const location = useLocation();

  const from = useMemo(() => {
    if (location.state !== null && location.state.from !== undefined) {
      return location.state.from.pathname;
    } 
      return '/';
    
  }, [location.state])

  if (isLoading === true) {
    return <p className="mt-30 text text_type_main-large">Загрузка...</p>
  }
  
  if (isLoggedIn === false && !auth) {
    return <Navigate to="/login" replace state={{ from: location}}/>;
  }
  
  if (isLoggedIn === true && auth) {
    return <Navigate to={from} replace state={{ from: location}}/>;
  }
  
  return <Component />;
}

export default ProtectedRoute;
