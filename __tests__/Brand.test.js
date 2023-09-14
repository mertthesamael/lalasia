import React from 'react';
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, act } from "@testing-library/react";
import Brand from '@/components/Brand'; 

describe('Brand Component', () => {
  it('should render without errors', () => {
    const { container } = render(<Brand />);
    expect(container).toBeInTheDocument();
  });

  it('should render the Logo component', () => {
    const { container } = render(<Brand />);
    const logoComponent = container.querySelector('svg');
    expect(logoComponent).toBeInTheDocument();
  });

  it('should render the "Lalasia" text', () => {
    const { getByText } = render(<Brand />);
    const brandText = getByText('Lalasia');
    expect(brandText).toBeInTheDocument();
  });

  it('should have the correct text size and font', () => {
    const { getByText } = render(<Brand />);
    const brandText = getByText('Lalasia');
    expect(brandText).toHaveClass('text-2xl font-bold');
  });
  
});
