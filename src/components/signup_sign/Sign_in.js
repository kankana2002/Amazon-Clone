import React from 'react'
import "./signup.css";

const Sign_in = () => {
  return (
    <>
        <section>
            <div className='sign_container'>
                <div className='sign_header'>
                    <img src='https://raw.githubusercontent.com/harsh17112000/E-commerceapp/main/client/public/blacklogoamazon.png' alt='amazonlogo'/>
                </div>
                <div className='sign_form'>
                    <form>
                        <h1>Sign-In</h1>
                        <div className='"form_data'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' name='email' id='email'/>


                        </div>
                        <div className='"form_data'>
                            <label htmlFor='password'>PassWord</label>
                            <input type='password' name='password' id='password'/>


                        </div>

                    </form>

                </div>


            </div>

        </section>
    </>
  )
}

export default Sign_in