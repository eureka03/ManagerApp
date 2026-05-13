import Heading from "../components/Heading"
import "../styles/About.css"

export default function About(){
    return (
        <div>
            <Heading/>
            <div className="about-container">
                <h1>About Us</h1>
                <h3>The older data is data found from a certain source.</h3>
            </div>
        </div>
    )
}