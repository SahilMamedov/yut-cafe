import styled from "styled-components";
import { MapBox, mayStyle } from "../styled";

export const CostomMap = () => {
  return (
    <MapBox>
      {/* <iframe
        style={mayStyle}
        src="https://www.google.com/maps/embed/v1/place?q=Moscow,+Russia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      ></iframe> */}
      <iframe
        style={mayStyle}
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Митинская дом 55 корпус 1&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </MapBox>
  );
};
