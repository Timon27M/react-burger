export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const CLOSE_ORDER_POPUP = 'CLOSE_ORDER_POPUP';

export const getOrder = (ingredientsApi, ingradientsObj) => (dispatch) => {
    dispatch({type: GET_ORDER_REQUEST})
    ingredientsApi.addOrder(ingradientsObj)
    .then((res) => {
        dispatch({type: GET_ORDER_SUCCESS, payload: res})
      })
      .catch(() => {
        dispatch({type: GET_ORDER_FAILED})
      })
}

export const closeOrderPopup = () => (dispatch) => {
    dispatch({type: CLOSE_ORDER_POPUP})
}