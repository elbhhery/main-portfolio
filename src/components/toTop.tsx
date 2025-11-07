import { useEffect, useState } from "react";
export default function ToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY >= 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`${visible === true ? "block" : "hidden"} fixed`}
      id="toTop"
    >
      <i className="fa-solid fa-up-long"></i>
    </button>
  );
}
