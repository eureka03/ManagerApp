import '../styles/LoginForm.css';
import {Link,useNavigate} from 'react-router-dom';
import { useRef } from 'react';


export default function LoginForm({setIsLoggedIn}){
    const usernameRef = useRef();
    const passwordRef = useRef();
    const formRef = useRef();
    const navigate = useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();
        const User = {
            username:usernameRef.current.value,
            password:passwordRef.current.value
        }
        alert("Form Submitted with data: " + JSON.stringify(User));
        formRef.current.reset();
        setIsLoggedIn(true);
        navigate('/');

        

    }
    return(
            <div className="FormContainer">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input type="text" ref={usernameRef} name="name"  placeholder="Username"/>
                    <input type="password" ref={passwordRef} name="password" placeholder="Password"/>
                    <button type="submit">Login</button>
                    <span>Forgot Password?<Link to='' className='ResetPasswordLink'> Reset Password</Link></span>
                </form>
        </div>
    )
}