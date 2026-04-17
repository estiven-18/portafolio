import "./App.css";
import Nav from "./Components/Layout/Nav";
import Hero from "./Components/Layout/Hero";
import About from "./Components/Layout/About";
import Skills from "./Components/Layout/Skills";
import Proyects from "./Components/Layout/Proyects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Proyects />
    </div>
  );
}

export default App;
