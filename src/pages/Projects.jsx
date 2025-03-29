import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Projects() {
  const { iconBorder, bgHoverColor } = useContext(ThemeContext);
  const Projects = [
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
      icon: <MdDesignProjects />,
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
    <section id="Projects" className="section">
      {/* SECTION HEADING */}
      <div className="section-heading">
        <h2 className="heading">My Projects</h2>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-5 lg:gap-10 "></div>
      <style jsx global>
        {``}
      </style>
    </section>
  );
}
export default Projects;
