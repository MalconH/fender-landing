import { useState } from "react";
import "./Top.css";
import { useEffect } from "react";
import debounce from "./utils/debounce";

export function Top() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = debounce(
      () => {
        setScrollPosition(window.scrollY);
      },
      250,
      { leading: true, trailing: false }
    );

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // if user scroll less than 400px hide the component
  const visibility = scrollPosition <= 500 ? "hidden" : "";
  return (
    <a className={`top ${visibility}`} href="#" aria-label="Back to top">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="top-icon"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M11.375 6.22l-5 4a1 1 0 0 0 -.375 .78v6l.006 .112a1 1 0 0 0 1.619 .669l4.375 -3.501l4.375 3.5a1 1 0 0 0 1.625 -.78v-6a1 1 0 0 0 -.375 -.78l-5 -4a1 1 0 0 0 -1.25 0z"
          strokeWidth="0"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
