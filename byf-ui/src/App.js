

import Register from './Register';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import UnLoggedInHome from './UnLoggedInHome';
import AfterRegisterPage from './AfterRegisterPage';
import ForgetPassword from './ForgetPassword';
import AfterForgetPasswordPage from './AfterForgetPassword';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UnLoggedInHome />}>
      </Route>
      <Route>
      <Route path="/register" element={<Register />} />
      </Route>
      <Route>
      <Route path="/login" element={<Login />} />
      </Route>
      <Route>
      <Route path="/home" element={<Home />} />
      </Route>
      <Route>
      <Route path="/registersuccess" element={<AfterRegisterPage />} />
      </Route>
      <Route>
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Route>
      <Route>
      <Route path="/forgetpasswordsuccess" element={<AfterForgetPasswordPage />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;