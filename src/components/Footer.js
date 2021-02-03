import Facebook from '../img/facebook.svg';
import Twitter from '../img/twitter.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>Copyright by Facé 2021.
                    Surreal are faces here.</p>
            </div>
            <div className="social-medias">
                <a href="http://www.facebook.com"><img className="sm" src={Facebook} /></a>
                <br />
                    <a href="http://www.twitter.com"><img className="sm" src={Twitter} /></a>
            </div>
        </footer>
    );
}

export default Footer;