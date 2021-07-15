import React from 'react';

export default function Contact() {
  return (
    <div>
        <h1>Contact Me</h1>
        <div class="page_contact">
            <ul class="flex-container flex-start">
                <li class="flex-item"><a class="fas fa-phone-volume" title="+61-2-9926-4772"></a></li>
                <li class="flex-item"><a href="mailto:mohitcoder2021@gmail.com" class="fas fa-at" title="email"></a></li>
                <li class="flex-item"><a href="https://github.com/marora7926" target="_blank" class="fab fa-github" title="Github"></a></li>
                <li class="flex-item"><a href="https://twitter.com/marora_ind" target="_blank" class="fab fa-twitter" title="Twitter"></a></li>
                <li class="flex-item"><a href="https://www.linkedin.com/in/mohit-arora-098750122/" target="_blank" class="fab fa-linkedin-in" title="LinkedIn"></a></li>
            </ul>
        </div>
    </div>
  );
}