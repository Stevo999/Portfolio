import CTA from "./CTA";
import ME from "../assets/mee1.jpg"
import HeaderSocial from "./HeaderSocial";

const Header=()=>{
    return(
        <header>
          <div className="container header__container">
              <h5>Hello I'M</h5>
              <h1>Stephen Gitau</h1>
              <h5 className="text-light">
                  Fullstack Developer
              </h5>
              <CTA/>
              <HeaderSocial/>
              <div className="me">
                  <img src={ME} alt="img"  />
              </div>
              <a href="#contact" className="scroll__down">Bottom</a>
             
          </div>
        </header>
    )
    }
    
    export default Header;