

import Register from './Register';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route>
      <Route path="/register" element={<Register />} />
      </Route>
      <Route>
      <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;