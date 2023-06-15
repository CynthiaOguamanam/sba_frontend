import React from 'react'
import Card from './Card'
import {
    Container, Wrapper, Trade, H1, Img, CardHold
} from './Land9Style';
import arr from '../../Assets/arr.png'
import arr2 from '../../Assets/arr2.png'
import avatar from './ceo.jpg'
import avatar4 from './4.jpg'
import avatar2 from './cto.jpg'
import avatar3 from './coo.jpg'


const Land7 = () => {
  return (
    <Container>
        <Wrapper>
        <Trade>
        <Img src={arr} alt='arr left'/>
        <h4>TESTIMONIES</h4>
        <Img src={arr2} alt='arr right'/>
      </Trade>
        <H1>What people are saying <br/>
              about us</H1>
            <CardHold>
               <Card avatar={avatar} name="Kevin Martin" review="I applied for a grant for my business growth and within 2 days review was made on it. On the third day i got a grant. SBA is really doing great impact"/>
               <Card avatar={avatar2} review="This platform is amazing. I look forward to also impacting lives by being part of the donors soon." name="Aliu B."/>
            </CardHold>
            <CardHold>
               <Card avatar={avatar3} name="Thomas Green" review="I've been extremely satisfied with my returns and the transparency of the company's practices."/>
               <Card avatar={avatar4} review="I never thought I'd get a loan until i got a mail 4hrs after my loan application. Within 6 working days of doing what i was asked to do my loan wa sapproved and the next day i got my loan." name="Maria Rodriguez"/>
            </CardHold>
        </Wrapper>
    </Container>
  )
};

export default Land7;




