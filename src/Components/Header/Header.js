import React, { useState, useEffect } from "react";
import { Container, Header2, Line, Logo, LogoHold, Nav, NavHold,SignUp,Wrapper,BurgerHold, NavDiv} from './HeaderStyle';
import {AiOutlineMenu} from 'react-icons/ai'
// import {BsFillPersonFill} from 'react-icons/bs'
import logo from '../Assets/sbalogo.webp'
import SideNav from "./SideNav";
import AOS from 'aos'
import 'aos/dist/aos.css'
// import {useNavigate} from 'react-router-dom'


const Header = () => {
    
    const [nav, setNav] = useState(false);
    // const navigate = useNavigate();
    // const [navData, setNavData] = useState();
    // const UserData = JSON.parse(localStorage.getItem("User"));

    // const deleteUser = () =>{
    //     localStorage.removeItem("User");
    //     // navigate("/")
    //     window.location.reload();
    // };

    useEffect(() =>{
        AOS.init({duration:1000})
      },[])

    return(
        <Container>
           
            <Wrapper>
            <Header2>
                    <LogoHold>
                        <Logo src={logo} alt="logo"/>
                    </LogoHold>
                    
                    {/* <Nav to='/' style={{color: "#fff", fontWeight: "bold", fontSize: "20px", display: "flex", alignItems: "center"}}> <BsFillPersonFill/> Sign Out</Nav> */}
                        <NavHold>
                        <Nav to='/'>Home</Nav>
                        <Nav to='/'>About Us</Nav>
                        <Nav to='/'>Grant Package</Nav>
                        <Nav to='/'>Fund Raising</Nav>
                        <Nav to='/'>Support</Nav>
                        <Line></Line>
                        <SignUp>Apply Now</SignUp>
                    </NavHold>
            </Header2>
            <BurgerHold onClick={() =>{
          setNav(!nav)
        }}> 
          <AiOutlineMenu style={{color: "#263073", width: 15, height: 15}}/>
        </BurgerHold>
       </Wrapper>
                 {
        nav? (
        <NavDiv data-aos="fade-right"> 
          <SideNav setNav={setNav}/>
        </NavDiv>
        ) : null
            }
        </Container>
    )
};

export default Header;

   