// src/components/img/Img.tsx
import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<ImgProps>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Img: React.FC<ImgProps> = ({ src, alt, disabled }) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} />;
};

export default Img;
