import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"

const Hero10 = () => {
  return (
    <Container>
        <Wrapper>
            <H1>Start and grow your business</H1>
            <Line></Line>
            <H5>Want to be an entrepreneur? Learn how to get started on you own business in 10 steps</H5>
            <Button>Get a Loan</Button>
        </Wrapper>
    </Container>
  )
};

export default Hero10;

const Container = styled.div`
width: 100%;
display :flex;
justify-content: center;
align-items: center;
height: 30vh;
padding: 2rem 0;
`;
const Wrapper = styled.div`
background-color: #263073;
width: 87%;
height: 95%;
padding: 0 0 0 2rem;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
border-radius: 1rem;
`;
const H1 = styled.div`
color: white;
font-size: 30px;
`;
const Line = styled.div`
background-color: red;
width: 100px;
height: 1px;
margin: 8px 0;
`;
const H5 = styled.div`
color: white;
font-size: 16px;
margin-bottom: 10px;
`;
const Button = styled(Link)`
padding: 0.6rem 1.3rem;
border-radius: 0.3rem;
border: none;
outline: none;
cursor: pointer;
color: #263073;
font-size: 15px;
font-weight: bold;
text-decoration: none;
background-color: white;

`;