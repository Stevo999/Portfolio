import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FiDribbble} from "react-icons/fi";


const HeaderSocial=()=>{
    return(
        <div className="header__social">
            <a href="https://www.linkedin.com/in/stephen-gitau-82239b240/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Stevo999" target="_blank"><FaGithub/></a>
            {/* <a href="https://dribble.com" target="_blank"><FiDribbble/></a> */}
        </div>
    );
}
export default HeaderSocial;