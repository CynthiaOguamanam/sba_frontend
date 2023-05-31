import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css"

const Choosecard = (props) => {

    useEffect(() =>{
        AOS.init({duration:1000})
    },[]);

  return (
    <Wrapper data-aos="fade-down">
        <Circle>
            <Icon>{props.icon}</Icon>
        </Circle>
        <Card>
            <Title>{props.Topic}</Title>
            <Description>
                {props.Desc}
            </Description>
            <How to="http://gmail.com/sba@gmail.com">HOW IT WORKS?</How>
        </Card>
    </Wrapper>
  )
}

export default Choosecard;

const Wrapper = styled.div`
width: 220px;
height: 320px;
display: flex;
flex-direction: column;
position: relative;
align-items: center;
box-shadow: rgb(255, 255, 255) 0px 1px 3px 0px, rgb(255, 255, 255) 0px 1px 2px 0px;
padding: 0 10px;

@media Screen and (max-width: 768px){
    margin: 20px 0;
}

`;
const Circle = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #CD2129;
position: absolute;
top: -15px;
display: flex;
justify-content: center;
align-items: center;

`;
const Icon = styled.div`
color: whitesmoke;
width: 45px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
`;
const Card = styled.div`
width: 100%;
height: 85%;
margin-top: 50px;
text-align: center;
/* background-color: rgba(255, 255, 255, 0.303); */

`;
const Title = styled.div`
font-size: 17px;
font-weight: bold;
color: whitesmoke;
`;
const Description = styled.div`
color: whitesmoke;
margin: 2rem 0;
`;
const How = styled(Link)`
/* color: #126004; */
color: green;
text-decoration-color: green;
`;