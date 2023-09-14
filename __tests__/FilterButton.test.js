import React from 'react';
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, act } from "@testing-library/react";
import FilterButton from '@/components/Buttons/FilterButton';


describe('FilterButton Component', () => {
  const mockOnClick = jest.fn();

  it('should render without errors', () => {
    const { container } = render(
      <FilterButton text="Test" activeFilter="test" onClick={mockOnClick} />
    );
    expect(container).toBeInTheDocument();
  });

  it('should render the button text', () => {
    const { getByText } = render(
      <FilterButton text="Test" activeFilter="test" onClick={mockOnClick} />
    );
    const buttonText = getByText('Test');
    expect(buttonText).toBeInTheDocument();
  });

  it('should have the correct initial className when active', () => {
    const { getByText } = render(
      <FilterButton text="Test" activeFilter="test" onClick={mockOnClick} />
    );
    const button = getByText('Test');
    expect(button).toHaveClass('text-black font-lg font-medium bg-[#F9F9F9]');
  });

  it('should have the correct initial className when not active', () => {
    const { getByText } = render(
      <FilterButton text="Test" activeFilter="other" onClick={mockOnClick} />
    );
    const button = getByText('Test');
    expect(button).toHaveClass('text-textColor font-lg font-medium bg-white');
  });

  it('should call the onClick function when clicked', () => {
    const { getByText } = render(
      <FilterButton text="Test" activeFilter="test" onClick={mockOnClick} />
    );
    const button = getByText('Test');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

});
