
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

const ForgetPassword = () => {
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleForgetPassword = (e) => {
        e.preventDefault(); // to prevent refresh 
        axios.post('http://localhost:8080/v1/forget/password',{
            email:email,
        }).then((res) => {
          console.log(res);
          let token = res.data.AccessToken
            console.log(token);
                navigate('/forgetpasswordsuccess');
        })
    }


  return ( 
   <div className="afterregisterpage">
      <h2>Enter your email!</h2>
      <input placeholder='email' type='email'                 required
                value = { email }
                onChange = {(e) => setEmail(e.target.value)}></input>
      <div>
      <button className='mb-4' size='lg' onSubmit = {handleForgetPassword} onClick={handleForgetPassword}>Go back to home page</button>

      </div>
   </div>
);
 
}
 
export default ForgetPassword;