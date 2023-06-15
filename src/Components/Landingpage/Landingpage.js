import React from 'react'
import Hero1 from './Hero1';
import styled from 'styled-components';
import Hero2 from './Hero2';
import Hero3 from './hero3';
import Hero4 from './Hero4';
import Hero5 from './Hero5';
import Hero6 from "./Hero6";
import Hero7 from "./Hero7";
import Hero8 from "./Hero8";
import Hero9 from "./Hero9";
import Land9 from "./Testimonial/Land9"
import Hero10 from './Hero10';

const Landingpage = () => {
  return (
    <Container>
      <Hero1/>
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Hero5/>
      <Hero6/>
      <Hero7/>
      <Hero8/>
      <Hero9/>
      <Hero10/>
      <Land9/>
    </Container>
  )
};

export default Landingpage;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
`;
