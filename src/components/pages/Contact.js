import React from 'react'; 
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  return (
    <div className="contactMe ">
        <div className="section-code">
          <h5>Send me a short message</h5>
          <div className="container">
            <div className="row">
              <section className="col">
                <label className="contact-label name-label" htmlFor="name"> Name:</label><br/>
                <input className="contact-input name-input" type="name" maxLength="25" required/><br/>
                <label className="contact-label email-label" htmlFor="mail">E-mail:</label><br/>
                <input className="contact-input email-input" type="email" pattern={validateEmail} required/><br/>
                <label className="contact-label comment-label" htmlFor="comment">Message:</label><br/>
                <textarea className="comment-input" name="Message" rows="5"></textarea><br/>
                <input className="btn contact-button bg-secondary text-white submit-button" type="submit" value="Send"/>
              </section>
            </div>
          </div>
        </div>
    </div>
  );
}