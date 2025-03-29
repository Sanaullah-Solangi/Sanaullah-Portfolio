import aboutImage from "../assets/images/09.png";
import resume from "../assets/Sanaullah.pdf";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Progress } from "antd";
function About() {
  const { iconBorder, helper, gradient } = useContext(ThemeContext);
  const skills = [
    { skill: "html", proficiency: 90 },
    { skill: "css", proficiency: 90 },
    { skill: "bootstrape", proficiency: 80 },
    { skill: "tailwind", proficiency: 90 },
    { skill: "javascript", proficiency: 70 },
    { skill: "react-js", proficiency: 70 },
    { skill: "next-js", proficiency: 70 },
    { skill: "react-native", proficiency: 40 },
    { skill: "node-js", proficiency: 20 },
    { skill: "express-js", proficiency: 60 },
    { skill: "typescript", proficiency: 70 },
    { skill: "git", proficiency: 50 },
    { skill: "git-Hub", proficiency: 70 },
    { skill: "mongo-db", proficiency: 80 },
    { skill: "firebase", proficiency: 80 },
    { skill: "material-UI", proficiency: 40 },
    { skill: "ant-Design", proficiency: 60 },
    { skill: "redux-Tool-Kit", proficiency: 30 },
    { skill: "vercel", proficiency: 40 },
    { skill: "postman", proficiency: 80 },
  ];
  const twoColors = {
    "0%": "rgb(133, 144, 255)",
    "100%": "rgb(99, 189, 252)",
  };
  return (
    <section id="about" className="section">
      {/* SECTION HEADING */}
      <div className="section-heading">
        <h2 className="heading">about me</h2>
      </div>
      {/* ABOUT CONTENT */}
      <div className="about-content grid grid-cols-1 lg:grid-cols-2 w-full  gap-5 lg:gap-2">
        <div className="about-image flex flex-col justify-start items-center gap-6">
          <img
            src={aboutImage}
            alt="This is my about section image"
            title="Muhammad SanaUllah"
            loading="lazy"
          />
          <p className="text-[1.6rem]">
            Hello! I'm Sanaullah, a passionate MERN Stack Developer with 1 year
            of hands-on experience, gained through training at Saylani Mass IT
            Training (SMIT). I specialize in React.js, Next.js for frontend and
            Node.js, Express.js for backend, along with MongoDB for database
            management. Currently, I'm pursuing a BS in Software Engineering
            from Virtual University of Pakistan. My journey into web development
            has been fueled by a love for creating dynamic, scalable, and
            user-friendly applications. I've worked on several projects,
            including my portfolio website and an eCommerce website (HiStore),
            which is currently under development. My expertise also extends to
            state management (Redux Toolkit, Context API), API integrations, and
            Firebase. I’m always eager to explore new technologies and take on
            challenging projects. Let's build something amazing together! 🚀
          </p>
          <a
            href={resume}
            className="btn  font-[500] capitalize text-[1.8rem] inline-block rounded-[3px] cursor-pointer outline-0 border-0"
          >
            download CV
          </a>
        </div>
        {/* SKILL SET */}
        <div className="skill-set">
          {skills.map((skillObj) => (
            <div className={`${skillObj.skill} pregress-bar`}>
              <p className="font-[500] capitalize text-[1.8rem]">
                {skillObj.skill.split("-").join(" ")}
              </p>
              <Progress
                percent={skillObj.proficiency}
                strokeColor={twoColors}
              />
            </div>
          ))}
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
          .about-content > p {
            margin-bottom: 1rem;
          }
          .about-image img {
            filter: drop-shadow(0 0 1px ${iconBorder});
            -webkit-filter: drop-shadow(0 0 1px ${iconBorder});
          }

          .skill-set {
            margin-bottom: 3rem;
          }

          .ant-progress-text {
            left: 49% !important;
            bottom: -200% !important;
            color: white !important;
            font-size: 1.5rem !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            padding-inline: 0.5rem;
          }

          .ant-progress-text::before {
            border-width: 1.4rem !important;
            top: -2.7rem !important;
          }

          .html > .ant-progress > .ant-progress-outer > .ant-progress-text {
            left: ${skills[0].proficiency - 1}% !important;
          }
          .css > .ant-progress > .ant-progress-outer > .ant-progress-text {
            left: ${skills[1].proficiency - 1}% !important;
          }
          .bootstrape
            > .ant-progress
            > .ant-progress-outer
            > .ant-progress-text {
            left: ${skills[2].proficiency - 1}% !important;
          }
          .tailwind > .ant-progress > .ant-progress-outer > .ant-progress-text {
            left: ${skills[3].proficiency - 1}% !important;
          }
          .javascript
            > .ant-progress
            > .ant-progress-outer
            > .ant-progress-text {
            left: ${skills[4].proficiency - 1}% !important;
          }
          .react-js > .ant-progress > .ant-progress-outer > .ant-progress-text {
            left: ${skills[5].proficiency - 1}% !important;
          }
          .next-js > .ant-progress > .ant-progress-outer > .ant-progress-text {
            left: ${skills[6].proficiency - 1}% !important;
          }
          .react-native
            > .ant-progress
            > .ant-progress-outer
            > .ant-progress-text {
            left: ${skills[7].proficiency - 1}% !important;
          }
          .node-js > .ant-progress > .ant-progress-outer > .ant-progress-text {
            left: ${skills[8].proficiency - 1}% !important;
          }
          .express-js
            > .ant-progress
            > .ant-progress-outer
            > .ant-progress-text {
            left: ${skills[9].proficiency - 1}% !important;
          }
          .typescript
            > .ant-progress
            > .ant-progress-outer
            > .ant-progress-text {
            left: ${skills[10].proficiency - 1}% !important;
          }
          .git > .ant-progress > .ant-progress-outer > .ant-progress-text {
            left: ${skills[11].proficiency - 1}% !important;
          }
          .git-Hub > .ant-progress > .ant-progress-outer > .ant-progress-text {
            left: ${skills[12].proficiency - 1}% !important;
          }
          .mongo-db > .ant-progress > .ant-progress-outer > .ant-progress-text {
            left: ${skills[13].proficiency - 1}% !important;
          }
          .firebase > .ant-progress > .ant-progress-outer > .ant-progress-text {
            left: ${skills[14].proficiency - 1}% !important;
          }
          .material-UI
            > .ant-progress
            > .ant-progress-outer
            > .ant-progress-text {
            left: ${skills[15].proficiency - 1}% !important;
          }
          .ant-Design
            > .ant-progress
            > .ant-progress-outer
            > .ant-progress-text {
            left: ${skills[16].proficiency - 1}% !important;
          }
          .redux-Tool-Kit
            > .ant-progress
            > .ant-progress-outer
            > .ant-progress-text {
            left: ${skills[17].proficiency - 1}% !important;
          }
          .vercel > .ant-progress > .ant-progress-outer > .ant-progress-text {
            left: ${skills[18].proficiency - 1}% !important;
          }
          .postman > .ant-progress > .ant-progress-outer > .ant-progress-text {
            left: ${skills[19].proficiency - 1}% !important;
          }
          .progress-bar {
            border: 2px solid red;
            position: relative;
          }

          .progress-bar::before,
          .skill-set span:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 95%;
            height: 100%;
            background: ${gradient};
          }
          .skill-set .progress-bar-2::before {
            width: 90%;
          }
          .skill-set .progress-bar-3::before {
            width: 80%;
          }
          .skill-set .progress-bar-4::before {
            width: 85%;
          }

          .skill-set span {
            position: absolute;
            left: 95%;
            bottom: -480%;
            font-size: 1rem;
            font-weight: 600;
            width: 5rem;
            height: 2.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            align-items: center;
            translate: -50% -50%;
            color: #fff;
            background: ${gradient};
          }
          .skill-set .progress-bar-2 span {
            left: 90%;
          }
          .skill-set .progress-bar-3 span {
            left: 80%;
          }
          .skill-set .progress-bar-4 span {
            left: 85%;
          }
          .skill-set span:before {
            top: -2rem;
            left: 50%;
            translate: -50%;
            border: 1rem solid transparent;
            border-bottom-color: ${helper};
            width: 0;
            height: 0;
          }
        `}
      </style>
    </section>
  );
}
export default About;
