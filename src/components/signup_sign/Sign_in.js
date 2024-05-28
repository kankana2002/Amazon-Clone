import React, { useState } from 'react'
import "./signup.css";
import { NavLink } from 'react-router-dom';

const Sign_in = () => {
    const [logdata,setData] = useState({
        email:"",
        password:""
    });
    console.log(logdata);

    const adddata = (e)=>{
       
        const  {name,value} = e.target;

        setData(()=>{
            return{
                ...logdata,
                [name]:value
            }
        })



    }
    return (
        <>
            <section>
                <div className='sign_container'>
                    <div className='sign_header'>
                        <img src='https://raw.githubusercontent.com/harsh17112000/E-commerceapp/main/client/public/blacklogoamazon.png' alt='amazonlogo' />
                    </div>
                    <div className='sign_form'>
                        <form>
                            <h1>Sign-In</h1>
                            <div className='"form_data'>
                                <label htmlFor='email'>Email</label>
                                <input type='text'
                                onChange={adddata}
                                value={logdata.email}
                                name='email' placeholder='Please enter your email' id='email' />


                            </div>
                            <div className='"form_data'>
                                <label htmlFor='password'>PassWord</label>
                                <input type='password'
                                onChange={adddata}
                                value={logdata.password}
                                name='password' placeholder='At least 8 char' id='password' />


                            </div>
                            <button className='signin_btn'>Continue</button>

                        </form>

                    </div>
                    <div className='create_accountinfo'>
                        <p>New to Amazon</p>
                        <NavLink to="/registered">
                        <button>Create your Amazon account</button>
                        </NavLink>
                        


                    </div>


                </div>

            </section>
        </>
    )
}

export default Sign_in