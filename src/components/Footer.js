import React from 'react';
import '../styles/Footer.css'  

function Footer() {
    return (
      <footer className="footer">
        <p>
          © 2021 Mohit Arora | ABN: 00 000 000 000
        </p>
        <div class="footerLinks">
                <a href=".\assets\documents\Privacy policy.pdf" target="_blank">Privacy</a>
                <a href=".\assets\documents\Disclaimer.pdf" target="_blank">Disclaimer</a>
        </div>
      </footer>
    );
  }
  
  export default Footer;