import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 250px;
    max-width: 50vw;
    align-items: baseline;
    div input {
        margin-right: 25px;
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
        <h1>Login</h1>

        <div>
        <label htmlFor='name'>Username</label>
        <input type='text' name='name' id='name' onChange={handleChange} />
        </div>

        <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' onChange={handleChange} />
        </div>

        <input type="submit" value="Log In" />

    </StyledForm>
  )
}

export default Login