import React from 'react';
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, act } from "@testing-library/react";
import PageButton from '@/components/Buttons/PageButton'; 



describe('PageButton Component', () => {
  it('should render without errors', () => {
    const { container } = render(
      <PageButton currentPage={1} value={1} onClick={() => {}} />
    );
    expect(container).toBeInTheDocument();
  });

  it('should render the button text', () => {
    const { getByText } = render(
      <PageButton currentPage={1} value={1} onClick={() => {}} />
    );
    const buttonText = getByText('1');
    expect(buttonText).toBeInTheDocument();
  });

  it('should have the correct className when currentPage matches value', () => {
    const { container } = render(
      <PageButton currentPage={1} value={1} onClick={() => {}} />
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('bg-primaryColor');
    expect(button).not.toHaveClass('bg-white border-2');
    expect(button.querySelector('span')).toHaveClass('text-white');
  });

  it('should have the correct className when currentPage does not match value', () => {
    const { container } = render(
      <PageButton currentPage={1} value={2} onClick={() => {}} />
    );
    const button = container.querySelector('button');
    expect(button).not.toHaveClass('bg-primaryColor');
    expect(button).toHaveClass('bg-white border-2');
    expect(button.querySelector('span')).toHaveClass('text-black'); // Check the nested span for text color
  });

  it('should call onClick when clicked', () => {
    const mockOnClick = jest.fn();
    const { container } = render(
      <PageButton currentPage={1} value={1} onClick={mockOnClick} />
    );
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

});
