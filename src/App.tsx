import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const toggleMenu = () => {
    console.log(`Is Open: ${menuIsActive}`);
    setMenuIsActive(!menuIsActive);
  };

  return (
    <div className="container">
      <Header menuIsActive={menuIsActive} toggleMenu={toggleMenu} />
      {menuIsActive ? <></> : <main>Content</main>}
      <Footer />
    </div>
  );
};

export default App;
