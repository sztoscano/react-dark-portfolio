import "./About.css";
import Headshot from "../../assets/me.png";
import { Skills } from "../Tek/Tech-Stack";


export const About = () => {

  return (

    <section id="about" className="container container-about">

      <div className="about-headshot">
        <img src={Headshot} alt="" />



        {/* Header Animation */}

        <div className="containerAnim">
          <p className="Intro">Hello 👋 I'm</p>

          <section className="Animation">

            {/* TEXT NO. 1 */}
            <div class="first">
              <div>Sophia Toscano</div>
            </div>


            {/* TEXT NO. 2 */}
            <div class="second">
              <div>Web Developer</div>
            </div>


            {/* TEXT NO. 3 */}
            <div class="third">
              <div>UI/UX Designer</div>
            </div>


          </section>
          {/* End of Animation Section */}
        </div>
      </div>

      {/* End of Header Animation */}





      {/* ABOUT ME */}

      <div className="about-me-card">

        <div className="about-card-style">

          <span className="purple-text">
            <h1 className="Title-about">  ABOUT ME{" "} </h1>
            {/* <span className="purple-smoke-text">- Introducciòn</span>{" "} */}
          </span>


          <p className="info-about-grey">

            My name is Sophia and I am a current resident at i.c.stars | *  <br />
            in Milwaukee, WI. <br />

            <br />
            i.c.stars | * is a rigorous 4-month program of 1000+ hours dedicated to building
            the necessary skills to step into the world of technology. <br />

            <br />
            <a className="about-see" href="https://www.icstars.org/">Learn more {"->"} </a>
            <br />

            <br />
            I enjoy traveling the world, playing soccer, and designing.
            <br />

            I am an aspiring UI/UX Designer!
            <br />
            {" "}

          </p>
        </div>
      </div>
      {/* End of About Me */}








    </section>
  );
};
