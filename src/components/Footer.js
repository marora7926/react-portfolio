import React from 'react';
import '../styles/Footer.css'
import Privacy from "../components/assets/documents/Privacy.pdf";
import Disclaimer from "../components/assets/documents/Disclaimer.pdf";

function Footer() {
    return (
      <footer className="footer">
        <p>
          © 2021 Mohit Arora | ABN: 00 000 000 000
        </p>
        <div className="footerLinks">
                <a href={Privacy} download="Privacy">Privacy</a>
                <a href={Disclaimer} download="Disclaimer">Disclaimer</a>
        </div>
        {/* <div className="section-code">
          <div class="page_contact">
              <ul class="flex-container flex-start">
                  <li>
                    <i className="fas fa-phone-volume" title="+61-2-9926-4772"></i>
                  </li>
                  <li>
                    <a href="mailto:mohitcoder2021@gmail.com" title="email">
                      <i className="fas fa-at"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/marora7926" target="_blank" title="Github" rel="noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/marora_ind" target="_blank" title="Twitter" rel="noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mohit-arora-098750122/" target="_blank" title="LinkedIn" rel="noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
              </ul>
          </div>
        </div> */}
      </footer>
    );
  }
  
  export default Footer;