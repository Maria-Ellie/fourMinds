import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import i18n from './i18n'
import Home from './components/home'
import MyNavbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;

