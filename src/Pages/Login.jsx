import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Components/Navbar'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 50vw;
  align-items: baseline;
    
  div input {
    margin-right: 25px;
  }
  #googleBtn {
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 7px 30px 8px 30px;
  border: none;
  border-radius: .25rem;
  box-shadow:  2px 4px 4px rgba(24, 33, 56, 0.969);
	-moz-box-shadow: 2px 4px 4px rgba(24, 33, 56, 0.969);
	-webkit-box-shadow: 2px 4px 4px rgba(24, 33, 56, 0.969);
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
  margin: auto
}
`

const Login = ({setUser}) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState()

    const handleChange = (e) => {
        setFormData({...formData, [ e.target.id ] : e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/auth/login`, formData)
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                setUser(res.data)
                navigate('/')
            }
        })
    }

  return (
  <StyledForm onSubmit={handleSubmit}>

  <h2>Sign-in with Google or Email:</h2>

  <div>
    <a className="active" id="googleBtn" href="/auth/google">LOGIN</a>
  </div>
<br></br>
  <div>
    <label htmlFor='name'>Username</label>
    <input type='text' name='name' id='name' onChange={handleChange} />
  </div>

  <div>
    <label htmlFor='password'>Password</label>
    <input type='password' name='password' id='password' onChange={handleChange} />
  </div>

  <input type="submit" value="Log In" />

<br></br>
  <div class="register">Haven't logged-in before? 
    <h4>Register<a href="/auth/register"> <em>Here</em></a></h4>
  </div>

  </StyledForm>



  )
}

export default Login