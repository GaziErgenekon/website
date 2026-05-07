import { Link, useLocation } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useState, useCallback } from "react";
import Dropdown from "../ui/Dropdown";
import { IoIosArrowUp } from "react-icons/io";
import Hamburger from "hamburger-react";
import Button from "../ui/Button";
import { useEffect } from "react";
import { cn } from "../../libs/utils";

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
    {
      text: "Faaliyetler",
      isDropdown: true,
      dropdownLinks: [
        {
          text: "IDEF'25",
          isLink: true,
          linkHref: "/idef",
        },
      ],
    },
    { text: "Ekibimiz", href: "/ekibimiz", isPageLink: true },
    { text: "İletişim", href: "#contact" },
    { text: "Bize Katıl", href: "/bize-katil", isLink: true },
  ];

  const handleScroll = useCallback(
    (scrollY) => {
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
    },
    [showNav]
  );

  useScrollPosition(handleScroll, pathname !== "/");

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
    {
      key: "activities",
      text: "Faaliyetler",
      isSubMenu: true,
      subMenuItems: [
        {
          key: "idef",
          text: "IDEF'25",
          href: "/idef",
        },
      ],
    },
    { key: "team", text: "Ekibimiz", href: "/ekibimiz", isPageLink: true },
    { key: "contact", text: "İletişim", href: "#contact" },
    { key: "bize-katil", text: "Bize Katıl", href: "/bize-katil", isLink: true },
  ];

  const handleToggleSubMenu = (key) => {
    setOpenSubMenu(openSubMenu === key ? null : key);
  };

  useEffect(() => {
    setOpen(false)
  }, [pathname])


  const isHomePage = pathname === "/";

  const headerClassname = cn(
    !isHomePage || showNav
      ? `${!isOpen && isHomePage && (animate ? "animate-nav-animate" : "animate-nav-exit")} fixed bg-background border-b border-foreground/20`
      : `${isOpen ? "max-md:fixed" : "absolute"} ${isOpen && "max-md:bg-background max-md:border-b max-md:border-foreground/20"}`,
    !isHomePage && " animate-nav-animate",
    isOpen && isHomePage ? "max-md:h-screen" : "max-md:h-auto",
    "top-0 left-0 w-full z-[999] transition-all",
  );

  return (
    <header className={headerClassname}>
      <div
        className={`container flex-between ${!isHomePage || (!showNav && "border-b border-foreground")
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

        {isHomePage ? (
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
                  ) : item.isLink ? (
                    <Link to={item.href} className="border border-danger/60 text-danger px-4 py-1.5 rounded-full hover:bg-danger/10 hover:shadow-[0_0_12px_rgba(220,38,38,0.3)] transition-all duration-300">{item.text}</Link>
                  ) : item.isPageLink ? (
                    <Link to={item.href}>{item.text}</Link>
                  ) : (
                    <a href={item.href}>{item.text}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <Button variant="radial" colorMode="primary" size="lg" className="rounded-full px-8">
            <Link to="/">
              Ana Sayfa
            </Link>
          </Button>
        )}
      </div>
      {isOpen && isHomePage && (
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
                ) : item.isLink ? (
                  <Link to={item.href} className="border border-danger/60 text-danger px-4 py-1.5 rounded-full hover:bg-danger/10 transition-all duration-300 inline-block">{item.text}</Link>
                ) : item.isPageLink ? (
                  <Link to={item.href}>{item.text}</Link>
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
