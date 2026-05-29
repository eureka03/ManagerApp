import '../styles/Heading.css';
import { Link } from 'react-router-dom';


export default function Heading({isLoggedIn}) {
    if(isLoggedIn){
        console.log(isLoggedIn);
        return(
            <div>
                <ul className='list-parent'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='#'>Profile</Link></li>
                </ul>
            </div>
        );
    }
    return (
        <div className='heading'>
            <ul className='list-parent'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>

    );
}