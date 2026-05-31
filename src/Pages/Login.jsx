import LoginForm from '../components/LoginForm.jsx';
import '../styles/Login.css';

export default function Login({setIsLoggedIn}){
    return(
        <div className="Login">
            
            <LoginForm setIsLoggedIn={setIsLoggedIn}/>
        </div>

    );
}