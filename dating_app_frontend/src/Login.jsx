import React from 'react'
import { useNavigate } from 'react-router-dom'
import {ApiCall} from "../Services/ApiCall"
import { LoginUrl } from '../Services/Base_URL';
import { useState,useEffect } from 'react';
function Login() {
    let navigate= useNavigate();
    const[loginData,setLoginData]=useState([])
    console.log(loginData,"loginData")

    

    const Login = async () => {
      try {
        const response = await ApiCall('post', LoginUrl);
        console.log(response,"response")
        // if (response.status === 200) {
        //   getSetEmirates(response.data.docs);
        // } else {
        //   console.error('Failed to retrieve Emirates data:');
        // }
      } catch (error) {
        console.log(error);
      }
    };
     
      
  return (

 <div>
 
  {/* preloader start here */}
 
  {/* preloader ending here */}
  {/* scrollToTop start here */}
  <a href="#" className="scrollToTop"><i className="fa-solid fa-angle-up" /></a>
  {/* scrollToTop ending here */}
  {/* ================> login section start here <================== */}
  <section className="log-reg">
    <div className="top-menu-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-7">
            <div className="logo">
              <a href="index.html"><img src="assets/images/logo/logo.png" alt="logo" /></a>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="image image-log" />
        <div className="col-lg-7">
          <div className="log-reg-inner">
            <div className="section-header inloginp">
              <h2 className="title">Welcome to Ollya</h2>
            </div>
            <div className="main-content inloginp">
              <form action="#">
                <div className="form-group">
                  <label>Your Address</label>
                  <input type="email" className="my-form-control" placeholder="Enter Your Email"  
                  value={loginData?.name}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="text" className="my-form-control" placeholder="Enter Your Password" 
                     value={loginData?.password}
                     onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}/>
                </div>
                <div className="text-center">
                  <button type="submit" className="default-btn " onClick={Login}><span>Sign IN</span></button>
                </div>
                <div className="or">
                  <p>OR</p>
                </div>
                <div className="or-content">
                  <p className="or-signup"    > Don't have an account? <a   onClick={() => {
                                          return navigate(
                                            `/register`
                                          );
                                        }}>Sign up here</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Login