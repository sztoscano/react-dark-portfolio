
import "./Bio.css";

import { Skills } from "../Tek/Tech-Stack";


export const Bio = () => {

  return (

    <section className="container container-lines">
      <div className="my-tek-stak">
        <h1 className="Tech-Stack">
          <span className="purple-smoke-text"> My Tech Stack</span>{" "}
        </h1>
      </div>



      <p className="purple-text">
        {/* 📚 Bio <span className="purple-smoke-text">-Asì empecè</span>{" "} */}
      </p>


      <div className="line"></div>


      <section id="skills" className="tek-Stack">
        <Skills />
      </section>

      {/* <div className="line"></div> */}

    </section>


  );
};
