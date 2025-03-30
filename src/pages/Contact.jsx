import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaCode, FaUserCog } from "react-icons/fa";
import LinkedIn from "../assets/images/linkedIn.png";
import GitHub from "../assets/images/github1.png";
import Gmail from "../assets/images/gmail.png";
import WhatsApp from "../assets/images/WhatsApp.webp";
import Facebook from "../assets/images/facebook.png";
function Contact() {
  const { iconBorder, bgHoverColor } = useContext(ThemeContext);
  const contacts = [
    {
      title: "LinkedIn",
      icon: LinkedIn,
      link: "https://www.linkedin.com/in/sana-ullah-22b75b285/",
      alt: "this is my linkedIn profile link",
    },
    {
      title: "GitHub",
      icon: GitHub,
      link: "https://github.com/Sanaullah-Solangi",
      alt: "this is my GitHub profile link",
    },
    {
      title: "Gmail",
      icon: Gmail,
      link: "mailto:sanaullahsolangi817@gmail.com",
      alt: "this is my Gmail profile link",
    },
    {
      title: "WhatsApp",
      icon: WhatsApp,
      link: "https://wa.me/+92 3102004654",
      alt: "this is my WhatsApp Number",
    },
    {
      title: "Facebook",
      icon: Facebook,
      link: "https://web.facebook.com/muhammad.sanaullah.965747",
      alt: "this is my Facebook profile link",
    },
  ];
  const twoColors = {
    "0%": "rgb(133, 144, 255)",
    "100%": "rgb(99, 189, 252)",
  };
  return (
    <section id="contact" className="section">
      {/* SECTION HEADING */}
      <div className="section-heading">
        <h2 className="heading">Contact Me</h2>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-20 ">
        {contacts.map((contact) => (
          <a
            className="cursor-pointer w-[10rem] h-[10rem] capitalize text-center text-[2rem] font-bold text-black"
            target="_blank"
            href={contact.link}
            title={contact.title}
          >
            <figure className="felx justify-center items-center flex-col">
              <img width="100%" src={contact.icon} alt={contact.alt} />
              <figcaption>{contact.title}</figcaption>
            </figure>
          </a>
        ))}
      </div>
      <style jsx global>
        {``}
      </style>
    </section>
  );
}
export default Contact;
