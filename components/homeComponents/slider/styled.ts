import styled from "styled-components";

export const KeenSliderWrapper = styled.div`
  height: 800px;
  position: relative;
  overflow: hidden;
`;
export const KeenSliderSlide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;
export const Slide = styled.div`
  img {
    background-color: transparent;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`;
