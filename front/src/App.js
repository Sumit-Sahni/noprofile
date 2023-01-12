import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Home from "./components/Home";
import Me from './components/Me';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/me" element={<Me/>} />
      <Route path="/books" element={<Books/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
