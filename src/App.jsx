import "./App.css";
import Nav from "./Components/Layout/Nav";
import Hero from "./Components/Layout/Hero";
import About from "./Components/Layout/About";
import Skills from "./Components/Layout/Skills";
import Proyects from "./Components/Layout/Proyects";

function App() {
  return (
    <div className="App">
      <div id="PantallaPrincipal">
        <Nav />
        <Hero />
      </div>
      <hr className="mx-100" />
      <div id="PantallaAbout" className="">
        <About />
      </div>
      <hr className="mx-100" />
      <div id="PantallaSkills">
        <Skills />
      </div>
      <hr className="mx-100" />
      <div id="PantallaProyects">
        <Proyects />
      </div>

      
    </div>
  );
}

export default App;
