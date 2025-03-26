import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [mainColor, setMainColor] = useState("#FF7200");
  const [bgColor, setBgColor] = useState("white");
  const [bgHoverColor, setBgHoverColor] = useState("#e5e7eb");
  const [bgHelperColor, setBgHelperColor] = useState("#E4E4E4");
  const [textColor, setTextColor] = useState("rgb(27,31,35)");
  const [secondaryTextColor, setsecondaryTextColor] = useState("#9ca3af");
  const [borderColor, setBorderColor] = useState("#d9d9d9");
  const [shadowColor, setShadowColor] = useState("#d9d9d9");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [gradient, setGradient] = useState(`linear-gradient(to right,
    rgb(133, 144, 255) 0%,
    rgb(99, 189, 252) 100%
  )`);
  const [iconBorder, setIconBorder] = useState("rgb(150, 125, 150)");
  const [progress, setProgress] = useState("rgb(210, 215, 150)");
  const [helper, setHelper] = useState("rgb(123, 144, 255)");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    theme === "light" ? setBgColor("white") : setBgColor("#000000");
    theme === "light" ? setTextColor("rgb(27,31,35)") : setTextColor("white");
    theme === "light" ? setBgHoverColor("#f0f0f0") : setBgHoverColor("#111111");
    theme === "light"
      ? setBgHelperColor("#E4E4E4")
      : setBgHelperColor("#222222");
    theme === "light" ? setBorderColor("#d9d9d9") : setBorderColor("#222222");
    theme === "light"
      ? setShadowColor("0 0px 15px #0000001A")
      : setShadowColor("0 0px 15px #FFFFFF1A");
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        setMainColor,
        mainColor,
        bgColor,
        bgHoverColor,
        bgHelperColor,
        textColor,
        secondaryTextColor,
        borderColor,
        gradient,
        iconBorder,
        progress,
        helper,
        shadowColor,
        sidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

export function useTheme() {
  return useContext(ThemeContext);
}
