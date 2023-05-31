import React, {useEffect} from 'react'
import styled from 'styled-components'
import Image2 from "../Assets/hero2.png"
import AOS from 'aos'
import "aos/dist/aos.css"

const Hero2 = () => {

    useEffect(() =>{
        AOS.init({duration:1000})
      })

  return (
    <Container>
        <Wrapper>
            <Top>
                <H1>Welcome to SBA Grants and Loans</H1>
                <H5>We offer a totally new way of giving grants and loans</H5>
            </Top>
            <Bottom>
                <Left>
                    <LeftHold>
                        <Title>01. Grant offer</Title>
                        <Description>
                            Make a request on our website and wait for response to e-mail within 15-30 minutes from the time of the request during business hours. Or send a mail to our support for assistance and further enquiries.
                        </Description>
                    </LeftHold>
                    <LeftHold>
                        <Title>02. Loan Offers</Title>
                        <Description>
                        Make a request on our website and wait for response to e-mail within 15-30 minutes from the time of the request during business hours.
                        </Description>
                    </LeftHold>
                </Left>
                <Right  data-aos="fade-down" src={Image2} alt="hero2"/>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Hero2;

const Container = styled.div`
background-color: #111D32 ;
width: 100%;
height: 60vh;
display: flex;
justify-content: center;
align-items: center;
padding: 30px 0 50px 0;
/* background: linear-gradient(360deg, #111D32,#263073); */


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
const Left = styled.div`
width: 50%;
display: flex;
flex-direction: column;
padding: 8px;
border: 1px dashed whitesmoke;
@media Screen and (max-width: 768px){
    width: 90%;
    margin: 10px 0 40px 0;
}
`;
const LeftHold = styled.div`
margin: 10px 0;
/* background-color: red; */
display: flex;
flex-direction: column;

`;
const Title = styled.div`
font-size: 17px;
font-weight: bold;
color: whitesmoke;
`;
const Description = styled.div`
color: whitesmoke;
margin-top: 5px;
`;
const Right = styled.img``;