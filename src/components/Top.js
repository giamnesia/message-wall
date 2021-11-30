import { BsArrowUpSquareFill } from "react-icons/bs";
import { useState } from "react";
const Top = () => {
  const [visible, setVisible] = useState();
  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <BsArrowUpSquareFill
        onClick={top}
        style={{ display: visible ? "block" : "none" }}
        className="m-5 animate-bounce fixed bottom-0 right-0 text-3xl text-indigo-600 cursor-pointer transition ease-in-out "
      />
    </div>
  );
};

export default Top;
