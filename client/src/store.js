import {combineReducers} from 'redux'

import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllPizzasReducer , addPizzaReducer , getPizzaByIdReducer , editPizzaReducer} from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducer'
import { getAllUsersReducer, loginUserReducer, registerUserReducer } from './reducers/userReducer'
import { getUserOrdersReducer, placeOrderReducer,getAllOrdersReducer } from './reducers/orderReducer'




const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    addPizzaReducer : addPizzaReducer,
    getPizzaByIdReducer : getPizzaByIdReducer,
    editPizzaReducer : editPizzaReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    getAllUsersReducer: getAllUsersReducer
})


const currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : null;

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
     cartReducer : {
         cartItems : cartItems,
     },
     loginUserReducer: {
         currentUser: currentUser,
     }
}

const composeEnhancers= composeWithDevTools({})

const store = createStore(finalReducer , initialState , composeEnhancers(applyMiddleware(thunk)))

export default store