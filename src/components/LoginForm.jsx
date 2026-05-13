
import '../styles/LoginForm.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function LoginForm(){

    const [user,setUser] = useState({
        name:'',
        password:''
    });

    const handleChange =(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user)

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Form Submitted with data:", user);
    }

    return(
            <div className="FormContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input type="text" value={user.name} name="name" onChange={handleChange} placeholder="Username"/>
                    <input type="password" value={user.password} name="password" onChange={handleChange} placeholder="Password"/>
                    <button type="submit">Login</button>
                    <span>Forgot Password?<Link to='' className='ResetPasswordLink'> Reset Password</Link></span>
                </form>
        </div>
    )
}