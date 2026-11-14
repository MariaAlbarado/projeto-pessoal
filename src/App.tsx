import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/habilidades" element={<Skills />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
