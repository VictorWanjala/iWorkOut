import React, { useState } from 'react'
import '../styles/Register.css'


function Register() {
  const[action, setAction]=useState('Register');
  return (
    <div className='register'>
    <div className='header'>
      <div className='text'>{action}</div>
      <div className='underline'></div>
    </div>
      <div className='inputs'>
        {action==='Login'?(<div></div>
        ):(<div className='input'>
          <input type='text' placeholder='Name'/>
        </div>)
        }
    
        
        <div className='input'>
          <input type='email' placeholder='Email Id'/>
        </div>
        <div className='input'>
          <input type='password' placeholder='Password'/>
        </div>
        {action==='Register'?(<div className='input'>
        <input type='confirm-password' placeholder='confirm password'/>
      </div>
        ):(<div></div>
        )}
      
        
        {action==='Register'?(<div></div>
        ):(<div className="forgot-password">Lost Password? <span>Click Here!</span> </div>)
        }
        <div className="submit-container">
        <div className={action==='Login'?'submit gray':'submit'} onClick={()=>(setAction('Register'))}>Register</div>
        <div className={action==='Register'?'submit gray':'submit'} onClick={()=>(setAction('Login'))}>Login</div>
      </div>
      </div>
      
      
    </div>
  )
}

export default Register