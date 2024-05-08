import { useEffect } from "react";
import { useState } from "react";
import { Logo } from "./Logo";
import "./Header.css";
import { CollapseNav } from "./CollapseNav";
import debounce from "./utils/debounce";

/* function debounce(func, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
} */

export function Header() {
  const [scrolledDown, setScrolledDown] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    console.log("collapse");
  };

  // Subscribe to scroll event and set scrolledDown state
  useEffect(() => {
    // debounce to avoid multiple calls
    const handleScroll = debounce(
      () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos > prevScrollPos) {
          setScrolledDown(true);
        } else if (currentScrollPos < prevScrollPos) {
          setScrolledDown(false);
        }
        setPrevScrollPos(currentScrollPos);
      },
      250,
      { leading: true, trailing: false }
    );

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={scrolledDown ? "header hidden" : "header"}>
      <a className="header-logo" aria-label="Fender logo" href="#">
        <Logo />
      </a>
      <nav className={isCollapsed ? "header-nav collapsed" : "header-nav"}>
        <ul className="header-menu">
          <li className="menu-item">
            <a className="menu-link" href="#whats-new">
              What&apos;s New?
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#fender-feed">
              Fender Feed
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#accesories">
              Accesories
            </a>
          </li>
        </ul>
      </nav>
      <CollapseNav onCollapse={handleCollapse} isCollapsed={isCollapsed} />
    </header>
  );
}
