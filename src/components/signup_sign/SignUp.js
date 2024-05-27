import React from 'react'
import { NavLink } from 'react-router-dom'



const SignUp = () => {
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
                            <input type='text' name='fname' placeholder='Please enter your name' id='email' />


                        </div>
                        <div className='"form_data'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' name='email' placeholder='Please enter your email' id='email' />


                        </div>
                        <div className='"form_data'>
                            <label htmlFor='number'>Mobile no</label>
                            <input type='text' name='mobile' placeholder='Please enter your Mobile no' id='mobile' />


                        </div>
                        <div className='"form_data'>
                            <label htmlFor='password'>PassWord</label>
                            <input type='password' name='password' placeholder='At least 8 char' id='password' />


                        </div>
                        <div className='"form_data'>
                            <label htmlFor='password'>Re-enter your password</label>
                            <input type='password' name='password' id='password' />


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