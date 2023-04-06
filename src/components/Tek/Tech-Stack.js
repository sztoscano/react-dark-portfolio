import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Tech-Stack.css";

import Icon1 from "../../assets/React.png";
import Icon2 from "../../assets/Html5.png";
import Icon3 from "../../assets/CSS.png";
import Icon4 from "../../assets/javascript.svg";
import Icon5 from "../../assets/Ionic2.webp";
import Icon6 from "../../assets/Adobeillustrator.png";
import Icon7 from "../../assets/AdobePhotoshop.png";
import Icon8 from "../../assets/AdobeXD.png";




export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (

        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skills-box wow zoomIn">

                            {/* <h2>Languages and Skills</h2> */}


                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                                <div className="item">
                                    <img className="html" src={Icon2} alt="React" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img className="css" src={Icon3} alt="HTML" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img className="js" src={Icon4} alt="CSS" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item5">
                                    <img className="react" src={Icon1} alt="JavaScript" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img className="ionic" src={Icon5} alt="Ionic" />
                                    <h5>Ionic</h5>
                                </div>
                                <div className="item">
                                    <img className="ai" src={Icon6} alt="Illustrator" />
                                    <h5>Adobe Illustrator</h5>
                                </div>
                                <div className="item">
                                    <img className="ap" src={Icon7} alt="Photoshop" />
                                    <h5>Adobe Photoshop</h5>
                                </div>
                                <div className="item">
                                    <img className="xd" src={Icon8} alt="Adobe XD" />
                                    <h5>Adobe XD</h5>
                                </div>

                            </Carousel>


                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    )
}
