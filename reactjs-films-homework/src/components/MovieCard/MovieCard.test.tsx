import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MovieCard } from './MovieCard';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import messages from '../../shared/localization/messages';

describe('MovieCard component', () => {
  const defaultProps = {
    popularity: '8',
    id: 1234,
    imageHeight: '400px',
    isShowDescription: true,
  };

  it('MovieCard component should render correctly', () => {
    render(
      <IntlProvider locale="en" messages={messages.en}>
        <BrowserRouter>
          <MovieCard {...defaultProps} />
        </BrowserRouter>
      </IntlProvider>
    );
    expect(screen.getByTestId('movie-card-title')).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-rating')).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-genre')).toBeInTheDocument();
  });

  it('MovieCard snapshot', () => {
    const view = render(
      <IntlProvider locale="en" messages={messages.en}>
        <BrowserRouter>
          <MovieCard {...defaultProps} />
        </BrowserRouter>
      </IntlProvider>
    );

    expect(view).toMatchSnapshot();
  });
});
