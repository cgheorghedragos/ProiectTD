import {combineReducers} from 'redux'

import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllPizzasReducer , addPizzaReducer , getPizzaByIdReducer , editPizzaReducer} from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducer'
import { loginUser, registerUser } from './actions/userActions'
//import { json } from 'stream/consumers'



const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    addPizzaReducer : addPizzaReducer,
    getPizzaByIdReducer : getPizzaByIdReducer,
    editPizzaReducer : editPizzaReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUser,
    loginUserReducer : loginUser,
})


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser= localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : []

const initialState = {
     cartReducer : {
         cartItems : cartItems,
     },
     loginUserReducer : {
         currentUser : currentUser 
     }
}

const composeEnhancers= composeWithDevTools({})

const store = createStore(finalReducer , initialState , composeEnhancers(applyMiddleware(thunk)))

export default store