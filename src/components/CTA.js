import CV from "../assets/myCV.pdf"

const CTA=()=>{
    return(
        <div className="cta">
            <a href={CV} className="btn">DownLoad CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    );
}
export default CTA;