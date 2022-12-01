import "./footer.css"
import email from '../../Images/email-icon.png'
import github from '../../Images/github-icon.png'
import linkedin from '../../Images/linkedin-icon.png'

const Footer = () => {
    return (
        <>
            <footer>
                <a href="https://www.github.com/derekgauger"><img className="footer-link" title="github" alt="Github Link" src={github}/></a>
                <a href="https://www.linkedin.com/in/derekgauger"><img className="footer-link" title="linkedin" alt="LinkedIn Link" src={linkedin}/></a>
                <a href="/contact"><img className="footer-link" title="email" alt="Email Link" src={email}/></a>
                <br/>
                <span className="footer-text">
                    Derek Gauger
                    <span className="dot"> &#8226; </span>
                     2022 
                     <span className="dot"> &#8226; </span>
                    gaugerderek@gmail.com
                    <span className="dot"> &#8226; </span>
                    262-581-7793
                </span>
                <br/>
                <span>
                    Coded from scratch using React JS
                </span>
                <br/>
                <span>
                    Thank you for stopping by!
                </span>
            </footer>
        </>
    )
}

export default Footer