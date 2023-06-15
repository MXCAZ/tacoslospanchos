import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PageRoutes from "./components/routes";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <PageRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
