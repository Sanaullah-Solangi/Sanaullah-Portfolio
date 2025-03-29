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
    new NavigationItem("About", "#about"),
    new NavigationItem("Services", "#services"),
    new NavigationItem("Projects", "#projects"),
    new NavigationItem("Contact", "#contact"),
  ];

  return (
    <div className="header-container fixed top-0 left-[50%] translate-x-[-50%] w-full h-[7rem] z-20">
      <header
        className={`header-section flex justify-between items-center py-0 h-full`}
      >
        {/* LOGO SECTION */}
        <div className="logo h-full flex items-center" id="logo">
          <a href="#home">
            <img
              className="w-[5rem] h-[5rem]"
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
              className={`capitalize h-full w-full  sm:w-full flex justify-center items-center py-0 text-[1.4rem] sm:text-[1rem] md:text-[2rem] font-[500] md:px-[2rem]`}
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
          }
          .menu-icon {
            font-size: 1.8rem;
          }

          .navbar {
            background: ${bgColor};
          }
          .navbar > a {
            padding-inline: 2rem;
            letter-spacing: 0px;
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
              height: 90vh;
              top: ${navbarVisibility ? "7rem" : "-900%"};
              left: 0;
              flex-direction: column;
              z-index: -1;
            }
            .navbar > a {
              font-size: 2rem !important;
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
