import React from 'react';
import myImage from "../assets/images/myImage.jpg";
import "../../index"

export default function About() {
  return (
    <div className="aboutMe section-code">
        <img className="passportImage" src={myImage} alt="myimage"></img>
        <div id="app" className="animationText"></div>
        <p className="para1">
            I am born in New Delhi, national capital of an amazing country, India.
            I have a graduate degree in Physiotherapy and Diploma in Clinical Research from
            India. In 2013, I received the prestigious 
            Prime Minister Australia Asia Post Graduate Research Award to pursue 
            Ph.D. in Medicine at the University of Sydney, Australia.
        </p>
        <p className="para1">
            I am based in Sydney, NSW and have enrolled in the 24-weeks 
            <i>"full stack flex coding bootcamp course"</i> at the University of Sydney 
            to gain knowledge and develop skills to build dynamic end-to-end web applications
            and become a full stack web developer. As a Postdoctoral Research Fellow
            at the University of Sydney, I have been utilising this new knowledge and skills 
            in developing research project websites and disseminating the research findings
            to a broad range of stakeholders. In addition, I will continue to ultilise these
            skills in my current role where I will be developing a digital solution for 
            health-related educational resources for people with neurological disorders.  
        </p>
        <p className="para1">
            I like drawing, eating spicy foods, learning international languages, cycling and running. 
        </p>
        <small className="text-muted"><i className="para2">Last updated 21-July-2021</i></small>
    </div>
  );
}