import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaCode, FaServer, FaUserCog } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";

function Services() {
  const { iconBorder, bgHoverColor } = useContext(ThemeContext);
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Build dynamic and interactive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), ensuring seamless frontend and backend integration for a complete user experience.",
      icon: <FaCode />,
    },
    {
      title: "RESTful API Development",
      description:
        " Design and implement secure, scalable RESTful APIs with Node.js and Express.js, allowing efficient data exchange between the frontend and backend while ensuring optimized performance.",
      icon: <SiMongodb />,
    },
    {
      title: "User Authentication & Security",
      description:
        "Integrate robust authentication systems using JWT and Firebase, securing user data and enhancing website security with features like login, registration, and role-based access control.",
      icon: <BsFillShieldLockFill />,
    },
    {
      title: "Website Deployment & Hosting",
      description:
        "Deploy MERN stack applications on cloud platforms like Vercel, Netlify, Render, or Heroku, ensuring smooth performance and accessibility across different devices and networks.",
      icon: <MdDesignServices />,
    },
    {
      title: "Admin Panel Development",
      description:
        "Develop custom admin dashboards using React.js and Node.js, allowing businesses to manage users, products, and analytics efficiently",
      icon: <FaUserCog />,
    },
  ];
  const twoColors = {
    "0%": "rgb(133, 144, 255)",
    "100%": "rgb(99, 189, 252)",
  };
  return (
    <section id="services" className="section">
      {/* SECTION HEADING */}
      <div className="section-heading">
        <h2 className="heading">My Services</h2>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-5 lg:gap-10 ">
        {services.map((serviceObj) => (
          <div
            className={`service-box flex-1/2 md:flex-1/3 lg:flex-1/4 h-[35rem]  flex justify-center items-center flex-col gap-6 rounded-[0.4rem] transition-all duration-[0.3s] ease-linear`}
            style={{ boxShadow: `0 0 10px rgba(0,0,0,0.2)` }}
          >
            <span className="icon w-[6.5rem] h-[6.5rem] flex justify-center items-center rounded-[50%]">
              {serviceObj.icon}
            </span>
            <p className="font-[500] capitalize text-[1.8rem] md:text-[2rem] text-center">
              {serviceObj.title.split("-").join(" ")}
            </p>
            <p className="text-center text-[1.6rem]">
              {serviceObj.description}
            </p>
          </div>
        ))}
      </div>
      <style jsx global>
        {`
          .service-box {
            padding: 5rem 2rem;
          }
          .service-box:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) !important;
          }
          .icon {
            border: 1px solid ${iconBorder};
            background-color: ${bgHoverColor};
            animation-name: border-animation;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
            -webkit-border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
            -moz-border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
            -ms-border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
            -o-border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
            animation-duration: 2s;
          }

          @keyframes border-animation {
            0%,
            100% {
              border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
              -webkit-border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
              -moz-border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
              -ms-border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
              -o-border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
            }
            50% {
              border-radius: 30%70%70%30%/30%30%70%70%;
              -webkit-border-radius: 30%70%70%30%/30%30%70%70%;
              -moz-border-radius: 30%70%70%30%/30%30%70%70%;
              -ms-border-radius: 30%70%70%30%/30%30%70%70%;
              -o-border-radius: 30%70%70%30%/30%30%70%70%;
              -webkit-border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
            }
          }
          .icon svg {
            font-size: 4rem;
          }
        `}
      </style>
    </section>
  );
}
export default Services;
