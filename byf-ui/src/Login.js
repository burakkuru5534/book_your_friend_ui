import React from 'react';
import Cookies from 'universal-cookie';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const cookies = new Cookies();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false); 
    const navigate = useNavigate();



    const handleSubmit = (e) => {

        setIsPending(true);
        e.preventDefault(); // to prevent refresh 
        const login = { email, password } 

        fetch('http://localhost:8080/api/usr/login',{
            method: 'POST',
            headers: { "Content-Type": "application/json","Access-Control-Allow-Origin":"*" },
            body: JSON.stringify(login)
        }).then(res => res.json()).then(res => {
            let token = res.AccessToken
            console.log(token);
                setIsPending(false);
                navigate('/');
                localStorage.setItem("token", JSON.stringify(token));
               // history.go(-1); we can go back and forward with this function
        })
    }


  return (
    <MDBContainer className="login" fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Email' id='form2' type='email'                 required
                value = { email }
                onChange = {(e) => setEmail(e.target.value)}/>
              </div>
             
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password'                 required
                value = { password }
                onChange = {(e) => setPassword(e.target.value)}/>
              </div>
              <MDBBtn className='mb-4' size='lg' onSubmit={handleSubmit} onClick={handleSubmit}>Login</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;