import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaArrowUp } from "react-icons/fa";
function Footer() {
  const { iconBorder, bgHoverColor, textColor, bgColor, gradient } =
    useContext(ThemeContext);

  const twoColors = {
    "0%": "rgb(133, 144, 255)",
    "100%": "rgb(99, 189, 252)",
  };
  return (
    <>
      <footer id="footer" class="section flex items-center ">
        <p className="text-[1.6rem]">
          &copy; April 2025 by Muhhammad SanaUllah | All Rights Reserved
        </p>
        <div class="drop-up w-[4rem] h-[4rem] flex justify-center items-center fixed bottom-[2%] right-[3%]">
          <a href="#home">
            <FaArrowUp className="text-[1.8rem]" />
          </a>
        </div>
      </footer>
      <style jsx global>
        {`
          footer {
            padding: 2rem 10rem;
            color: ${bgColor};
            background: ${textColor};
          }
          .drop-up,
          .drop-up {
            background: ${gradient};
          }
          .drop-up {
            border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
            -webkit-border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
            -moz-border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
            -ms-border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
            -o-border-radius: 76% 24% 58% 42%/17% 76% 24% 83%;
            animation-duration: 2s;
            animation-name: border-animation;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }
        `}
      </style>
    </>
  );
}
export default Footer;
