import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { KeenSliderSlide, KeenSliderWrapper, Slide } from "./styled";
import { SliderFoodHome, SliderFoodHome2 } from "../../../public/assets";
const images = [SliderFoodHome, SliderFoodHome2];

const Slider = () => {
  const [opacities, setOpacities] = useState<number[]>([]);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: images.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
  });

  return (
    <KeenSliderWrapper ref={sliderRef}>
      {images.map((src, idx) => (
        <KeenSliderSlide key={idx}>
          <Slide key={idx} style={{ opacity: opacities[idx] }}>
            <img alt="" src={src.src} />
          </Slide>
        </KeenSliderSlide>
      ))}
    </KeenSliderWrapper>
  );
};
export default Slider;
