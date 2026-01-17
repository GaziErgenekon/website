import { Children, useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import PropTypes from "prop-types";

const Carousel = ({
  children,
  options,
  leftArrowClassname,
  rightArrowClassname,
}) => {
  const sliderRef = useRef(null);
  const glideInstance = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      glideInstance.current = new Glide(sliderRef.current, options);
      glideInstance.current.mount();
    }

    return () => {
      glideInstance.current?.destroy();
    };
  }, [options]);
  return (
    <div className="glide" ref={sliderRef}>
      <div className="glide__track " data-glide-el="track">
        <ul className="glide__slides !py-0 !h-full !flex ">
          {Children.map(children, (child, index) => (
            <li className="glide__slide !h-full" key={index}>
              {child}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="glide__arrows text-foreground/60"
        data-glide-el="controls"
      >
        <button
          className={`glide__arrow glide__arrow--left cursor-pointer absolute h-max left-0 top-1/2 ${leftArrowClassname}`}
          data-glide-dir="<"
        >
          <IoIosArrowDropleftCircle size={30} />
        </button>
        <button
          className={`glide__arrow glide__arrow--right cursor-pointer absolute h-max right-0 top-1/2 ${rightArrowClassname}`}
          data-glide-dir=">"
        >
          <IoIosArrowDroprightCircle size={30} />
        </button>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.object,
  leftArrowClassname: PropTypes.string,
  rightArrowClassname: PropTypes.string,
};

export default Carousel;
