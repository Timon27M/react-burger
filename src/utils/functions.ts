import { getCookie } from "./cookie";
import { AppDispacth } from "./type-hooks";
import { TGetUser } from "./types";

export const getUserRequest = (
  dispatch: AppDispacth,
  api: any,
  GET_USER_REQUEST: string,
  GET_USER_SUCCESS: string,
  errFunc: () => (dispatch: AppDispacth) => void
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
            accessToken: getCookie('accessToken'),
            refreshToken: getCookie('refreshToken'),
          },
        });
      }
    })
    .catch((err: string) => {
      console.log(err);
      if (errFunc && getCookie("refreshToken")) {
        dispatch(errFunc());
      }
    });
};
