import { useContext } from "react";
import aboutImage from "../assets/images/09.png";
import { ThemeContext } from "../context/ThemeContext";
function About() {
  const { iconBorder, helper } = useContext(ThemeContext);
  return (
    <section id="about" className="section">
      {/* SECTION HEADING */}
      <div className="section-heading">
        <h2 className="heading">about me</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full  gap-5 lg:gap-0">
        {/* ABOUT IMAGE */}
        <div className="about-image flex justify-center">
          <img
            src={aboutImage}
            alt="This is my about section image"
            title="Muhammad SanaUllah"
            loading="lazy"
          />
        </div>
        {/* ABOUT CONTENT */}
        <div className="about-content text-center lg:text-left">
          <p>
            Hey! I'm Muhammad Sanaullah, a frontend web designer and developer
            with expertise in HTML, CSS, Bootstrap, and JavaScript. I specialize
            in creating captivating UI designs and building simple yet elegant
            websites like portfolios and landing pages. Currently, I'm also
            diving into learning the MERN stack. Let's collaborate and craft
            engaging digital experiences!
          </p>
          <div className="skill-set">
            {/* <!--* first skill  --> */}
            <div className="html">
              <p>HTML</p>
              <div className="progress-bar">
                <span>95%</span>
              </div>
            </div>

            {/* <!--* second skill  --> */}
            <div className="Css">
              <p>css</p>
              <div className="progress-bar progress-bar-2">
                <span>90%</span>
              </div>
            </div>

            {/* <!--* Third skill  --> */}
            <div className="js">
              <p>bootstrape</p>
              <div className="progress-bar progress-bar-3">
                <span>80%</span>
              </div>
            </div>

            {/* <!--* first skill  --> */}
            <div className="html">
              <p>Java Script</p>
              <div className="progress-bar progress-bar-4">
                <span>70%</span>
              </div>
            </div>
          </div>
          <a href="assets/cv/index.html" className="btn" download>
            download CV
          </a>
        </div>
      </div>
      <style jsx global>
        {`
          .heading:after {
            background-color: ${helper};
          }
          .heading:before {
            background-color: ${iconBorder};
          }
          .about-image img {
            filter: drop-shadow(0 0 1px ${iconBorder});
            -webkit-filter: drop-shadow(0 0 1px ${iconBorder});
          }
        `}
      </style>
    </section>
  );
}
export default About;
