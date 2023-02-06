import { useRouter } from 'next/router';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import mockRouter from 'next-router-mock';

import Home from '@/pages/index'
import About from '@/pages/about'

jest.mock('next/router', () => require('next-router-mock'));

const ExampleComponent = ({ href = '' }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(href)}>
      The current route is: "{router.asPath}"
    </button>
  );
}

describe('next-router-mock', () => {
  it('check text on home page', () => {
    render(<Home />);
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Boilerplate'
    );
  });

  it('navigates to about page', () => {
    // mockRouter.push("/");
    render(<About />);
    // console.log(screen)
    expect(screen.getByRole('heading')).toHaveTextContent(
      'About'
    );
  })  
})