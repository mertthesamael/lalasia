
import React from 'react';
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, act } from "@testing-library/react";
import OrderCard from '@/components/Cards/OrderCard';



describe('OrderCard Component', () => {
    const mockOrder = {
      date: new Date('2023-09-15T12:00:00Z'),
      products: [
        {
          item: {
            id: 1,
            name: 'Sample Product',
            color: 'Red',
          },
        },
        {
          item: {
            id: 2,
            name: 'Another Product',
            color: 'Blue',
          },
        },
      ],
      price: 100,
    };
  
    it('should render without errors', () => {
      const { container } = render(<OrderCard order={mockOrder} />);
      expect(container).toBeInTheDocument();
    });
  

  
    it('should render the product names and colors', () => {
      const { getByText } = render(<OrderCard order={mockOrder} />);
      const sampleProduct = getByText('Sample Product');
      const redColor = getByText('Red');
      const anotherProduct = getByText('Another Product');
      const blueColor = getByText('Blue');
      expect(sampleProduct).toBeInTheDocument();
      expect(redColor).toBeInTheDocument();
      expect(anotherProduct).toBeInTheDocument();
      expect(blueColor).toBeInTheDocument();
    });
  

  
  });