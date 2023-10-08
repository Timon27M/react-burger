import { ADD_INGREDIENT, DELETE_INGREDIENT, ADD_TOTALPRICE } from "../actions/burgerConstructor";
const initialState = {
    constructorIngredients: [],
    totalPrice: 0,
}

const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            return {...state, constructorIngredients: [...state.constructorIngredients, action.payload]}
        }
        case DELETE_INGREDIENT: {
            return {...state, constructorIngredients: state.constructorIngredients.filter((item) => item.uniqId !== action.payload)}
        }
        case ADD_TOTALPRICE: {
            return {...state, 
                totalPrice: [...state.constructorIngredients].reduce((total, ingradient) => {
                    if (ingradient.type === 'bun') {
                       return total + ingradient.price * 2
                    } else {
                       return total += ingradient.price
                    }
                }, 0)
            }
        }
        default: {
            return state;
        }
    }
}

export default burgerConstructorReducer;