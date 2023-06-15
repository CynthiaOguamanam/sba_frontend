import React from 'react'
import { FaChevronRight} from 'react-icons/fa';
import styled from 'styled-components'

const Card = (props) => {
  return (
    <Holder bg={props.bg}>
        <IconHold col={props.col}>
            <Icon>{props.iconmain}</Icon>
        </IconHold>
        <Row>
            <H4>{props.title}</H4>
            <Icon2>
            <FaChevronRight style={{color: "white", width: "15px", height: "15px"}}/>
            </Icon2>
        </Row>
        <Line></Line>
        <Text>{props.text}</Text>
        <h5>{props.price}</h5>
    </Holder>
  )
}

export default Card;

const Holder = styled.div`
background-color: ${({bg}) => bg};
width: 30%;
height: 240px;
padding: 15px;
/* background-color: #20C99F;
background-color: mediumseagreen; */
border-radius: 0.4rem;
margin: 10px 0;
display: flex;
flex-direction: column;
justify-content: center;

h5{
    color: black;
    font-size :15px;

}

@media Screen and (max-width: 1280px){
    width: 44%;
    height: max-content;
}
@media Screen and (max-width: 768px){
    width: 100%;
}
`;
const IconHold = styled.div`
width: 60px;
height: 60px;
border-radius: 1rem;
/* background-color: ${({col}) => col}; */
background-color: white;
opacity: 80%;
display: flex;
justify-content: center;
align-items: center;
`;
const Icon = styled.div`
color: grey;
width: 20px;
height: 20px;
`;

const Row = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin: 10px 0;
`;
const H4 = styled.div`
color: white;
font-weight: bold;
font-size: 16px;
cursor: pointer;
`;
const Line = styled.div`
width: 100%;
height: 1px;
background-color: white;
margin: 8px 0 15px 0;
`;
const Text = styled.div`
width: 100%;
color: white;
`;

const Icon2 = styled.div`
cursor: pointer;
`;