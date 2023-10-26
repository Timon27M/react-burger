import { getCookie } from "./cookie";

export function getUserRequest(
  dispatch,
  api,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  errFunc
) {
  dispatch({ type: GET_USER_REQUEST });
  api
    .getUser()
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: {
            user: res.user,
          },
        });
      }
    })
    .catch((err) => {
      console.log(err);
      if (errFunc && getCookie("refreshToken")) {
        dispatch(errFunc());
      }
    });
}
