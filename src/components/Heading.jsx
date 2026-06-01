import '../styles/Heading.css';
import { Link } from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider.jsx';


export default function Heading() {
    const {isLoggedIn} = useContext(AuthContext);
    if(isLoggedIn){
        console.log(isLoggedIn);
        return(
            <div className='heading'>
                <h3>EUEU.co</h3>
                <ul className='list-parent'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='#'><IoPersonOutline /></Link></li>
                </ul>
            </div>
        );
    }
    return (
        <div className='heading'>
            <h3>EUEU.co</h3>
            <ul className='list-parent'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>

    );
}