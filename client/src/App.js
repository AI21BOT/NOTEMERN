import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNote from "./screens/MyNote/MyNote";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/mynote" element={<MyNote />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
