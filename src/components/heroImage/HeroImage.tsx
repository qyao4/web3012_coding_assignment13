// src/components/hero-image/HeroImage.tsx
import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.img<HeroImageProps>`
  width: 100%;
  height: auto;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, disabled }) => {
  return <StyledHeroImage src={src} alt={alt} disabled={disabled} />;
};

export default HeroImage;
