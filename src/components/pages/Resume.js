import React from 'react';
import ResumeArora from "../assets/documents/Resume_Arora.pdf";
import styled from 'styled-components'

const Button = styled.button`
  background: aquamarine;
  border-radius: 3px;
  border: 2px solid blue;
  margin: 20px 10px;
  padding: 10px 10px;
`

export default function Resume() {
  return (
    <div>
      <h2>Full-stack Scientific Developer</h2>
      <p>
        I am a talented, ambitious and hardworking individual, with broad skills and 
        experience in building dynamic end-to-end web applications and leading 
        projects. Furthermore, I am adept at handling multiple tasks on a daily basis
        competently and at working well under pressure. A key strength is communication, 
        building strong relationships with people in order to deliver the best results.
        Recently, I completed a Flex Coding Bootcamp Course at the <i>University of Sydney 
        </i> and <i>Trilogy Education Services</i>. I am now employer ready as a Full Stack 
        Web Developer or able to undertake and deliver a digital solution as per clients' needs.
      </p>
      <Button>
      <a href={ResumeArora} download="Resume-Mohit_Arora">Access my resume here</a>
      </Button>
    </div>
  );
}