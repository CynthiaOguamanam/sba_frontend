import React, {useEffect} from 'react'
import styled from 'styled-components'
import Heroimg from '../Assets/sbaillus.webp'
import AOS from "aos"
import 'aos/dist/aos.css'

const Hero1 = () => {

    useEffect(() =>{
        AOS.init({duration:1000})
      },[])

  return (
    <Container>
        <Wrapper>
            <Left>
                <H5>SBA GRANT PROGRAM</H5>
                <H1 data-aos="fade-down">HELPING <span style={{color: "#263073"}}>SMALL BUSINESSES, INDIVIDUALS</span> ACHIEVE THEIR BUSINESS AND INDIVIDUAL <span style={{color: "#263073"}}>GOALS</span></H1>
                <P>SBA provides limited small business grants and grants to states and eligible community organizations, individuals to promote entrepreneurship.</P>
                <ButtonHold>
                    <Button>Grant Programs</Button>
                    <Button>Apply Now</Button>
                </ButtonHold>
            </Left>
            <Right>
                <Img src={Heroimg} alt='heroimage'/>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Hero1;

const Container = styled.div`
width: 100%;
height: 60vh;
/* background-color: green; */
display: flex;
justify-content: center;
align-items: center;
padding: 70px 0 20px 0;
margin-top: 100px;

@media Screen and (max-width: 768px){
    height: auto;
    margin-top: 0;
    
}
`;
const Wrapper = styled.div`
width: 90%;
height: 90%;
/* background-color: tomato; */
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    flex-direction: column;

}
`;
const Left = styled.div`
width: 47%;
/* background-color: peru; */
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;

@media Screen and (max-width: 768px){
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 50px;
}
`;
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 3px;
`;

const Right = styled.div`
width: 50%;
/* background-color: paleturquoise; */
height: 100%;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

@media Screen and (max-width: 768px){
    width: 100%;
    height: auto;
    margin-top: 30px;
}
`;

const H5 = styled.div`
font-size: 16px;
font-weight: 500;
`;
const H1 = styled.div`
font-size: 35px;
font-weight: bold;
margin-top: 20px;

@media Screen and (max-width: 768px){
    font-size: 27px;
}
`;
const P = styled.p`
font-weight: 500;
`;
const ButtonHold = styled.div`
width: 60%;
/* background-color: red; */
display: flex;
justify-content: space-between;


@media Screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
}
`;
const Button = styled.button`
padding: 1rem 2rem;
outline: none;
border: none;
border-radius: 5px;
background: linear-gradient(360deg, #111D32,#263073);
color: whitesmoke;
font-size: 15px;
margin: 5px 0;
cursor: pointer;
`;
