
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'




const SignUp = () => {
    const [udata,setUdata] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""

    });
    console.log(udata);



    const adddata = (e)=>{
        const {name,value} = e.target;

        setUdata(()=>{
            return{
                ...udata,
                [name]:value
            }
        })
    }



    return (
        <section>
            <div className='sign_container'>
                <div className='sign_header'>
                    <img src='https://raw.githubusercontent.com/harsh17112000/E-commerceapp/main/client/public/blacklogoamazon.png' alt='amazonlogo' />
                </div>
                <div className='sign_form'>
                    <form>
                        <h1>Sign-Up</h1>
                        <div className='"form_data'>
                            <label htmlFor='fname'>Your Name</label>
                            <input type='text'
                            onChange={adddata}
                            value={udata.fname}
                            name='fname' placeholder='Please enter your name' id='fname' />


                        </div>
                        <div className='"form_data'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' 
                            onChange={adddata}
                            value={udata.email}
                            name='email' placeholder='Please enter your email' id='email' />


                        </div>
                        <div className='"form_data'>
                            <label htmlFor='mobile'>Mobile no</label>
                            <input type='text' 
                            onChange={adddata}
                            value={udata.mobile}
                            name='mobile' placeholder='Please enter your Mobile no' id='mobile' />


                        </div>
                        <div className='"form_data'>
                            <label htmlFor='password'>PassWord</label>
                            <input type='password' 
                            onChange={adddata}
                            value={udata.password}
                            name='password' placeholder='At least 8 char' id='password' />


                        </div>
                        <div className='"form_data'>
                            <label htmlFor='cpassword'>Re-enter your password</label>
                            <input type='cpassword'
                            onChange={adddata}
                            value={udata.cpassword}
                            name='cpassword' id='cpassword' />


                        </div>
                        <button className='signin_btn'>Continue</button>
                        <div className='signin_info'>
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign in</NavLink>

                        </div>


                    </form>

                </div>



            </div>

        </section>
    )
}

export default SignUp