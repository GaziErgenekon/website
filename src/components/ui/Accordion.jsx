import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ trigger, content, id }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    const handleClose = (e) => {
      if (e.detail !== id) setOpen(false);
    };
    window.addEventListener("accordion-close", handleClose);
    return () => window.removeEventListener("accordion-close", handleClose);
  }, [id]);

  useEffect(() => {
    setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [open]);

  const handleToggle = () => {
    setOpen(!open);
    if (!open) {
      window.dispatchEvent(new CustomEvent("accordion-close", { detail: id }));
    }
  };

  return (
    <div className="border-b border-foreground/20">
      <div
        onClick={handleToggle}
        className="flex-between gap-3 cursor-pointer py-4 px-3"
      >
        <div className="font-semibold">{trigger}</div>
        <IoIosArrowDown
          className={`${open ? "rotate-180" : ""} transition-transform duration-300`}
        />
      </div>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-300 px-3"
      >
        <p className="py-4">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
