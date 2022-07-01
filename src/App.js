import "./App.css";
import Home from "./PortfolioContainer/Home/Home"
import About from "./PortfolioContainer/AboutMe/About";
import Navbar from "./PortfolioContainer/Navbar/Navbar";
import Resume from "./PortfolioContainer/Resume/Resume";
import Contact from "./PortfolioContainer/ContactMe/Contact";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Resume/>
        <Contact/>
    </div>
  );
}

export default App;
