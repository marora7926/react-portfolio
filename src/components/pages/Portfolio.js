import React from 'react';

export default function Portfolio() {
    return (
        <div className="section-code">
            <h3 className="header-card">Collaborative project</h3>
            <hr></hr>
            <div className="top-projects-completed">
                <ul>               
                    <li>
                        <p className="singleItem">Bootcamp-hub:
                            <a className="anchorD" href="https://marora7926.github.io/bootcamp-hub/" target="_blank" rel="noreferrer">Deployed link</a>
                            <a className="anchorR" href="https://github.com/marora7926/bootcamp-hub" target="_blank" rel="noreferrer">Access Repo</a>
                        </p>
                    </li>

                    <li>
                        <p className="singleItem">Password-genie:
                            <a className="anchorD" href="https://password-genie.herokuapp.com" target="_blank" rel="noreferrer">Deployed link</a>
                            <a className="anchorR" href="https://github.com/marora7926/password-genie" target="_blank" rel="noreferrer">Access Repo</a>
                        </p>
                    </li>
                </ul>
            </div>

            <h3 className="header-card">Top solo-projects</h3>
            <hr></hr>
            <div className="top-projects-completed">
                <ul>               
                    <li>
                        <p className="singleItem">Budget-tracker:
                            <a className="anchorD" href="https://budget-tracker-ma.herokuapp.com/" target="_blank" rel="noreferrer">Deployed link</a>
                            <a className="anchorR" href="https://github.com/marora7926/budget-tracker" target="_blank" rel="noreferrer">Access Repo</a>
                        </p>
                    </li>

                    <li>
                        <p className="singleItem">Work-day-scheduler:
                            <a className="anchorD" href="https://marora7926.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">Deployed link</a>
                            <a className="anchorR" href="https://github.com/marora7926/work-day-scheduler" target="_blank" rel="noreferrer">Access Repo</a>
                        </p>
                    </li>

                    <li>
                        <p className="singleItem">Code-quiz:
                            <a className="anchorD" href="https://marora7926.github.io/code-quiz/" target="_blank" rel="noreferrer">Deployed link</a>
                            <a className="anchorR" href="https://github.com/marora7926/code-quiz" target="_blank" rel="noreferrer">Access Repo</a>
                        </p>
                    </li>

                    <li>
                        <p className="singleItem">Weather Dashboard:
                            <a className="anchorD" href="https://marora7926.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Deployed link</a>
                            <a className="anchorR" href="https://github.com/marora7926/weather-dashboard" target="_blank" rel="noreferrer">Access Repo</a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};