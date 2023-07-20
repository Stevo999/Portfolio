import {FaFacebook} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
import {FiLinkedin} from "react-icons/fi"

const Footer=()=>{
    return(
        <footer>
            <a href="#" className="footer__logo">Steve</a>

            <ul className="permalink">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
            <a href="https://web.facebook.com/stephen.gitau.94402"><FaFacebook/></a>
            <a href="https://www.instagram.com/stevo.gitau/"><FiInstagram/></a>
            <a href="https://twitter.com/stevegitau84"><IoLogoTwitter/></a>
            <a href="https://www.linkedin.com/in/stephen-gitau-82239b240/"><FiLinkedin/></a>
            </div>

            <div className="footer__copyright">
               <small>&copy; Stephen Gitau</small>
           </div>
        </footer>
    )
    }
    
    export default Footer;