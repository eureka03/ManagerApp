import LoginForm from '../components/LoginForm.jsx';
import Heading from '../components/Heading.jsx';
import '../styles/Login.css';

export default function Login(){
    return(
        <div className="Login">
            <Heading/>
            <LoginForm/>
        </div>

    );
}