import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MovieCard } from './MovieCard';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import messages from '../../shared/localization/messages';

describe('MovieCard component', () => {
  it('MovieCard component should render correctly', () => {
    render(
      <IntlProvider locale="en" messages={messages.en}>
        <BrowserRouter>
          <MovieCard popularity="8" id={1234} imageHeight="400px" isDescription={true} />
        </BrowserRouter>
      </IntlProvider>
    );
    expect(screen.getByText('MovieTitle')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('Genre')).toBeInTheDocument();
  });

  it('MovieCard snapshot', () => {
    const view = render(
      <IntlProvider locale="en" messages={messages.en}>
        <BrowserRouter>
          <MovieCard popularity="8" id={1234} imageHeight="400px" isDescription={false} />
        </BrowserRouter>
      </IntlProvider>
    );

    expect(view).toMatchSnapshot();
  });
});
