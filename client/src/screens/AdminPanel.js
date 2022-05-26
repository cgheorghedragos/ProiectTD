import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Adminpanel() {
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = "/";
        }
    }, []);

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>

                    <ul className="adminfunctions">
                        <li><a href="/admin/userslist">Users List</a></li>
                        <li><a href="/admin/pizzaslist">Pizza List</a></li>
                        <li><a href="/admin/addpizza">Add new Pizza</a></li>
                        <li><a href="/admin/orderslist">Order List</a></li>
                    </ul>

                    <div>
                    </div>
                </div>

            </div>

        </div>
    );
}