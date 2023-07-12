import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from "axios";



const  UnLoggedInHome = () => {

  const [justifyActive, setJustifyActive] = useState('tab1');;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [gsm, setGsm] = useState('');
  const [usrName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const current = new Date().toISOString().split("T")[0]


  const [isPending, setIsPending] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = (e) => {

    setIsPending(true);
    e.preventDefault(); // to prevent refresh 
    const login = { loginEmail, loginPassword } 

    axios.post('http://localhost:8080/v1/login',{
        email:loginEmail,
        password:loginPassword

    }).then((res) => {
      console.log(res);
      let token = res.data.AccessToken
      let userName = res.data.UserFullName
        console.log(token);
            setIsPending(false);
            navigate('/home');
            localStorage.setItem("token", token);
            localStorage.setItem("username",userName);
            console.log(localStorage.getItem("token"));
            console.log(localStorage.getItem("username"));

    })
}

  const handleRegister = (e) => {

      setIsPending(true);
      e.preventDefault(); // to prevent refresh 
      const register = {firstName, lastName, email, gsm, usrName, password, dateOfBirth} 


      fetch('http://localhost:8080/v1/register',{
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(register)
      }).then(() => {
              setIsPending(false);
              alert("Successfully registered! Check your email.")
              window.location.reload(true);
             // navigate('/registersuccess');
              // history.go(-1); we can go back and forward with this function
      })
  }
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

        
          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'  value = { loginEmail }
                onChange = {(e) => setLoginEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value = { loginPassword }
                onChange = {(e) => setLoginPassword(e.target.value)}/>

          <div className="d-flex justify-content-between mx-4 mb-4">
          </div>

          <MDBBtn className="mb-4 w-100" onSubmit={handleLogin} onClick={handleLogin}>Sign in</MDBBtn>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>
          <MDBInput wrapperClass='mb-4' label='First Name' id='form1' type='text'  required
                value = { firstName }
                onChange = {(e) => setFirstName(e.target.value)}/>
                          <MDBInput wrapperClass='mb-4' label='Last Name' id='form1' type='text'  required
                value = { lastName }
                onChange = {(e) => setLastName(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'   required
                value = { email }
                onChange = {(e) => setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Gsm' id='form1' type='text'   required
                value = { gsm }
                onChange = {(e) => setGsm(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='User Name' id='form1' type='text'
               required
               value = { usrName }
               onChange = {(e) => setUserName(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'          required
                value = { password }
                onChange = {(e) => setPassword(e.target.value)}/>
                <MDBInput type='date'
      placeholder='Enter BirthDate'
      value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}
      name='birthdate'
      max={current}
    />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" onSubmit={handleRegister} onClick={handleRegister}>Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default UnLoggedInHome;