import { useContext, useState } from "react";
import logo from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { ThemeContext } from "../../context/ThemeContext";
function Header() {
  const [navbarVisibility, setNavbarVisibility] = useState(false);
  const { bgColor, borderColor, bgHoverColor, shadowColor } =
    useContext(ThemeContext);
  class NavigationItem {
    constructor(text, href) {
      this.text = text;
      this.href = href;
    }

    // Prototype method (Sabko ek hi method milega)
    handleClick(setNavbarVisibility, navbarVisibility) {
      setNavbarVisibility(!navbarVisibility);
    }
  }

  // Array of navigation items
  const navigations = [
    new NavigationItem("Home", "#home"),
    new NavigationItem("About", "#About"),
    new NavigationItem("Services", "#Services"),
    new NavigationItem("Projects", "#Projects"),
    new NavigationItem("Contact", "#Contact"),
  ];

  return (
    <div className="header-container max-w-[1470px] fixed top-0 left-[50%] translate-x-[-50%] w-full h-[4.5rem] z-20">
      <header
        className={`header-section flex justify-between items-center py-0 px-[5rem] h-full`}
      >
        {/* LOGO SECTION */}
        <div className="logo h-full flex items-center" id="logo">
          <a href="#home">
            <img
              className="w-[3rem] h-[3rem]"
              src={logo}
              alt="This is my website logo"
            />
          </a>
        </div>
        {/* RESPONSIVE ICONS */}
        <div
          onClick={() => setNavbarVisibility(!navbarVisibility)}
          className={`responsive-icons hidden border-2 border-[${borderColor}] cursor-pointer px-1 transition-all duration-75 ease-in-out`}
        >
          {navbarVisibility ? (
            <IoClose className="menu-icon" id="menuBar " />
          ) : (
            <GiHamburgerMenu className="menu-icon" id="closeIcon" />
          )}
        </div>
        {/* NAVBAR */}
        <nav
          className={`navbar 
             w-auto h-full flex justify-center items-center transition-all duration-[.2s] ease-linear 
           `}
        >
          {navigations.map((nav) => (
            <a
              key={nav.text}
              onClick={() =>
                nav.handleClick(setNavbarVisibility, navbarVisibility)
              }
              className={`capitalize h-full w-full  sm:w-full flex justify-center items-center py-0 text-[1.4rem] sm:text-[1rem] md:text-[1.2rem] font-bold md:px-[1rem]`}
              href={nav.href}
            >
              {nav.text}
            </a>
          ))}
        </nav>
      </header>
      <style jsx global>
        {`
          .header-section {
            background: ${bgColor};
            box-shadow: ${shadowColor};
            padding-inline: 5rem;
          }
          .menu-icon {
            font-size: 1.8rem;
          }

          .navbar {
            background: ${bgColor};
          }
          .navbar > a {
            padding-inline: 1rem;
          }

          .navbar > a:hover {
            background: ${bgHoverColor};
          }

          @media (width <= 790px) {
            .header-section {
              padding: 0 1.5rem !important;
            }
            .responsive-icons {
              display: block;
            }
            .navbar {
              position: fixed;
              width: 100%;
              height: 80vh;
              top: ${navbarVisibility ? "4rem" : "-900%"};
              left: 0;
              flex-direction: column;
              z-index: -1;
            }
            .navbar > a {
              font-size: 1.2rem !important;
              padding-inline: 0.7rem !important;
              font-family: jost, sans-serif;
            }
          }
          @media (width <= 350px) {
            .menu-icon {
              font-size: 1.4rem;
            }
          }
        `}
      </style>
    </div>
  );
}
export default Header;
