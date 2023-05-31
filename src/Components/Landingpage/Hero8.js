import React, {useEffect} from 'react';
import styled from "styled-components";
import illus from '../Assets/sbapiggy.png'
import AOS from 'aos'
import "aos/dist/aos.css"

const Hero8 = () =>{

    useEffect(() =>{
        AOS.init({duration: 1000})
    });

    return(
        <Container>
            <Wrapper>
                <Left>
                    <Illus data-aos="flip-left" src={illus} alt="illus"/>
                </Left>
                <Right>
                    <H1>Grant Offer</H1>
                    <Description>
                    SBA provides limited small business grants and grants to states and eligible community organizations, individuals to promote entrepreneurship. Ability to make do of the opportunity and grow in it attracts higher grants.
                    </Description>
                    <Button>HOW IT WORKS?</Button>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Hero8;

const Container = styled.div`
width: 100%;
height: 60vh;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #263073;

@media Screen and (max-width: 768px){
    height: auto;
    padding: 20px 0;
}
`;
const Wrapper = styled.div`
width: 90%;
height: 95%;
display:  flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    flex-direction: column;
}
`;
const Left = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items:center;
padding: 20px 0;
`;
const Illus = styled.img`
/* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
`;
const Right = styled.div`
width: 50%;

@media Screen and (max-width: 768px){
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items:center;
}
`;
const H1 = styled.div`
font-size: 35px;
font-weight: bold;
color: #263073;

@media Screen and (max-width: 768px){
    font-size: 27px;
}
`;
const Description = styled.div`
margin: 30px 0;
font-size: 16px;
font-weight: 500;
color: #111D32;
`;
const Button = styled.div`
padding: 1rem 2rem;
width: 30%;
outline: none;
border: none;
border-radius: 5px;
/* background: linear-gradient(360deg, #111D32,#263073); */
border: 2px solid #263073;
color: #111D32;
font-size: 16px;
margin: 5px 0;
cursor: pointer;
text-align: center;
font-weight: bold;
@media Screen and (max-width: 768px){
    padding: 0.3rem 2rem;
}
`;
// const Right = styled.div``;

