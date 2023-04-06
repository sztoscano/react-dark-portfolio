import "./App.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mode from "../../components/Mode/Mode";
import Header from "../../components/Header/Header";
import { About } from "../../components/About/About";
import { Bio } from "../../components/Bio/Bio";
import { Footer } from "../../components/Footer/Footer";
import Project from "../../components/Project/Project";
import { Skills } from "../../components/Tek/Tech-Stack";

function Home() {
  const [whiteMode, setQuietMode] = useState(false);

  const handleModeChange = () => {
    setQuietMode(!whiteMode);
  };

  return (
    <div className={whiteMode ? "white-mode" : "dark-mode"}>
      <Mode setMode={whiteMode} handleModeChange={handleModeChange} />
      {/* <Header /> */}

      <About />
      <Bio />
      {/* <Skills /> */}
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
