import { getCookie } from "./cookie";
import { TGetUser } from "./types";

export const getUserRequest = (
  dispatch: any,
  api: any,
  GET_USER_REQUEST: string,
  GET_USER_SUCCESS: string,
  errFunc: () => void
) => {
  dispatch({ type: GET_USER_REQUEST });
  api
    .getUser()
    .then((res: TGetUser) => {
      if (res && res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: {
            user: res.user,
          },
        });
      }
    })
    .catch((err: any) => {
      console.log(err);
      if (errFunc && getCookie("refreshToken")) {
        dispatch(errFunc());
      }
    });
}
