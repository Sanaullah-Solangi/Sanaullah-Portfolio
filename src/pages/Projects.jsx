import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import hiStore from "../assets/images/hiStore.jfif";
import taskApp from "../assets/images/taskApp.png";
import portfolio from "../assets/images/prevPortfolio.png";
import appDesign from "../assets/images/appDesign.png";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
function Projects() {
  const { iconBorder, bgHoverColor, gradient } = useContext(ThemeContext);
  const Projects = [
    {
      title: "HiStore eCommerce Website",
      description:
        "A feature-rich e-commerce platform built with React for the frontend and Node.js for the backend. It includes product listings, user authentication, and a seamless shopping experience. Currently under development with plans to enhance functionality.",
      image: hiStore,
      hostedLink: "https://hi-store.vercel.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/HiStore",
    },
    {
      title: "Task Management App",
      description:
        "A task management app that allows users to add, update, and track tasks using drag-and-drop functionality. Tasks can be categorized into 'To-Do,' 'In Progress,' and 'Completed' lists, with priority levels (Low, Medium, High). Built with pure HTML, CSS, and JavaScript, using Firebase for backend storage.",
      image: taskApp,
      hostedLink: "https://manageitnow.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/taskManagementSystem",
    },
    {
      title: "App Design",
      description:
        "A simple and clean static website designed during the early stages of learning HTML and CSS. It focuses on layout structuring, styling, and responsiveness, without interactive functionality.",
      image: appDesign,
      hostedLink: "https://appdesignwebsite007.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/App-design-Web",
    },
    {
      title: "Previous Portfolio",
      description:
        "My first portfolio website, created after learning JavaScript. It includes basic interactivity, such as a toggle menu in the header, and serves as a record of my early web development progress.",
      image: portfolio,
      hostedLink: "https://myfirstportfolio007.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/My-First-Portfolio",
    },
  ];
  const twoColors = {
    "0%": "rgb(133, 144, 255)",
    "100%": "rgb(99, 189, 252)",
  };
  return (
    <section id="projects" className="section">
      {/* SECTION HEADING */}
      <div className="section-heading">
        <h2 className="heading">My Projects</h2>
      </div>
      {/* PROJECTS */}
      <div className="">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {Projects.map((project) => (
            <SwiperSlide>
              <div
                className={`slide-layer absolute left-0 bottom-[-100%] transition-all duration-150 ease-linear  w-full h-full flex justify-center items-center flex-col gap-2 `}
                style={{
                  background:
                    "linear-gradient(to bottom,rgba(0, 0, 0,0.7) 0.1%,rgb(99, 189, 252) )",
                }}
              >
                <h2 className="text-center text-white text-[2.3rem] ">
                  {project.title}
                </h2>
                <p className="text-justify text-white  text-[1.7rem] ">
                  {project.description}
                </p>
                <div className="project-links flex gap-5 text-[4rem] cursor-pointer text-white">
                  <a href={project.hostedLink} target="_blank">
                    <LuExternalLink />
                  </a>
                  <a href={project.gitHub} target="_blank">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <img src={project.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>
        {`
          .swiper-wrapper {
            bakcground: red !important;
            padding-bottom: 3rem !important;
          }

          .swiper-slide {
            width: 450px !important;
            height: 350px !important;
            overflow: hidden;
          }

          .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
          }

          .slide-layer {
            padding: 2rem 4rem;
          }

          .swiper-slide-active:hover > .slide-layer {
            bottom: 0% !important;
          }
          .slide-layer > p {
            text-align-last: center;
          }

          @media (width <= 670px) {
            .swiper-slide {
              width: 350px !important;
              height: 300px !important;
            }
            .slide-layer h2 {
              font-size: 1.5rem;
            }
            .slide-layer p {
              font-size: 1.3rem;
            }
            .slide-layer .project-links {
              font-size: 1.9rem;
            }
          }
          @media (width <= 530px) {
            .swiper-slide {
              width: 300px !important;
              height: 280px !important;
            }
            .slide-layer h2 {
              font-size: 1.5rem;
            }
            .slide-layer p,
            .slide-layer .project-links {
              font-size: 1.3rem;
            }
          }
          @media (width <= 380px) {
            .swiper-slide {
              width: 200px !important;
              height: 150px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
export default Projects;
