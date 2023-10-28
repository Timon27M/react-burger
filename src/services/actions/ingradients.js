export const GET_INGRADIENTS_REQUEST = 'GET_INGRADIENTS_REQUEST';
export const GET_INGRADIENTS_SUCCESS = 'GET_INGRADIENTS_SUCCESS';
export const GET_INGRADIENTS_FAILED = 'GET_INGRADIENTS_FAILED';

export const getIngradients = (ingredientsApi) => (dispatch) => {
    dispatch({type: GET_INGRADIENTS_REQUEST})
    ingredientsApi.getIngradients()
    .then((res) => {
        dispatch({type: GET_INGRADIENTS_SUCCESS, payload: res.data})
      })
      .catch(() => {
        dispatch({type: GET_INGRADIENTS_FAILED})
      })
}