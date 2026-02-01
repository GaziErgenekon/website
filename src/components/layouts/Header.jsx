import { Link, useLocation } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useState } from "react";
import Dropdown from "../ui/Dropdown";
import { IoIosArrowUp } from "react-icons/io";
import Hamburger from "hamburger-react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const { pathname } = useLocation();

  const items = [
    {
      text: "Hakkımızda",
      href: "#about-us",
    },
    {
      text: "Projelerimiz",
      href: "#projects",
    },
    { text: "Başarılar", href: "#achievements" },
    { text: "Ekip", href: "#team" },
    { text: "İletişim", href: "#contact" },
  ];

  useScrollPosition((scrollY) => {
    if (scrollY > 700) {
      if (!showNav) {
        setAnimate(true);
        setShowNav(true);
      }
    } else {
      if (showNav) {
        setAnimate(false);
        const timeout = setTimeout(() => {
          setShowNav(false);
        }, 400);
        return () => clearTimeout(timeout);
      }
    }
  }, pathname !== "/");

  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenuItems = [
    {
      key: "about",
      text: "Hakkımızda",
      href: "#about-us",
    },
    {
      key: "projects",
      text: "Projeler",
      href: "#projects",
    },
    { key: "achievements", text: "Başarılar", href: "#achievements" },
    { key: "team", text: "Ekip", href: "#team" },
    { key: "contact", text: "İletişim", href: "#contact" },
  ];

  const handleToggleSubMenu = (key) => {
    setOpenSubMenu(openSubMenu === key ? null : key);
  };

  return (
    <header
      className={`${pathname !== "/" || showNav
        ? `${!isOpen && (animate ? "animate-nav-animate" : "animate-nav-exit")
        } fixed bg-background border-b border-foreground/20`
        : `${isOpen ? "max-md:fixed" : "absolute"} ${isOpen &&
        "max-md:bg-background max-md:border-b max-md:border-foreground/20"
        }`
        } ${pathname !== "/" && "!animate-none"
        } top-0 left-0 w-full z-[999] transition-all  ${isOpen ? "max-md:h-screen" : "max-md:h-auto"
        } `}
    >
      <div
        className={`container flex-between ${pathname !== "/" || (!showNav && "border-b border-foreground")
          } py-6`}
      >
        <div className="row-center gap-4 font-mono text-2xl font-semibold">
          <a href="https://gazisiber.org/" target="_blank">
            <img
              src="/logo-removebg-preview.png"
              alt="Gazi-Siber-Logo"
              className="h-12 xls:h-16 "
            />
          </a>
          <Link to="/">
            <img
              src="/Ergenekon.png"
              alt="Ergenekon-Logo"
              className="h-12 xls:h-16"
            />
          </Link>
        </div>

        <nav>
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <ul className="hidden md:flex items-center gap-6 font-semibold">
            {items.map((item, index) => (
              <li
                className={`after:content-[''] relative after:absolute after:left-1/2 after:-bottom-1 ${!item.isDropdown && " hover:after:w-full hover:after:left-0"
                  } after:h-[1.5px] after:transition-all after:duration-500 after:w-0 after:bg-foreground`}
                key={index}
              >
                {item.isDropdown ? (
                  <Dropdown
                    listClassname="!translate-y-1"
                    itemClassname="text-base "
                    isHoverTrigger
                    trigger={
                      <div className="row-center gap-3">
                        {item.text}
                        <IoIosArrowUp className="dropdown-rotate-arrow-icon" />
                      </div>
                    }
                    listItems={item.dropdownLinks}
                  />
                ) : (
                  <a href={item.href}>{item.text}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden border-t max-h-[calc(100vh-113px)] overflow-y-auto border-foreground/20 py-6">
          <ul className="col-start gap-4 font-semibold container mx-auto px-6">
            {toggleMenuItems.map((item) => (
              <li key={item.key} className="text-lg w-full">
                {item.isSubMenu ? (
                  <>
                    <div
                      onClick={() => handleToggleSubMenu(item.key)}
                      className="flex-between  "
                    >
                      <span>{item.text}</span>
                      <IoIosArrowUp
                        className={`transition-transform duration-300 ${openSubMenu === item.key ? "rotate-0" : "rotate-180"
                          }`}
                      />
                    </div>
                    <ul
                      className={`ml-4 mt-2 col-start gap-2 overflow-hidden transition-all duration-300 ${openSubMenu === item.key ? "max-h-96" : "max-h-0"
                        }`}
                    >
                      {item.subMenuItems?.map((sub) => (
                        <li key={sub.key}>
                          <Link
                            to={sub.href}
                            className="row-center gap-2  text-base py-1 text-foreground/80 hover:text-foreground"
                          >
                            {sub.icon}
                            {sub.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href={item.href}>{item.text}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
