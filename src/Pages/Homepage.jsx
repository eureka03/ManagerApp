import Heading from '../components/Heading.jsx';
import '../styles/Homepage.css';

export default function Homepage(){
    return(
        <div className="homepage">
            <Heading/>
            <div className="homepage-content">
                <div className="text-container">
                    <h1 className="homepage-title">Unlock the power <br/>of customer <br/>experiences</h1>

                </div>
            </div>
        </div>
    )
}