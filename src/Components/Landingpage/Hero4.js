import React from 'react'
import styled from 'styled-components'
import Choosecard from './Choosecard';
import {AiFillBank, AiFillSignal, AiFillSnippets, AiFillWallet} from 'react-icons/ai'

const Hero4 = (props) => {
  return (
    <Container>
        <Wrapper>
            <Top>
            <H1>Why people choose us</H1>
            <H5>We offer a totally new way of giving grants and loans</H5>
            </Top>
            <Bottom>
                <Choosecard icon={<AiFillSnippets/>} Topic="Short Term Loans" Desc=" A short term loan is a type of loan that is obtained to support a temporary personal or business capital need."/>
                <Choosecard icon={<AiFillBank/>} Topic="Longer Term Loans" Desc="Term Loans are a structured form of borrowing intended to finance specific transactions or assets"/>
                <Choosecard icon={<AiFillSignal/>} Topic="Grants" Desc="Small business grants offer free money you can put to work for your small business. See how you can apply for funding with a small business grant.
"/>
                <Choosecard icon={<AiFillWallet/>} Topic="Life Time Credit" Desc="Lifetime credit with an investment plan for the future"/>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Hero4;

const Container = styled.div`
background-color: #111D32 ;
width: 100%;
height: 60vh;
display: flex;
justify-content: center;
align-items: center;
padding: 30px 0 50px 0;
background: linear-gradient(45deg, #111D32,#263073);


@media Screen and (max-width: 768px){
height: auto;
} 
`;
const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

`;
const Top = styled.div`
width: 70%;
display: flex;
flex-direction: column;
align-items: center;
margin: 25px 0;

@media Screen and (max-width: 768px){
    text-align: center;
}
`;
const H1 = styled.div`
font-size: 25px;
color: whitesmoke;
font-weight: 500;
font-family: Cambria;
`;
const H5 = styled.div`
font-size: 17px;
color: whitesmoke;
`;
const Bottom = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    flex-direction: column;
}

`;


