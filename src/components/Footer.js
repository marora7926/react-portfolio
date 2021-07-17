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
      </footer>
    );
  }
  
  export default Footer;