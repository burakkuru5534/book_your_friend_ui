
import { useNavigate } from 'react-router-dom';

const AfterRegisterPage = () => {
    const navigate = useNavigate();
    const handleGoBackToHomePage = (e) => {
        navigate('/');
    }


  return ( 
   <div className="afterregisterpage">
      <h2>You registered Successfully. Check your email and activate your account from the link we just sent!</h2>
      <div>
      <button className='mb-4' size='lg' onSubmit = {handleGoBackToHomePage} onClick={handleGoBackToHomePage}>Go back to home page</button>

      </div>
   </div>
);
 
}
 
export default AfterRegisterPage;