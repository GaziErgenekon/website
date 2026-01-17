import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import OutsideClickHandler from "../common/OutsideClickHandler";
import { BiSolidUpArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Dropdown = ({
  isHoverTrigger = false,
  trigger,
  listItems,
  listClassname,
  itemClassname,
  arrowClassname,
  triggerClassname,
  onOpenListener,
}) => {
  const [open, setOpen] = useState(false);

  const isMobileScreenSize = useMediaQuery({
    query: "(max-width: 640px)",
  });

  useEffect(() => {
    if (onOpenListener) {
      onOpenListener(open);
    }
  }, [open, onOpenListener]);

  return (
    <div
      {...(!isMobileScreenSize && isHoverTrigger && {
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
      })}
      className="relative"
    >
      <div
        className={`[&_.dropdown-rotate-arrow-icon]:transition-transform ${
          open
            ? "[&_.dropdown-rotate-arrow-icon]:rotate-0"
            : "[&_.dropdown-rotate-arrow-icon]:rotate-180"
        } ${triggerClassname}`}
        {...(!isMobileScreenSize && !isHoverTrigger && { onClick: () => setOpen(!open) })}
      >
        {trigger}
      </div>

      {open && (
        <OutsideClickHandler
          disabled={!isMobileScreenSize && !isHoverTrigger && !open}
          onOutsideClick={() => setOpen(false)}
        >
          <div
            className={`absolute w-max z-[999] bg-zinc-950 backdrop-blur-2xl top-full translate-y-2 left-1/2 -translate-x-1/2 border border-zinc-800 rounded-lg px-1 py-1.5 text-foreground ${listClassname}`}
          >
            <div className="absolute top-0 left-0 w-full -translate-y-[10.5px] h-[16px]"/>

            <BiSolidUpArrow
              className={`absolute fill-zinc-950 drop-shadow-[0px_-0.3px_0.6px_var(--color-zinc-700)] top-0 left-1/2 -translate-x-1/2 scale-x-110 scale-y-80 -translate-y-[10.5px] ${arrowClassname}`}
            />
            <div className="col-start gap-0.5 cursor-pointer text-sm">
              {listItems.map(
                (
                  { icon, onClick = () => {}, text, content, isLink, linkHref },
                  i
                ) => (
                  <div
                    key={"dropdown_" + i}
                    onClick={onClick}
                    className={`row-center gap-2 rounded-lg px-3 py-2 hover:bg-zinc-900 w-full transition-colors ${itemClassname}`}
                  >
                    {isLink ? (
                      <Link className="row-center gap-2" to={linkHref || "#"}>
                        {!content ? (
                          <>
                            {icon}
                            {text}
                          </>
                        ) : (
                          content
                        )}
                      </Link>
                    ) : !content ? (
                      <>
                        {icon}
                        {text}
                      </>
                    ) : (
                      content
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  isHoverTrigger: PropTypes.bool,
  trigger: PropTypes.node.isRequired,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      content: PropTypes.node,
      icon: PropTypes.node,
      onClick: PropTypes.func,
      isLink: PropTypes.bool,
      linkHref: PropTypes.string,
    })
  ).isRequired,
  listClassname: PropTypes.string,
  itemClassname: PropTypes.string,
  arrowClassname: PropTypes.string,
  triggerClassname: PropTypes.string,
  onOpenListener: PropTypes.func,
};

export default Dropdown;
