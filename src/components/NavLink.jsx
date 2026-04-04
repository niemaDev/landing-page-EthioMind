import React, { useEffect, useState } from "react";
const NavLink = ({ href, children, onClick }) => {
  const [active, setActive] = useState(false);

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (href === "#home") {
        setActive(window.scrollY < 100);
        return;
      }

      const section = document.querySelector(href);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const offset = 120; // navbar height buffer

      if (rect.top <= offset && rect.bottom >= offset) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [href]);

  // Smooth scroll handler
  const handleClick = (e) => {
    e.preventDefault();

    // Close mobile menu if passed
    if (onClick) onClick();

    // Special case for Home
    if (href === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const yOffset = -80; // adjust based on navbar height
      const y =
        target.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`text-sm font-medium transition duration-300 ${
        active
          ? "text-blue-400"
          : "text-gray-400 hover:text-blue-400"
      }`}
    >
      {children}
    </a>
  );
};

export default NavLink;