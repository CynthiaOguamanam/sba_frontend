import React from 'react';
import styled from 'styled-components';


const TeamCard = (props) =>{
    return(
        <Wrap>
            <Img src={props.pic}/>
            <Bio>
                <H5>{props.name}</H5>
                <P>{props.position}</P>
            </Bio>
        </Wrap>
    )
};

export default TeamCard;


const Wrap = styled.div`
width: 20%;
background-color: #111D32 ;
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
:hover{
    transform: scale(1.04);
    transition: transform 2s;
    cursor: pointer;
}
transition: transform 2s;

@media Screen and (max-width: 768px){
    width: 90%;
    margin: 10px 0;

}

`;
const Img = styled.img`
width: 100%;
height: 80%;
object-fit: cover;
position: center;

`;
const Bio = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 30%;
`;
const H5 = styled.div`
color: whitesmoke;
`;
const P = styled.div`
color: whitesmoke;

`;

