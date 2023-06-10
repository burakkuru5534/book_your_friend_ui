

import Register from './Register';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import UnLoggedInHome from './UnLoggedInHome';
import ForgetPassword from './ForgetPassword';
import PostCreate from './PostCreate';
import PostDetails from './PostDetail';
function App() {
  return (
    <BrowserRouter>
    <div className="content">
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
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Route>
      <Route>
      <Route path="/post/create" element={<PostCreate />} />
      </Route>
      <Route>
      <Route path="/usr/post/:id" element={<PostDetails />} />
      </Route>
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;