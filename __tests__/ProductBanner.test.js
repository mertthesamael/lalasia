import React from 'react';
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, act } from "@testing-library/react";
import ProductsBanner from '@/components/Banners/ProductsBanner'; // Update the import path as needed

describe('ProductsBanner Component', () => {
  it('should render without errors', () => {
    const { container } = render(<ProductsBanner />);
    expect(container).toBeInTheDocument();
  });

  it('should contain the discount label', () => {
    const { getByText } = render(<ProductsBanner />);
    const discountLabel = getByText('Discount');
    expect(discountLabel).toBeInTheDocument();
  });

  it('should contain the sale offer title', () => {
    const { getByText } = render(<ProductsBanner />);

    const saleOfferTitle = getByText('Ramadhan Sale Offer');
    expect(saleOfferTitle).toBeInTheDocument();
  }); 

  it('should contain the sale offer description', () => {
    const { getByText } = render(<ProductsBanner />);
    const saleOfferDescription = getByText('Get 40% off for the first transaction on Lalasia');
    expect(saleOfferDescription).toBeInTheDocument();
  });

});

