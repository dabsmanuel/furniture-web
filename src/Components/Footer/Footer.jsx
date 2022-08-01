import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import { GrFacebook} from 'react-icons/gr'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className="footer">
      <div className="container footer-container">
        <div className="socials-container">
          <div className="footer-logo">
            <h2>
              <a href="/">FurniShop</a>
            </h2>
          </div>
          <div className="footer-socials">
            <BsInstagram className="icon" />
            <GrFacebook className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
        <hr />

        <div className="footer-links">
          <div className="Resources">
            <h3>Our Products</h3>
            <small>
              <a href="/">The Support Site</a>
            </small>
            <small>
              <a href="/">The Sales Site</a>
            </small>
            <small>
              <a href="/">Support</a>
            </small>
            <small>
              <a href="/">Guide</a>
            </small>
          </div>

          <div className="Resources">
            <h3>Top Features</h3>
            <small>
              <a href="/">Ticketing System</a>
            </small>
            <small>
              <a href="/">Knowledge Base</a>
            </small>
            <small>
              <a href="/">Community Forums</a>
            </small>
            <small>
              <a href="/">Help Desk Software</a>
            </small>
          </div>

          <div className="Resources">
            <h3>Resources</h3>
            <small>
              <a href="/">Product Support</a>
            </small>
            <small>
              <a href="/">Request Demo</a>
            </small>
            <small>
              <a href="/">Library</a>
            </small>
            <small>
              <a href="/">Peoplepower Blog</a>
            </small>
          </div>

          <div className="Resources">
            <h3>Company</h3>
            <small>
              <a href="/">About Us</a>
            </small>
            <small>
              <a href="/">Press</a>
            </small>
            <small>
              <a href="/">Investors</a>
            </small>
            <small>
              <a href="/">Events</a>
            </small>
          </div>

          <div className="Resources">
            <h3>Favorite Things</h3>
            <small>
              <a href="/">For Enterprise</a>
            </small>
            <small>
              <a href="/">For Startups</a>
            </small>
            <small>
              <a href="/">For Benchmark</a>
            </small>
            <small>
              <a href="/">For Small Business</a>
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer