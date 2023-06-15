import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100px;
/* background: linear-gradient(360deg, #111D32,#263073); */
background-color: white;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 1000;
position: fixed;
top: 0;
/* display: none; */
@media Screen and (max-width: 768px){
    height: 80px;
    width: 100%;
    /* background: linear-gradient(45deg, #111D32,#000911ef); */
}

`;
export const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 90%;
/* background: linear-gradient(360deg, #111D32,#263073); */
@media Screen and (max-width: 768px){
    width: 80%;
    justify-content: space-between;
}
`;
export const Wrapper1 = styled.div`
width: 100%;
/* background-color: #BF1E24; */
background-color: #16243D;
display: flex; 
align-items: center;
justify-content: center;
height: 30%;

@media Screen and (max-width: 768px){
    display: none;
}


`;
export const NavDiv = styled.div`
position: fixed;
height: 50vh;
width: 100%;
display: flex;
align-items: center;
bottom: 100px;
top: 0;
left: 0;
z-index: 500;


@media Screen and (max-width: 768px){
    width: 92%;
    top: 250px;
}

`;
export const BurgerHold = styled.button`
width : 45px;
height: 45px;
display: none;
@media Screen and (max-width: 768px){
    display: block;
    background-color: #fff;
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: none;
    outline:none;
    transition: 0.5s;
    cursor: pointer;
    margin-right: 50px;
}
`;
export const Header1 = styled.div`
width: 75%;
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
`
export const Left = styled.div`
height: 100%;
width: 30%;
display: flex;
justify-content: space-between;
align-items: center;
`
export const Right = styled.div`
height: 100%;
width: 35%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    background-color: red;
}

`
export const A = styled.div`
/* background-color: lightcoral; */
display: flex;
justify-content: space-between;
align-items: center;
height: 50%;
width: auto;
`;
export const Icon = styled.div`
color: #018ACA;
display: flex;
justify-content: center;
align-items: center;

:hover{
    cursor: pointer;
    transition: all 2s;
}
`;
export const SocialHold = styled.div`
width: 40%;
/* background-color: papayawhip; */
display: flex;
justify-content: space-between;
align-items: center;
`;
export const SocialIcon = styled.div`
color: aliceblue;
:hover{
    cursor: pointer;
    transition: all 2s;
}
`;
export const Header2 = styled.div`
height: 100%;
width: 88%;
/* background: gainsboro; */
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 30px;


@media Screen and (max-width: 768px){
    width: 85%;
    justify-content: space-between;
}


`;
export const LogoHold = styled.div`
width: 14%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
h6{
    color: #263073;
    font-size: 13px;
}
@media Screen and (max-width: 768px){
    width: 25%;
    height: 80%;
    margin-left: 30px;
}
`;
export const Logo = styled.img`
width: 60%;
height: 100%;
/* margin-top: 20px; */

@media Screen and (max-width: 768px){
width: 50px;
height: 50px;
/* margin-left: 50px; */
border-radius: 5px;
}

/* @media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
} */
`;

export const NavHold = styled.div`
width: 65%;
/* background-color: #263073; */
/* border: 1px solid linear-gradient(360deg, #111D32,#263073); */
border: 1px solid #263073;
border-radius: 0.3rem;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.2rem 0.2rem 0.2rem 1rem;
height: 40%;
@media Screen and (max-width: 768px){
    display: none;
}
`;
export const Nav = styled(Link)`
color: #111D32;
font-size: 13px;
font-weight: 400;
font-family: sans-serif;
text-decoration: none;
:hover{
    cursor: pointer;
    transition: all 2s;
}
`;
// export const Login = styled.div`
// border: none;
// outline: none;
// background: none;
// color: aliceblue;
// font-size: 13px;
// font-weight: bold;
// cursor: pointer;
// transition: all 350ms;
// text-decoration: none;
// `;
export const SignUp = styled(Link)`
padding: 0.6rem 1.5rem;
font-size: 13px;
font-weight: bold;
color: #015ec9;
border: none;
outline: none;
border-radius: 0 0.3rem 0.3rem 0;
/* border-radius: 0.3rem; */
background-color: #fff;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
text-decoration: none;

:hover{
    cursor: pointer;
    /* background: transparent; */
}
`;
export const ContactHold = styled.div`
width: 18%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    display: none;
}

`;
export const CallIcon = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
border: 2px solid #45395b;
`;
export const ContDiv = styled.div`

`;
export const P = styled.div`
color: #45395b;
font-size: 18px;
font-weight: bold;
`;
export const Line = styled.div`
width: 1px;
height: 100%;
background-color: #263073;
`;

// background-image: linear-gradient(to right, #aa05a8, #212121);
