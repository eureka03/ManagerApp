
import '../styles/Homepage.css';
import homepageImage from '../assets/Homepage.jpg';

export default function Homepage(){
    return(
        <div className="homepage">
           
            <div className="homepage-content">
                <div className="text-container">
                    <h1 className="homepage-title">Unlock the power <br/>of customer <br/>experiences</h1>
                </div>
                <div className="image-container">
                    <img src={homepageImage} alt="Customer Experience" className="homepage-image"/>
                </div>
            </div>
        </div>
    )
}