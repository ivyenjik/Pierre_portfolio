import "./App.css";
import Home from "./portfolioContainer/Home/Home";
import AboutMe from "./portfolioContainer/AboutMe/AboutMe";
import Resume from "./portfolioContainer/Resume/Resume";
import Project from "./portfolioContainer/Projects/Project";
import ContactMe from "./portfolioContainer/ContactMe/ContactMe";
import ScrollToTop from "./portfolioContainer/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Home/>
      <AboutMe/>
      <Resume/>
      <Project/>
      <ContactMe/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
