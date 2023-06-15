import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import Card from './Card';
import { FaChartBar, FaSeedling, FaChartPie, FaChalkboardTeacher, FaFunnelDollar, FaHandshake,FaPlus } from 'react-icons/fa';


const GrantPackages = () => {
  return (
    <Container>
        <Wrapper>
            <Nav to='/'>Home</Nav>
            <H1>How we help small businesses</H1>
            <H4>Work with us the way you want.</H4>
            <P>Turn your business into a reality. Register, file, and start doing business. <br/> You've got a great idea Now, make a plan to turn it into a great business.
            </P>
            <Section>
                <Card title="SBA-guaranteed business loans" bg="#20C99F" iconmain={<FaSeedling/>} text="Find an SBA lender near you to help fund your business.." price="$16 for $10,000.34"/>
                <Card title="Home & business disaster loans" bg="#007bff" iconmain={<FaChartBar/>} text="Apply for a low-interest disaster loan to help recover from declared disasters." price= "$86 for $94,000.65"/>
                <Card title="7(a)" bg="#6f42c1" iconmain={<FaChartPie/>} text="The 7(a) Grant Program, SBA’s most common grant program, includes financial help for small businesses with special requirements." price="$40 for $1,000.43"/>
                <Card bg="#343a40" title="Physical damage loans" iconmain={<FaChalkboardTeacher/>} text="Homeowners, renters, nonprofit organizations, and businesses of all sizes are eligible to apply for physical disaster assistance." price="$60 for $1,200.47"/>
                <Card bg="#6c757d" iconmain={<FaFunnelDollar/>} title="Startup Grant" text="SBA provides limited small business grants and grants to states and eligible community organizations to promote entrepreneurship." price="$62 for $1,100.43"/>
                <Card iconmain={<FaHandshake/>} title="Housing and Personal Assistance grant" text="We aim to generate consistent outperformance by systematically giving grants themes across cities, states and beyond. We believe that a multi-factor..." bg="#fd7e14" price="$57 for $700.39" />
                <Card bg="#20C99F" title="Multi Assets" text="Multi-asset income solutions designed to provide clients with stable, sustainable income in today’s low-yield environment.." iconmain={<FaSeedling/>} price="$52 for $600.26"/>
                <Card bg="#007bff" title="Community Grant" text="SBA offers grants to community organizations that promote entrepreneurship, including those that support veteran owned and service-disabled veteran-owned businesses and Small Business Development Centers.." iconmain={<FaChartBar/>} price="$40 for $500.53"/>
                <Card bg="#6f42c1" title="non-profit organisation" text="SBA provides grants to nonprofit, Resource Partners, and educational organizations that support entrepreneurship through counseling and training programs." price="$35 for $700.57" iconmain={<FaChartPie/>}/>
                {/* <CardHold>
                    <Card/>
                    <Card/>
                    <Card/>
                </CardHold>
                <CardHold>
                    <Card/>
                    <Card/>
                    <Card/>
                </CardHold>
                <CardHold>
                    <Card/>
                    <Card/>
                    <Card/>
                </CardHold> */}
                <Card bg="#6f42c1" text="Learn about SBA grants for community organizations and cooperative agreements that support small business growth and development." title="Grants for community organizations" iconmain={<FaChartPie/>} price="$45 for $600.32" />
            </Section>
            <br/>
        <br/>
        <Long>
          <FaPlus style={{color: "012C6D", width: 12, height: 12}}/>
          <H33 to='/form'>Apply for assistance</H33>
        </Long>
        <Long>
          <FaPlus style={{color: "012C6D", width: 12, height: 12}}/>
          <H33 to='/form'>Apply for Loan</H33>
        </Long>
        <Long>
          <FaPlus style={{color: "012C6D", width: 12, height: 12}}/>
          <H33 to='/form'>Apply For Grant</H33>
        </Long>
        <Long>
          <FaPlus style={{color: "012C6D", width: 12, height: 12}}/>
          <H33 to='/form'>Structured Equity</H33>
        </Long>
        </Wrapper>
    </Container>
  )
}

export default GrantPackages;




const Long = styled.div`
margin:10px 0;
width: 95%;
height: 80px;
padding: 20px 10px;
border: 1px solid #6EA0E2;
display: flex;
justify-content: flex-start;
align-items: center;
border-radius: 0.4rem;
cursor: pointer;
`;
const H33 = styled(Link)`
color:#012C6D;
font-size: 20px;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
width: auto;
height: auto;
text-decoration: none;
`;

const Container = styled.div`
width: 100%;
height: auto;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0;
`;
const Wrapper = styled.div`
width: 70%;
height: 95%;
/* background-color: green; */
padding: 50px 0;
display: flex;
flex-direction: column;

@media Screen and (max-width: 1280px){
    width: 80%;
}

@media Screen and (max-width: 768px){
    width: 90%;
}
`;
const Nav = styled(Link)`
text-decoration: none;
color: black;
cursor: pointer;
`;

const H1 = styled.div`
color: #012C6D;
font-size: 35px;
font-weight: bold;
margin: 45px 0 5px 0;

`;
const H4 = styled.div`
color: silver;
font-size: 20px;
margin: 0 0 30px 0;
`;
const P = styled.div`
margin: 0 0 30px 0;
font-size: 17px;
@media Screen and (max-width: 1280px){
    font-size: 15px;
}
`;
const Section = styled.section`
width: 100%;
height: auto;
/* background-color: red; */
margin: 10px 0;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;
