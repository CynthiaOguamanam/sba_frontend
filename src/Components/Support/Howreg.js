import React, {useEffect} from 'react'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Howreg = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
    }, []);

  return (
    <Container>
        <Wrapper>
            <H1 data-aos="fade-down">How to Apply for Grant / Loans</H1>
            <Wrap>
                <Hold data-aos="fade-down">
                    <List>1.<br/>You are on the home page of SBA Click on the "Apply Now" button at the top right of<br/> the page head.</List>
                    <List>2.<br/>You are on the application page, you need to enter a valid email address and state reasons <br/>for loan / grant with address and phone number to </List>
                    <List>3.<br/>If you did everything correctly, you will be sent an email to confirm the registration. You will see<br/> the corresponding information window.</List>
                    <List>4.<br/>You need to go into your email and find the letter. If you don’t see it in your Inbox, try checking<br/> the Spam folder. There will be a link/button in the letter - you need to click on it to confirm the<br/> registration.</List>
                    <List>5.<br/>You can apply for a grant / loan. After applying, we strongly recommend that you enable<br/> two-factor authentication (Google 2FA / SMS 2FA / Email 2FA).</List>
                </Hold>
                <Left>
                <Title data-aos="fade-down">Beginner's Guide</Title>
                <P to='/howreg'>How to apply for grantt</P>
                <P data-aos="fade-down" to='/login'>How to apply for loan</P>
                <P to='/arbitage'>Grant offers</P>
                <P data-aos="fade-down" to='/register'>Loan offers</P>
                </Left>
            </Wrap>
        </Wrapper>
    </Container>
  )
}

export default Howreg;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
background-color: #16243D;
/* margin-top: 60px */
`;
const Wrapper = styled.div`
width: 80%;
height: auto;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: flex-start;
margin: 70px 0;
padding: 30px 0;
`;
const H1 = styled.div`
font-size: 30px;
font-weight: bold;
color: #FFCB40;
margin-bottom: 30px;
`;
const Wrap = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-direction: column;
}
/* align-items: fl; */
`;
const Hold = styled.div`
width: 60%;


@media Screen and (max-width: 768px){
    width: 100%;
}
`;
const Title = styled.div`
font-size: 20px;
font-weight: bold;
color: #FFCB40;
margin-bottom: 20px;
`;
const List = styled.div`
margin: 15px 0;
font-weight: bold;
color: lightgrey;
`;
const P = styled.div`
color: lightgrey;
cursor: pointer;
text-decoration: none;
transition: all 1s;
/* letter-spacing: 2.5px; */
font-family: poppins;

:hover{
    text-decoration: 2px underline #ff4d4d;
    transition: all 1s;
}
`;

const Left = styled.div`
width: 35%;
display: flex;
flex-direction: column;


@media Screen and (max-width: 768px){
    margin-top: 45px;
    width :100%;
}
`;

