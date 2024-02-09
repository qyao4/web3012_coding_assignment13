// src/components/hero-image/HeroImage.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

describe('HeroImage', () => {
  it('is visible', () => {
    render(<HeroImage src="path/to/hero-image.jpg" alt="Hero" />);
    expect(screen.getByAltText('Hero')).toBeVisible();
  });

  it('changes opacity when disabled', () => {
    render(<HeroImage src="path/to/hero-image.jpg" alt="Hero" disabled />);
    expect(screen.getByAltText('Hero')).toHaveStyle('opacity: 0.5');
  });
});
