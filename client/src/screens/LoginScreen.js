import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from "../actions/userActions";
import Loading from '../components/Loading';
import Succes from '../components/Succes';
import Error from '../components/Error';

export default function LoginScreen() {
    const[email,setemail] = useState('');
    const[password,setpassword] = useState('');
    const dispatch = useDispatch();

    const loginState = useSelector(state=> state.loginUserReducer);

    const {error, loading, success} = loginState;

    useEffect(() => {
        if(localStorage.getItem('currentUser')){
            window.location.href="/";
        }
    })

    function login(){
        const user = {email,password};
        dispatch(loginUser(user));
    }

    return (
        <div>
              <div className="row justify-content-center mt-5">
                  <div className='col-md-5 mt-5'>

                  {loading ? (<Loading/>): null}
                    {success ? (<Succes succes='User Login Succesfully'/>) : null}
                    {error ? (<Error error='User Not Found'/>) : (null)}

                      <h2 className='text-center m-2' style={{fontSize : "35px"}}>Login</h2>

                      
                    <div>
                          

                            <input required type="text" placeholder='email' className="form-control" value = {email}
                            onChange = {(e)=>{setemail(e.target.value)}}/>

                            <input type="password" placeholder='password' className="form-control" value = {password} required 
                            onChange = {(e)=>{setpassword(e.target.value)}}/>

                            <button onClick={login} className="btn mt-3 ">Login</button>

                            <a className = 'btn mb-1 ' style={{margin : '20px'}} href="/Register">Go To Register</a>
                        </div>

                  </div>
                    

              </div>
        </div>
    )
}