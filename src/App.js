import "./App.css";
import Home from "./PortfolioContainer/Home/Home"
import About from "./PortfolioContainer/AboutMe/About";
import Navbar from "./PortfolioContainer/Navbar/Navbar";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
    </div>
  );
}

export default App;
