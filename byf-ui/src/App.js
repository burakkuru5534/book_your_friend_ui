

import Register from './Register';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route>
      <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;