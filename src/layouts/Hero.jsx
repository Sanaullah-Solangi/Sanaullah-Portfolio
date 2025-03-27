import { useContext } from "react";
import hero from "../assets/images/06.png";
import { ThemeContext } from "../context/ThemeContext";
function Hero() {
  const { iconBorder, bgColor, gradient, helper } = useContext(ThemeContext);
  return (
    <main id="home" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2  w-full">
        {/* HOME CONTENT */}
        <div className="home-content text-center lg:text-left">
          <p className="greetings text-[1rem] capitalize ]">hello it's me</p>
          <h1 className="font-[600] text-5xl  capitalize">
            Muhammad Sanaullah
          </h1>
          <p className="font-[600] text-[1.2rem] capitalize teck">
            MERN Stack Developer
          </p>
          <p className="tracking-wide">
            A passionate <strong>MERN Stack Developer</strong> with 1 year of
            experience in building dynamic and scalable web applications. I love
            turning ideas into reality using{" "}
            <strong>React, Node.js, Express, and MongoDB</strong>. Let’s create
            something amazing together! 🚀
          </p>
          <a
            className={`hero-btn capitalize text-[1.2rem] inline-block rounded-[3pm] cursor-pointer outline-0 border-0`}
            href="mailto:sanaullahsolangi817@gmail.com"
          >
            hire me
          </a>
        </div>
        {/* HOME IMAGE */}
        <div className="home-image flex justify-center">
          <img
            src={hero}
            alt="This is my portfolio's home page image"
            title="Muhammad Sanaullah"
            loading="lazy"
          />
        </div>
      </div>
      <style jsx global>
        {`
          .home-content,
          .home-image {
            margin-top: 4rem;
          }
          .greetings {
            font-family: jost, sans-serif;
          }

          h1 {
            margin-top: 1.2rem;
            margin-bottom: 1.5rem;
          }

          .home-content > p:nth-of-type(3) {
            margin-block: 0.5rem;
          }

          .hero-btn {
            margin-top: 0.5rem;
            padding-block: 0.7rem;
            padding-inline: 1.5rem;
          }

          .home-image img {
            filter: drop-shadow(0 0 1px ${iconBorder});
            -webkit-filter: drop-shadow(0 0 1px ${iconBorder});
          }
          .home-image img {
            width: 25rem;
            height: 25rem;
          }

          .hero-btn {
            color: ${bgColor};
            background: ${gradient};
          }

          @media (width <= 500px) {
            .home-image img {
              width: 30rem;
              height: 30rem;
              height: auto;
            }
          }

          @media (width <=360px) {
            .home-image img {
              width: 100%;
            }
          }
        `}
      </style>
    </main>
  );
}
export default Hero;
