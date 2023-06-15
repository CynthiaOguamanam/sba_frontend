import React from "react";
import styled from "styled-components";
import bg from '../Assets/sbafund2.jpg';

const Hero9 = () => {
    return(
        <Container>
            <Wrapper>
            <Card>
                <H1>Our Grant Program is open to registered non-profit organisation.</H1>
                <H5>Do you run a non-profit organisation that aids public growth and development, public health, education, empowerment? You are one click away from receiving a grant today.</H5>
                <Button>Apply Now</Button>
            </Card>
            </Wrapper>
        </Container>
    )
};

export default Hero9;

const Container = styled.div`
width: 100%;
height: 85vh;
background-image: url(${bg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
`; 
const Wrapper = styled.div`
width: 90%;
height: 95%;
display: flex;
justify-content: flex-end;
align-items: center;
`; 
const Card = styled.div`
width: 40%;
height: 50%;
background-color: #263073;
/* opacity: 90%; */
border-radius: 8px;
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: center;

@media Screen and (max-width: 768px){
    height:auto;
    width: 90%;
    background-color: whitesmoke;
    opacity: 80%;
}
`; 

const H1 = styled.div`
font-size: 30px;
font-weight: bold;
color: whitesmoke;

@media Screen and (max-width: 768px){
    color: #263073;
    font-size: 20px;
}
`;

const H5 = styled.div`
margin: 30px 0;
font-size: 16px;
font-weight: 500;
color: whitesmoke;
@media Screen and (max-width: 768px){
    color: #263073;
    font-size: 15px;
}
`;
const Button = styled.div`
padding: 1rem 2rem;
width: 30%;
outline: none;
border: none;
border-radius: 5px;
/* background: linear-gradient(360deg, #111D32,#263073); */
border: 2px solid whitesmoke;
color: whitesmoke;
font-size: 16px;
margin: 5px 0;
cursor: pointer;
text-align: center;
font-weight: bold;
@media Screen and (max-width: 768px){
    padding: 0.3rem 2rem;
    border: 2px solid #263073;
    color: #263073;
}
`;

