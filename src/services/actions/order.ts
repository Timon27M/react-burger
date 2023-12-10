import { AppDispacth } from "../../utils/type-hooks";
import { TIngredientId, TOrderInfo } from "../../utils/types";
import { deleteIngredientsConstructor } from "./burger-constructor";

export const GET_ORDER_FAILED: "GET_ORDER_FAILED" = "GET_ORDER_FAILED";
export const GET_ORDER_REQUEST: "GET_ORDER_REQUEST" = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS" = "GET_ORDER_SUCCESS";
export const CLOSE_ORDER_POPUP: "CLOSE_ORDER_POPUP" = "CLOSE_ORDER_POPUP";

export const getOrder =
  (ingredientsApi: any, ingradientsId: TIngredientId) =>
  (dispatch: AppDispacth) => {
    dispatch({ type: GET_ORDER_REQUEST });
    ingredientsApi
      .addOrder(ingradientsId)
      .then((res: number) => {
        dispatch({ type: GET_ORDER_SUCCESS, payload: res });
      })
      .then(() => {
        dispatch(deleteIngredientsConstructor());
      })
      .catch(() => {
        dispatch({ type: GET_ORDER_FAILED });
      });
  };

export const closeOrderPopup = () => (dispatch: AppDispacth) => {
  dispatch({ type: CLOSE_ORDER_POPUP });
};

type TGetOrderRequestAction = {
  readonly type: typeof GET_ORDER_REQUEST;
};

type TGetOrderSuccessAction = {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: TOrderInfo;
};

type TGetOrderFailedAction = {
  readonly type: typeof GET_ORDER_FAILED;
};

type TCloseOrderPopupAction = {
  readonly type: typeof CLOSE_ORDER_POPUP;
};

export type TOrderActions =
  | TGetOrderRequestAction
  | TGetOrderSuccessAction
  | TGetOrderFailedAction
  | TCloseOrderPopupAction;
