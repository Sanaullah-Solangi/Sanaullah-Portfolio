import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import hiStore from "../assets/images/hiStore.jfif";
import taskApp from "../assets/images/taskApp.png";
import portfolio from "../assets/images/prevPortfolio.png";
import appDesign from "../assets/images/appDesign.png";
import corporate from "../assets/images/corporate.jfif";
import travel from "../assets/images/travel.jfif";
import ageCalculater from "../assets/images/agecalculater.jfif";
import todoApp from "../assets/images/todoapp.jfif";
import chirismis from "../assets/images/chirismis.jfif";
import weather from "../assets/images/weather.jfif";
import country from "../assets/images/country.jfif";
import house from "../assets/images/house.jfif";
import calculator from "../assets/images/calculator.jfif";
import password from "../assets/images/password.jfif";
import nasa from "../assets/images/nasa.jfif";
import realstate from "../assets/images/realstate.jfif";
import gassylinder from "../assets/images/gassylinder.jfif";
import saylaniform from "../assets/images/saylaniform.jfif";
import saltnpapper from "../assets/images/saltnpapper.jfif";
import pockemon from "../assets/images/pockemon.jfif";
import tereweb from "../assets/images/tereweb.jfif";
import ajenglishtv from "../assets/images/ajenglishtv.jfif";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
function Projects() {
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
      title: "Age Calculator",
      description:
        "An advanced Age Calculator built with JavaScript, utilizing the Date and getTime methods to calculate a user's exact age in years, months, weeks, days, hours, minutes, and seconds. This project enhanced my understanding of date manipulation and time calculations in JavaScript.",
      image: ageCalculater,
      hostedLink: "https://myagecalculatorproject.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/age-calculator",
    },
    {
      title: "Todo App (with Firebase)",
      description:
        "A feature-rich To-Do app with Firebase integration for authentication and database storage. Users can add, edit, and delete tasks, track progress with status updates, and categorize tasks into 'To-Do,' 'In Progress,' and 'Completed' lists. Secure user authentication ensures personalized task management, making it an efficient productivity tool.",
      image: todoApp,
      hostedLink: "https://smittodoapp.netlify.app/main.html",
      gitHub: "https://github.com/Sanaullah-Solangi/todo-app",
    },
    {
      title: "Calculator",
      description:
        "A sleek and visually appealing calculator built with HTML, CSS, and JavaScript. This project offers a smooth user experience with essential arithmetic operations, a responsive design, and interactive buttons. A great demonstration of JavaScript’s event handling and dynamic updates.",
      image: calculator,
      hostedLink: "https://mycalculatorassignment.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/calculator",
    },
    {
      title: "Password Generator",
      description:
        "A secure and stylish password generator built with HTML, CSS, and JavaScript. It allows users to generate strong passwords with customizable options like length, uppercase/lowercase letters, numbers, and special characters. Features interactive UI and real-time updates for a smooth experience.",
      image: password,
      hostedLink: "https://passwordgenerator124.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/password-generator",
    },
    {
      title: "Weather App",
      description:
        "A visually appealing weather app built with React, leveraging APIs to fetch real-time weather data. It provides users with detailed weather conditions, including temperature, humidity, and more, in a sleek and user-friendly interface. Designed for both functionality and aesthetics, making weather tracking effortless.",
      image: weather,
      hostedLink: "https://weatherapp567.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/weatherApp",
    },
    {
      title: "NASA Clone",
      description:
        "A visually appealing NASA website clone built using HTML, CSS, and minimal JavaScript. It features a structured layout, smooth look, and a responsive design for an authentic look.",
      image: nasa,
      hostedLink: "https://nasaclone007.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/NASA-Clone",
    },
    {
      title: "Real State",
      description:
        "A sleek and modern real estate landing page built with HTML, CSS, and minimal JavaScript. It features a responsive design, smooth animations, and a well-structured layout for an elegant look.",
      image: realstate,
      hostedLink: "https://replicarealstate.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/Real-State-Landing-page",
    },
    {
      title: "Gas Cylinder Service",
      description:
        "An interactive website designed for a gas cylinder delivery service. This project is developed using HTML, CSS, and JavaScript, featuring a user-friendly interface and a responsive layout.",
      image: gassylinder,
      hostedLink: "https://gassylinderservice.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/Gas-Cylinder-Service",
    },
    {
      title: "Saylani Forms",
      description:
        "A web-based form submission system developed during the Saylani Mass IT Training Program. This project utilizes HTML, CSS, and JavaScript, ant design,supporting form validation and interactive elements.",
      image: saylaniform,
      hostedLink: "https://saylaniformreplica.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/saylani-forms-replica",
    },
    {
      title: "Salt'n Papper Clone",
      description:
        "A restaurant landing page inspired by Salt’n Pepper. This project is built using HTML, CSS, and JavaScript, featuring a menu display and a responsive design.",
      image: saltnpapper,
      hostedLink: "https://replicasaltnpapper.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/Salt-n-paper",
    },
    {
      title: "Pokémon",
      description:
        "An beatiful and good looking website based on the Pokémon theme. This project is developed using HTML, CSS, and JavaScript, featuring stunning elements and an engaging UI.",
      image: pockemon,
      hostedLink: "https://replicapokemon.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/pockemon",
    },
    {
      title: "Tere Web",
      description:
        "A modern and stylish web page designed using front-end technologies like HTML, CSS, and JavaScript. This project features a responsive and visually appealing design.",
      image: tereweb,
      hostedLink: "https://replicatereweb.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/Ride-Sharing",
    },
    {
      title: "App Design",
      description:
        "A simple and clean static website designed during the early stages of learning HTML and CSS. It focuses on layout structuring, styling, and responsiveness, without interactive functionality.",
      image: appDesign,
      hostedLink: "https://appdesignwebsite.netlify.app/",
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
    {
      title: "Corporate Chronicle",
      description:
        "A simple news website built with HTML, CSS, and JavaScript, featuring smooth animations for an engaging user experience. The site presents news articles in an organized layout with a responsive design, ensuring accessibility across devices.",
      image: corporate,
      hostedLink: "https://corporatechronicle.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/CorporateChronicle",
    },
    {
      title: "Travel Website",
      description:
        "A travel website built with HTML, CSS, and JavaScript during my initial remote internship. It features a visually appealing layout, smooth animations, and a responsive design to showcase destinations, travel packages, and essential travel information.",
      image: travel,
      hostedLink: "https://travelwebsite00.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/Travel-Website",
    },
    {
      title: "House Website",
      description:
        "A real estate website built with HTML, CSS, and JavaScript during a remote internship at TechnoHacks. This project showcases various properties with a visually appealing layout, incorporating basic interactivity to enhance user experience. A great exercise in structuring and styling web pages effectively.",
      image: house,
      hostedLink: "https://housewebsite007.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/House-Website",
    },
    {
      title: "Chirismis Gift",
      description:
        "A simple yet well-structured website built with HTML, CSS, and basic JavaScript during a remote internship at TechnoHacks. It showcases fundamental web development skills with a clean layout and minimal interactivity, serving as an early step in my learning journey.",
      image: chirismis,
      hostedLink: "https://chirismisgift.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/chirismisGift",
    },
    {
      title: "Aj English Tv",
      description:
        "A sleek and modern real estate landing page built with HTML, CSS, and minimal JavaScript. It features a responsive design, smooth animations, and a well-structured layout for an elegant look.",
      image: ajenglishtv,
      hostedLink: "https://replicatereweb.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/Aaj-english-TV",
    },
    {
      title: "Country Pedia",
      description:
        "A beginner-friendly project built with HTML, CSS, and JavaScript, focusing on object manipulation and nested data structures. Users can select a country from a list, dynamically update the provinces dropdown based on the selected country, and display the chosen province. A great learning experience in handling nested objects and arrays in JavaScript.",
      image: country,
      hostedLink: "https://mycountrypedia.netlify.app/",
      gitHub: "https://github.com/Sanaullah-Solangi/CountryPedia",
    },
  ];

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
                className={`slide-layer opacity-0 absolute left-0 bottom-[-120%] transition-all duration-150 ease-linear  w-full h-full flex justify-center items-center flex-col gap-2 `}
                style={{
                  background:
                    "linear-gradient(to bottom,rgba(0, 0, 0,0.7) 0.1%,rgb(99, 189, 252) )",
                }}
              >
                <h2 className="text-center w-full left-[50%] translate-x-[0%] top-[-10%] text-white text-[2.3rem] ">
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
            padding-bottom: 3rem !important;
          }

          .swiper-slide {
            width: 450px !important;
            height: 350px !important;
            overflow: hidden;
          }
          .swiper-slide-active {
            overflow: visible;
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
            opacity: 1;
            bottom: 0% !important;
          }
          .slide-layer > p {
            text-align-last: center;
          }

          @media (width <= 670px) {
            .swiper-slide {
              width: 300px !important;
              height: 280px !important;
            }
            .slide-layer {
              padding: 0rem 1rem;
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
            .swiper-wrapper {
              padding-bottom: 5rem !important;
            }
            .swiper-slide {
              width: 250px !important;
              height: 215px !important;
            }
            .slide-layer {
              justify-content: center;
              padding: 0rem 1rem;
              gap: 0.1rem;
              bottom: -150% !important;
            }

            .slide-layer h2 {
              font-size: 1.5rem;
            }
            .slide-layer p {
              font-size: 1.3rem;
            }
            .slide-layer .project-links {
              font-size: 2.5rem;
            }
          }
        `}
      </style>
    </section>
  );
}
export default Projects;
