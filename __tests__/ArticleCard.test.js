
import React from 'react';
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, act } from "@testing-library/react";
import ArticleCard from '@/components/Cards/ArticleCard';

const mockAuthor = {
  name: 'John Doe',
  imgUrl: '/john-doe.jpg',
};

const mockDate = new Date();

describe('ArticleCard Component', () => {
  it('should render without errors (default mode)', () => {
    const { container } = render(
      <ArticleCard
        id={1}
        title="Sample Article"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        author={mockAuthor}
        date={mockDate}
        category="News"
        imgUrl="/sample.jpg"
      />
    );
    expect(container).toBeInTheDocument();
  });

  it('should render in secondary mode', () => {
    const { container } = render(
      <ArticleCard
        secondary
        id={1}
        title="Sample Article"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        author={mockAuthor}
        date={mockDate}
        category="News"
        imgUrl="/sample.jpg"
      />
    );
    expect(container).toBeInTheDocument();
  });

  it('should render in horizontal mode', () => {
    const { container } = render(
      <ArticleCard
        horizontal
        id={1}
        title="Sample Article"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        author={mockAuthor}
        date={mockDate}
        category="News"
        imgUrl="/sample.jpg"
      />
    );
    expect(container).toBeInTheDocument();
  });

});
