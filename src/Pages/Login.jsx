import LoginForm from '../Components/LoginForm.jsx';
import '../Styles/Login.css';

export default function Login({setIsLoggedIn}){
    return(
        <div className="Login">
            
            <LoginForm setIsLoggedIn={setIsLoggedIn}/>
        </div>

    );
}