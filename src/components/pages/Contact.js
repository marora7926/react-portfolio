import React from 'react'; 

export default function Contact() {
  return (
    <div>
        <h2>Contact Me</h2>
        <div className="container">
          <div className="row">
            <section className="col">
                <label className="contact-label name-label" htmlFor="name"> Name:</label><br/>
                <input className="contact-input name-input" type="text" name="name" /><br/>
                <label className="contact-label email-label" htmlFor="mail">E-mail:</label><br/>
                <input className="contact-input email-input" type="text" name="mail" /><br/>
                <label className="contact-label comment-label" htmlFor="comment">Comment:</label><br/>
                <textarea className="comment-input" name="comment" id="contact-textarea" rows="6"></textarea>
                <br/>
                <input className="btn contact-button submit-button" type="submit" value="Send" />
                <input className="btn contact-button reset-button" type="reset" value="Reset" />
            </section>
          </div>
        </div>
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
    </div>
  );
}