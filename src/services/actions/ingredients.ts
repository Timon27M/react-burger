import { TIngradientObj, TIngredients } from "../../utils/types";
import { AppDispacth } from "../../utils/type-hooks";

export const GET_INGRADIENTS_REQUEST: 'GET_INGRADIENTS_REQUEST' = 'GET_INGRADIENTS_REQUEST';
export const GET_INGRADIENTS_SUCCESS: 'GET_INGRADIENTS_SUCCESS' = 'GET_INGRADIENTS_SUCCESS';
export const GET_INGRADIENTS_FAILED: 'GET_INGRADIENTS_FAILED' = 'GET_INGRADIENTS_FAILED';

// interface IIngredientArray {
//   _id: string;
//   name: string;
//   type: string;
//   proteins: number;
//   fat: number;
//   carbohydrates: number;
//   calories: number;
//   price: number;
//   image: string;
//   image_mobile: string;
//   image_large: string;
//   __v: number;
// }

export const getIngradients = (ingredientsApi: any) => (dispatch: AppDispacth) => {
    dispatch({type: GET_INGRADIENTS_REQUEST})
    ingredientsApi.getIngradients()
    .then((res: TIngredients) => {
        dispatch({type: GET_INGRADIENTS_SUCCESS, payload: res.data})
      })
      .catch(() => {
        dispatch({type: GET_INGRADIENTS_FAILED})
      })
}

type TGetIngredientsRequestAction = {
  readonly type: typeof GET_INGRADIENTS_REQUEST
}

type TGetIngredientsSuccessAction = {
  readonly type: typeof GET_INGRADIENTS_SUCCESS
  readonly payload: Array<TIngradientObj>
}

type TGetIngredientsFailedAction = {
  readonly type: typeof GET_INGRADIENTS_FAILED
}

export type TIndgredientsActions = TGetIngredientsRequestAction | TGetIngredientsSuccessAction | TGetIngredientsFailedAction;