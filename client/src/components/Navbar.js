import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {logoutUser} from "../actions/userActions"

export default function Navbar() {
    const cartstate = useSelector((state) => state.cartReducer);
    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;

    const dispatch = useDispatch();

    console.log(cartstate);
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">

            {currentUser ? (
                <a className="navbar-brand" href="/">
                    MON PIZZA
                </a>
                ): (
                <a className="navbar-brand" href="/login">
                MON PIZZA
                </a>)
                }
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">


                    {currentUser ? (
                        currentUser.isAdmin ? (<li className="nav-item">
                        <a className="nav-link" href="/admin">
                            Admin Panel
                        </a>
                        </li>):(null)
                        
                        ) : (null)}

                        {currentUser ? (
                        <li className="nav-item">
                        <a className="nav-link" href="/">
                            {currentUser.name}
                        </a>
                        </li>
                        ) : (<li className="nav-item active">
                            <a className="nav-link" href="/login">
                                Login
                            </a>
                        </li>)}

                        {currentUser ? (
                        <li className="nav-item">
                        <a className="nav-link" href="/orders">
                            Orders
                        </a>
                        </li>
                        ) : (null)}


                        {currentUser ? (
                        <li className="nav-item">
                        <a className="nav-link" href="/cart">
                            Cart {cartstate.cartItems.length}
                        </a>
                        </li>
                        ) : (null)}

                        
                    
                        {currentUser ? (
                        <li className="nav-item">
                        <a className="nav-link" href="/login" onClick={() => {
                            dispatch(logoutUser());
                             }}>
                            Logout
                        </a>
                        </li>
                        ) : (null)}

                    </ul>
                </div>
            </nav>
        </div>)
}