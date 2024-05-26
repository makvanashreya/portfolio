import NavBar from "./coponents/NavBar";
import Home from "./coponents/Home";
import Social from "./coponents/Social";
import About from "./coponents/About";
import Experience from "./coponents/Experience";
import Contact from "./coponents/Contact";
// import Portfolio from "./coponents/Portfolio";

function App() {
  return (
    <div >
      <NavBar/>
     <Home />
     <About/>
     <Experience/>
     {/* <Portfolio/> */}
     <Contact/>
     <Social/>
    </div>
  );
}

export default App;
