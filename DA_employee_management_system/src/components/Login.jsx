
import React from 'react'

const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
       <div className='p-3 rounded  border loginForm'>
        <h2 className='text-center mb-4'>DA Login Page</h2>
        <form action="">
            <div className='mb-3'> 
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" autoComplete='off' placeholder='enter email' className='form-control rounded-0' />
            </div>
            <div className='mb-3'>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" autoComplete='off' placeholder='enter password' className='form-control rounded-0' />
            </div>
            <button className="btn btn-success w-100 rounded-0 mb-2">Log in</button>
            <div className='mb-1'>
              <input type="checkbox" name="tick" id="tick" className='me-2' />
                <label htmlFor="password"> Agree to Terms and Conditions</label>
            </div>
        </form>
       </div>
    </div>
  )
}
 
export default Login;