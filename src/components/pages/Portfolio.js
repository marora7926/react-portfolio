import React from 'react';

export default function Portfolio() {
    return (
          <div className="portfolio">
            <div id="project_undertaken" className="section-code">
                <h1 className="header-card">Collaborative project</h1>
                <hr></hr>
                <div className="top-projects-completed">
                    <div className="flex-container flex-start">
                        <div className="flex-item">
                            <button id="myBtn">Bootcamp-Hub</button>
                            <div id="myModal" class="modal">
                                <div className="modal-content">
                                    <span className="close">&times;</span>
                                    <p>Bootcamp-Hub</p>
                                    <hr></hr>
                                    <a href="https://marora7926.github.io/bootcamp-hub/" target="_blank" rel="noreferrer">Deployed link</a>
                                    <a href="https://github.com/marora7926/bootcamp-hub" target="_blank" rel="noreferrer">Repo link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 class="header-card">Top solo-projects</h1>
                <hr></hr>
                <div class="top-projects-completed">
                    <ul class="flex-container flex-start">               
                        <li class="flex-item" ><a href="https://marora7926.github.io/code-quiz/" target="_blank" rel="noreferrer">Code-Quiz</a></li>
                        <li class="flex-item" ><a  href="https://marora7926.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">Day-Scheduler</a></li>
                        <li class="flex-item" ><a  href="https://github.com/marora7926" target="_blank" rel="noreferrer">Access Repos</a></li>
                    </ul>
                </div>

                <h1 class="header-card">Other projects</h1>
                <hr></hr>
                <div class="projects-completed">
                    <ul>
                        <li><a href="https://marora7926.github.io/code-refactor/" target="_blank" rel="noreferrer">Code-refactor to HORISEON Accessibility Standards</a></li>
                        <li><a href="https://marora7926.github.io/portfolio-page/" target="_blank" rel="noreferrer">This website</a></li>
                        <li><a href="https://marora7926.github.io/password-generator/" target="_blank" rel="noreferrer">Password-generator</a></li>
                        <li><a href="https://marora7926.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Weather Dashboard</a></li>
                    </ul>
                </div>        
            </div>
        </div>
    );
};