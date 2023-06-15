import React from 'react'
import styled from "styled-components"
// import bg from "./about.png"
import bg from '../Assets/sbagroup.webp'
import { FaLeaf, FaPlus } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';
import Comp1 from "../Assets/comp1.jpeg"
import Comp2 from "../Assets/comp2.png"
import Comp3 from "../Assets/comp3.png"
import Comp4 from "../Assets/comp4.png"
import Comp5 from "../Assets/comp5.png"
import Comp6 from "../Assets/chime.png"

const About = () => {
  return (
    <Container>
      <Wrapper>
          <Div>
          </Div>
          <Marquee>
                <Img src={Comp1} alt="partner"/>
                <Img src={Comp2} alt="partner"/>
                <Img src={Comp3} alt="partner"/>
                <Img src={Comp4} alt="partner"/>
                <Img src={Comp5} alt="partner"/>
                <Img src={Comp6} alt="partner"/>
          </Marquee>
        <Down>
                              <Select>
                                <option value="">Select Language</option>
                                <option value="en|af">Afrikaans</option>
                                <option value="en|sq">Albanian</option>
                                <option value="en|ar">Arabic</option>
                                <option value="en|hy">Armenian</option>
                                <option value="en|az">Azerbaijani</option>
                                <option value="en|eu">Basque</option>
                                <option value="en|be">Belarusian</option>
                                <option value="en|bg">Bulgarian</option>
                                <option value="en|ca">Catalan</option>
                                <option value="en|zh-CN">Chinese (Simplified)</option>
                                <option value="en|zh-TW">Chinese (Traditional)</option>
                                <option value="en|hr">Croatian</option>
                                <option value="en|cs">Czech</option>
                                <option value="en|da">Danish</option>
                                <option value="en|nl">Dutch</option>
                                <option value="en|en">English</option>
                                <option value="en|et">Estonian</option>
                                <option value="en|tl">Filipino</option>
                                <option value="en|fi">Finnish</option>
                                <option value="en|fr">French</option>
                                <option value="en|gl">Galician</option>
                                <option value="en|ka">Georgian</option>
                                <option value="en|de">German</option>
                                <option value="en|el">Greek</option>
                                <option value="en|ht">Haitian Creole</option>
                                <option value="en|iw">Hebrew</option>
                                <option value="en|hi">Hindi</option>
                                <option value="en|hu">Hungarian</option>
                                <option value="en|is">Icelandic</option>
                                <option value="en|id">Indonesian</option>
                                <option value="en|ga">Irish</option>
                                <option value="en|it">Italian</option>
                                <option value="en|ja">Japanese</option>
                                <option value="en|ko">Korean</option>
                                <option value="en|lv">Latvian</option>
                                <option value="en|lt">Lithuanian</option>
                                <option value="en|mk">Macedonian</option>
                                <option value="en|ms">Malay</option>
                                <option value="en|mt">Maltese</option>
                                <option value="en|no">Norwegian</option>
                                <option value="en|fa">Persian</option>
                                <option value="en|pl">Polish</option>
                                <option value="en|pt">Portuguese</option>
                                <option value="en|ro">Romanian</option>
                                <option value="en|ru">Russian</option>
                                <option value="en|sr">Serbian</option>
                                <option value="en|sk">Slovak</option>
                                <option value="en|sl">Slovenian</option>
                                <option value="en|es">Spanish</option>
                                <option value="en|sw">Swahili</option>
                                <option value="en|sv">Swedish</option>
                                <option value="en|th">Thai</option>
                                <option value="en|tr">Turkish</option>
                                <option value="en|uk">Ukrainian</option>
                                <option value="en|ur">Urdu</option>
                                <option value="en|vi">Vietnamese</option>
                                <option value="en|cy">Welsh</option>
                                <option value="en|yi">Yiddish</option>
                            </Select>
        <Title>
          <FaLeaf style={{color: "#012C6D", width: 40, height: 40}}/>
          <H1>About SBA</H1>
        </Title>
        <H4>Since its founding, SBA has delivered millions of loans, loan guarantees, contracts, counseling sessions, and other forms of assistance to small businesses. <br/><br/> Mission <br/> <br/></H4>
        <P>The U.S. Small Business Administration (SBA) helps Americans start, grow, and build resilient businesses.
          SBA was created in 1953 as an independent agency of the federal government to aid, counsel, assist and protect the interests of small business concerns; preserve free competitive enterprise; and maintain and strengthen the overall economy of our nation. SBA reviews Congressional legislation and testifies on behalf of small businesses. It assesses the impact of regulatory burden on small businesses.
          <br/>
          <br/>
          <b>History and role of SBA</b>
          <br/>
          <br/>
          <b>Events leading up to the agency’s creation</b>
          <br/>
          <b>SBA’s creation was largely a response to the pressures of the Great Depression and World War II. Read through to get a sense of how the agency’s mission took shape.</b>
          <br/>
          <br/>
          <b>1932:</b> The Reconstruction Finance Corporation (RFC) is created by President Herbert Hoover to address the financial crisis of the Great Depression. The RFC is a federal lending program for all businesses, large and small, hurt by the Great Depression.
          <br/>
          <br/>
          <b>1942:</b> Congress creates the Smaller War Plants Corporation (SWPC). The SWPC loans money to entrepreneurs and encourages financial institutions to extend credit available to small enterprises. The agency also advocates on behalf of small business to federal agencies and big businesses.
          <br/>
          <br/>
          <b>1945:</b> WWII ends, and the SWPC is abolished. Its lending and contract powers are given over to the RFC. The U.S. Department of Commerce takes on some duties addressing small businesses. In the belief that a lack of information and expertise is the main cause of small business failure, the agency produces brochures and counsels individual entrepreneurs in management.
          <br/>
          <br/>
          <b>1950:</b> The Korean War leads Congress to create the Small Defense Plants Administration (SDPA). SPDA is very similar to the SWPC, except that RFC keeps ultimate lending authority. SDPA evaluates small businesses and certifies them to the RFC if they judge the business can execute government contracts.
          <br/>
          <br/>
          <b>1952:</b> Legislation marks an end to the RFC. All functions are transferred to the Department of the Treasury.
          <b/>
          <b/>
          <b>1953:</b> President Dwight Eisenhower signs the Small Business Act into law on July 30, creating a new agency, the U.S. Small Business Administration (SBA). SBA’s mission is to "aid, counsel, assist and protect, insofar as is possible, the interests of small business concerns." It also is charged with ensuring that small businesses earn a "fair proportion" of government contracts and sales of surplus property.
          <br/>
          <br/>
          Further expertise is accessible through our partner firm, Kryptbase Assets Strategic Communications, a premier Investor Relations and Corporate Communications firm with over 20 years of experience partnering with private and public companies across all industry sectors. Offerings include fully outsourced investor relations, environmental, social and governance (ESG) evaluations, perception surveys, C-suite visibility programs, content development, media relations, crisis preparation, digital and social media communications and media and presentation training.
        </P>
        <br/>
        <br/>
        <P>
        <h4>SBA’s early days</h4>
        <br/>
        <br/>
        By 1954, SBA is making and guaranteeing loans for small businesses. It loans money to victims of natural disasters and helps small businesses get government contracts. SBA also provides business owners with management and business training.
        <br/>
        <br/>
        A 1957 Federal Reserve study finds that small businesses can’t get the credit they need to keep pace with technological advancements. The Investment Company Act of 1958 establishes the Small Business Investment Company (SBIC) Program. Under SBIC, SBA licenses, regulates, and helps fund private venture capital investment firms. These firms provide long-term debt and equity investments to high-risk small businesses.
        <br/>
        <br/>
        In 1964, SBA begins to attack poverty through the Equal Opportunity Loan (EOL) Program. EOL relaxes the credit and collateral requirements for applicants living below the poverty level. This provides encouragement to new businesses that had been unable to attract financial backing but were sound commercial initiatives.
        </P>
        <P>
          <br/>
          <br/>
        <h4>SBA today and in the future</h4>
        Since the agency was founded, SBA has expanded the help it provides. SBA's programs now include help with management, as well as financial and federal contract procurement. SBA provides specialized outreach to women, minorities, and armed forces veterans. SBA loans are available to victims of natural disasters. The agency also offers specialized advice and support in international trade.
        <br/>
        <br/>
        SBA was created to preserve free competitive enterprise and to maintain and strengthen the nation’s economy. We remain committed to that goal. In our 2022-2026 strategic plan, SBA describes:
        </P>
        <br/>
        <b>.</b> How we will help ensure that our program delivery is equitable, customer-centric and supports small businesses and innovation
        <b/>
        <b/>
        <b>.</b> Strategies for building resilient businesses and a sustainable economy.
        <br/>
        <br/>
        <b>.</b> A plan for managing its technology and human resources for greater impact.
        <br/>
        <br/>
        With its commitment to these goals, SBA is working to create a more equitable and sustainable economy supported by America’s small businesses.
        </Down>
        <br/>
        <br/>
        <br/>
        <br/>
        <Long>
          <FaPlus style={{color: "012C6D", width: 12, height: 12}}/>
          <H3>IPO Advisory</H3>
        </Long>
        <Long>
          <FaPlus style={{color: "012C6D", width: 12, height: 12}}/>
          <H3>Marketed Follow-On Advisory</H3>
        </Long>
        <Long>
          <FaPlus style={{color: "012C6D", width: 12, height: 12}}/>
          <H3>Block Trades</H3>
        </Long>
        <Long>
          <FaPlus style={{color: "012C6D", width: 12, height: 12}}/>
          <H3>Structured Equity</H3>
        </Long>
      </Wrapper>
    </Container>
  )
};

export default About;

const Img = styled.img`
width: 150px;
height: 60px;
margin: 5px 10px;
`;

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
const H3 = styled.div`
color:#012C6D;
font-size: 20px;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
width: auto;
height: auto;
`;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;

`;
const Wrapper = styled.div`
width: 70%;
height: auto;
display: flex;
flex-direction: column;
margin-top: 90px;

@media Screen and (max-width: 1280px){
  width: 80%;
}
`;
const Div = styled.div`
width: 100%;
height: 450px;
/* background-color: green; */
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url(${bg});
border-radius: 5px 5px 0px 0px;
margin-top: 40px;
`;
const Down = styled.div`

`;
const Title=  styled.div`
margin: 100px 0 30px 0;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
`;
const H1 = styled.div`
color:#012C6D;
font-size: 30px;
font-weight: bold;
margin: 0 0 0 10px;

@media Screen and (max-width: 768px){
  font-size: 20px;
}
`;
const H4 = styled.div`
font-size: 14px;
color:#012C6D;
font-weight: bold;
margin:0 0 30px 0;

@media Screen and (max-width: 768px){
 font-size: 16px;
 font-weight: bold;
}
`;
const P = styled.div`
font-size: 18px;
/* color:black; */
color: #212529;
@media Screen and (max-width: 768px){
 font-size: 16px;
 font-weight: bold;
}
`;

const Select = styled.select`
padding: 10px;
margin-top: 70px;
font-size: 17px;
cursor: pointer;

`;