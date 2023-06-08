
import { useNavigate } from 'react-router-dom';

const AfterForgetPasswordPage = () => {
    const navigate = useNavigate();
    const handleGoBackToHomePage = (e) => {
        navigate('/');
    }


  return ( 
   <div className="afterforgetpassword">
      <h2>We've got your request. Check your email and set a new password from the link we just sent!</h2>
      <div>
      <button className='mb-4' size='lg' onSubmit = {handleGoBackToHomePage} onClick={handleGoBackToHomePage}>Go back to home page</button>

      </div>
   </div>
);
 
}
 
export default AfterForgetPasswordPage;