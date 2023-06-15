import React from 'react';
import styled from 'styled-components';


const FormJs = () => {
  return (
    <Container>
        <Wrapper>
            <H1>Apply For Grant / Loan</H1>
        <Notice>
                <P style={{fontWeight:"bold"}}>*Important Notice</P>
                <PP>We reserve the right to make any changes to the existing affiliate program if necessary. In this case, the project participants will be notified in<br/> the news section or by mass mailing to the e-mails specified during application.</PP>
            </Notice>
            <Form onSubmit='submit'>
                <Top>
                    <InputHold>
                        <Title>Full Name*</Title>
                        <Select placeholder='First name & last name'/>
                    </InputHold>
                    <InputHold>
                        <Title>Email Address*</Title>
                        <Input type='email' placeholder='email address'/>
                    </InputHold>
                </Top>
                <Middle>
                    <InputHold>
                        <Title>Address</Title>
                        <Input placeholder='Input Your Street Address'/>
                    </InputHold>
                    <InputHold>
                        <Title>Street Adress Line 2</Title>
                        <Input placeholder='Input Your Street Address Line 2'/>
                    </InputHold>
                </Middle>
                <Middle>
                    <InputHold>
                        <Title>City</Title>
                        <Input placeholder='Input Your City'/>
                    </InputHold>
                    <InputHold>
                        <Title>State / Province</Title>
                        <Input placeholder='Input Your State / Province'/>
                    </InputHold>
                </Middle>
                <Middle>
                    <InputHold>
                        <Title>Postal / Zip Code</Title>
                        <Input placeholder='Input Your Postal / zip code'/>
                    </InputHold>
                    <InputHold>
                        <Title>Phone Number</Title>
                        <Input placeholder='Input Your Phone Number'/>
                    </InputHold>
                </Middle>
                <Middle>
                    <InputHold>
                        <Title>How did you hear about us?</Title>
                        <Input placeholder='Describe how you heard about us'/>
                    </InputHold>
                    <InputHold>
                        <Title>Will you be willing to recommend us?</Title>
                        <Input placeholder='Yes / No / Maybe'/>
                    </InputHold>
                </Middle>
                    <InputHold2>
                        <Title>Tell us your reason for applying for grant / loan</Title>
                        <Input2 placeholder='describe your application reasons'/>
                    </InputHold2>
                    <Button type='submit'>Submit</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default FormJs;

const Container = styled.div`
width: 100%;
height: auto;
background-color: #16243D;
display: flex;
justify-content: center;
align-items: center;
padding: 20px 0;
`;
const Wrapper = styled.div`
width: 80%;
height: 100%;
padding: 100px 0;
display: flex;
flex-direction: column;
/* align-items: center; */

@media Screen and (max-width:768px){
    text-align: center;
    margin-top: -80px;
}
@media Screen and (max-width:425px){
    text-align: center;
}
`;
const H1 = styled.div`
font-size: 35px;
font-weight: 500;
color:  lightgrey;
margin: 15px 0;

@media Screen and (max-width: 768px){
    font-size: 30px;
}
`;

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;

`;
const Notice = styled.div`
width: 96%;
border-radius: 0.7rem;
background-color: #101C30;
color: white;
padding: 40px 30px;
margin: 30px 0;


@media Screen and (max-width: 768px){
    width: 90%;
    margin-left: -15px;
}
`;
const P = styled.div`
font-size: 16px;
`;
const PP = styled.div`
`;
const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-direction: column;
}
`;
const InputHold = styled.div`
width: 40%;
display: flex;
flex-direction: column;
margin: 10px 0;
@media Screen and (max-width: 768px){
    width: 100%;
    align-items: flex-start;
}

`;
const InputHold2 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 10px 0;
@media Screen and (max-width: 768px){
    width: 100%;
    align-items: flex-start;
}

`;
const Title = styled.div`
font-size: 17px;
font-weight: 500;
color: lightgrey;
`;
const Select = styled.input`
padding: 15px 5px;
outline: none;
border-radius: 0.4rem;
border: 1px solid #3B314E;
color: grey;

@media Screen and (max-width: 768px){
    margin: 10px 0;
    width: 100%;
}
`;
const Input = styled.input`
padding: 15px 0 15px 10px;
border-radius: 0.4rem;
outline: none;
border: 1px solid #3B314E;
color: grey;

@media Screen and (max-width: 768px){
    margin: 10px 0;
    width: 100%;
}
`;
const Input2 = styled.input`
padding: 20px 0 300px 10px;
border-radius: 0.4rem;
outline: none;
border: 1px solid #3B314E;
color: grey;
width:  100%;
@media Screen and (max-width: 768px){
    margin: 10px 0;
    width: 100%;
}

`;
const Middle = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-direction: column;
}
`;
const Button = styled.button`
color: white;
font-weight: bold;
/* background-color: #FF4D4D; */
background-color: #015FC9;
border-radius: 5px;
cursor: pointer;
padding: 0.5rem 2rem;
text-align: center;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
border: none;
outline: none;
width: 200px;
height: 50px;
:hover{
    transition: all 400ms;
    cursor: pointer;
}

@media Screen and (max-width: 425px){
    margin: 10px 0;
    width: 100%;
}
`;

