import React from "react";
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I have</h5>
            <h2>Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__frontend-content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>React</h4>
                            <small className="text-light">Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>CSS</h4>
                            <small className="text-light">Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>Material UI</h4>
                            <small className="text-light">Basic</small>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>Boostrap</h4>
                            <small className="text-light">Basic</small>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>Javascript</h4>
                            <small className="text-light">Intermediate</small>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__backend-content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>Python</h4>
                            <small className="text-light">Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>Java</h4>
                            <small className="text-light">Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>Lua</h4>
                            <small className="text-light">Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>C++</h4>
                            <small className="text-light">Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>Ruby on Rails</h4>
                            <small className="text-light">Intermediate</small>
                        </article>

                    </div>
                </div>
                <div className="experience__others">
                    <h3>Others</h3>
                    <div className="experience__others-content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>MySQL</h4>
                            <small className="text-light">Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>MongoDB</h4>
                            <small className="text-light">Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>Git</h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>SDLC - Agile(Scrum)</h4>
                            <small className="text-light">Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill/>
                            <h4>AWS Services</h4>
                            <small className="text-light">Intermediate</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;