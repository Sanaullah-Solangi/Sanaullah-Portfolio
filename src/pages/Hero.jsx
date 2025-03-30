import { useContext } from "react";
import hero from "../assets/images/06.png";
import { ThemeContext } from "../context/ThemeContext";
function Hero() {
  const { iconBorder, bgColor, gradient, helper } = useContext(ThemeContext);
  return (
    <main id="home">
      <div className="grid grid-cols-1 lg:grid-cols-2  w-full">
        {/* HOME CONTENT */}
        <div className="home-content text-center lg:text-left">
          <p className="greetings text-[1.6rem] capitalize ]">hello it's me</p>
          <h1 className={`font-[600] text-[5rem] my-[1rem]  capitalize `}>
            Muhammad Sanaullah
          </h1>
          <p className={`font-[600] text-[1.7rem] capitalize`}>
            MERN Stack Developer
          </p>
          <p className="tracking-wide text-[1.6rem]">
            A passionate <i>MERN Stack Developer</i> with 1 year of experience
            in building dynamic and scalable web applications. I love turning
            ideas into reality using <i>React, Node.js, Express, and MongoDB</i>
            . Let’s create something amazing together! 🚀
          </p>
          <a
            className={`btn font-[500] capitalize text-[1.8rem] inline-block rounded-[3px] cursor-pointer outline-0 border-0`}
            href="mailto:sanaullahsolangi817@gmail.com"
          >
            hire me
          </a>
        </div>
        {/* HOME IMAGE */}
        <div className="home-image flex justify-center items-center">
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
          #home {
            padding: 15rem 10rem;
          }
          .home-content,
          .home-image {
            margin-top: 4rem;
          }
          .greetings {
            font-family: jost, sans-serif;
          }

          h1 {
            background: rgb(133, 144, 255);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }

          .home-content > p:nth-of-type(3) {
            margin-block: 0.5rem;
          }

          .home-image img {
            filter: drop-shadow(0 0 1px ${iconBorder});
            -webkit-filter: drop-shadow(0 0 1px ${iconBorder});
          }

          .btn {
            color: ${bgColor};
            background: ${gradient};
          }
        `}
      </style>
    </main>
  );
}
export default Hero;
