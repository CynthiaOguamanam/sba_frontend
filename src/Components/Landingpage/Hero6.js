import React from 'react'
import styled from 'styled-components';
import TeamCard from "./TeamCard"
import pic1 from "../Assets/55.png"
import ceo from "../Assets/ceo sba.jpg"
import pic2 from "../Assets/2.jpg"
import pic3 from "../Assets/33.png"


const Hero6 = () =>{
    return(
        <Container>
            <Wrapper>
                <Top>
                    <H1>Our Professional Team</H1>
                    <H5>We offer totally new way of grants and loans</H5>
                </Top>
                <Bottom>
                    <TeamCard pic={pic1} name="BRIELLE TURNER" position="PR MANAGER"/>
                    <TeamCard pic={ceo} name="ISSABEL GUZMAN" position="DIRECTOR"/>
                    <TeamCard pic={pic3} name="LISA DERICK" position="CONSULTANT"/>
                    <TeamCard pic={pic2} name="ANTHONIO GOMEZ " position="FINANCE MANAGER"/>
                </Bottom>
            </Wrapper>
        </Container>
    )
};

export default Hero6;

const Container = styled.div`
width: 100%;
height: 70vh;
display: flex;
justify-content: center;
align-items: center;
padding: 30px 0;
border-bottom: 1px solid #111D32;

@media Screen and (max-width: 768px){
    height: auto;
}

`;
const Wrapper = styled.div`
width: 90%;
height: 95%;
display: flex;
flex-direction: column;
align-items: center;
`;
const Top = styled.div``;
const H1 = styled.div`
font-size: 25px;
color: #111D32;
font-weight: bold;
font-family: Cambria;
`;
const H5 = styled.div`
font-size: 17px;
color: #111D32;

`;
const Bottom = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 30px;
height: 100%;

@media Screen and (max-width: 768px){
    flex-direction: column;
    align-items:center;
}
`;

