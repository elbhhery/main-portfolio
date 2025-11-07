// import "aos/dist/aos.css";
import Header from "./components/header";

import "./App.css";
import Home from "./components/Home";
import Links from "./components/Links";
import Portfolio from "./components/portfolio";
import Experience from "./components/experinces";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ToTop from "./components/toTop";

function App() {
  return (
    <>
      <ToTop />
      <Header />
      <Home />
      <Links />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
