import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import messages from '../../shared/localization/messages';
import { Header } from './Header';

describe('Header component', () => {
  it('Header should render correctly', () => {
    render(
      <IntlProvider locale="en" messages={messages.en}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </IntlProvider>
    );
    expect(screen.getByTestId('app-logo')).toBeInTheDocument();
    expect(screen.getByTestId('locale-picker')).toBeInTheDocument();
    expect(screen.getByTestId('input-search')).toBeInTheDocument();
  });

  it('Header snapshot', () => {
    const view = render(
      <IntlProvider locale="en" messages={messages.en}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </IntlProvider>
    );

    expect(view).toMatchSnapshot();
  });
});
