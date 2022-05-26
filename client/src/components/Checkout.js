import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch, useSelector} from 'react-redux'
import Succes from '../components/Succes'
import Loading from '../components/Loading'
import Error from "../components/Error";
import {placeOrder} from '../actions/orderActions'

    

export default function Checkout({subtotal}){

    const orderState = useSelector((state) => state.placeOrderReducer)
    const dispatch = useDispatch();
    
    const {loading,error,success} = orderState;

    function tokenHandler(token){
        console.log(token);
        dispatch(placeOrder(token,subtotal*100))
    }

    return (
        <div>

                    {loading ? (<Loading/>): null}
                    {success ? (<Succes succes='Order placed Succesfully'/>):(null)}
                    {error ? (<Error error='An error has occured'/>) : (null)}
                   

            <StripeCheckout
                amount = {subtotal} 
                shippingAddress
                token={tokenHandler}
                stripeKey='pk_test_51L3S0BJYUfpIbBtWePrbli2btA24GzAPHTwccDx0Ey2wSeEt8vSYadkn8vZBOvPFkDazqs0oYdEgK7Wq9N4TgZWG00FddT9x1K'
                currency = 'RON'>
                
                <button className='btn'>Pay right now</button>
            </StripeCheckout>
        </div>
    )
}