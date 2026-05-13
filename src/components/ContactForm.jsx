
import '../styles/ContactForm.css'

export default function Contact(){
    return(
        <div className="contact-container">
            <form>
                <h1>Contact Us</h1>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}