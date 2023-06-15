import React from 'react';
import styled from 'styled-components';
import Comp1 from "../Assets/comp1.jpeg"
import Comp2 from "../Assets/comp2.png"
import Comp3 from "../Assets/comp3.png"
import Comp4 from "../Assets/comp4.png"
import Comp5 from "../Assets/comp5.png"
import Comp6 from "../Assets/chime.png"
import Marquee from "react-fast-marquee";


const Hero7 = () =>{
    return(
        <Container>
            <H1>Featured Company Donor</H1>
            <Wrapper>
                <Marquee speed={50}>
                <Img src={Comp1} alt="partner"/>
                <Img src={Comp2} alt="partner"/>
                <Img src={Comp3} alt="partner"/>
                <Img src={Comp4} alt="partner"/>
                <Img src={Comp5} alt="partner"/>
                <Img src={Comp6} alt="partner"/>
                </Marquee>
            </Wrapper>
        </Container>
    )
}
export default Hero7;

const Container = styled.div`
width: 100%;
height: 25vh;
background-color: #111D32;
display: flex;
flex-direction: column;
align-items: center;
padding: 30px 0;
@media Screen and (max-width: 768px){
    height :auto;
}
`;
const Wrapper = styled.div`
width: 90%;
height: 95%;
display :flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    flex-wrap: wrap;
    margin-top: 20px;
}

`;
const Img = styled.img`
width: 250px;
height: 100px;
margin:5px;
`;
const H1 = styled.div`
color: whitesmoke;
font-size: 20px;
font-weight: bold;
`;

