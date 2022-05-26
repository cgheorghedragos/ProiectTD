import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Loading from '../components/Loading';
import Succes from '../components/Succes';
import Error from '../components/Error';

export default function RegisterScreen() {
    const[name,setname] = useState('');
    const[email,setemail] = useState('');
    const[password,setpassword] = useState('');
    const[cpassword,setcpassword] = useState('');
    const registerState = useSelector(state=> state.registerUserReducer);
    const {error, loading, success} = registerState;
    
    const dispatch = useDispatch();

    function register(){
        if(password != cpassword){
            alert("Password not match");
        }
        else{
            const user = {
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user));
        }
    }

    return (
        <div>
              <div className="row justify-content-center mt-5">
                  <div className='col-md-5 mt-5'>
                  <h2 className='text-center m-2' style={{fontSize : "35px"}}>Register</h2>
                    {loading ? (<Loading/>): null}
                    {success ? (<Succes succes='User Registered Succesfully'/>) : null}
                    {error ? (<Error error='Email already Registered'/>) : (null)}

                    <div>
                            <input required type="text" placeholder='name' className="form-control"
                            value = {name}
                            onChange = {(e)=>{setname(e.target.value)}}/>

                            <input required type="text" placeholder='email' className="form-control" value = {email}
                            onChange = {(e)=>{setemail(e.target.value)}}/>

                            <input type="password" placeholder='password' className="form-control" value = {password} required 
                            onChange = {(e)=>{setpassword(e.target.value)}}/>

                            <input type="password" placeholder='confirm password' className="form-control" value = {cpassword} required 
                            onChange = {(e)=>{setcpassword(e.target.value)}} 
                            />

                            <button onClick={register} className="btn mt-3">Register</button>
                            <a className = 'btn mb-1 ' style={{margin : '20px'}} href="/login">Go To Login</a>
                        </div>

                  </div>
                    

              </div>
        </div>
    )
}