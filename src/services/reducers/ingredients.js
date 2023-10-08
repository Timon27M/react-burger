import { GET_INGRADIENTS_FAILED, GET_INGRADIENTS_SUCCESS, GET_INGRADIENTS_REQUEST } from "../actions/ingradients";
const initialState = {
    ingredients: [],
    isLoading: false,
    error: null,
}

const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGRADIENTS_REQUEST: {
            return { ...state, isLoading: true }
        }
        case GET_INGRADIENTS_SUCCESS: {
            return { ...state, ingredients: action.payload, isLoading: false }
        }
        case GET_INGRADIENTS_FAILED: {
            return { ...state, ingredients: [], isLoading: false }
        }
        default: {
            return state;
        }
    }
}

export default ingredientsReducer;