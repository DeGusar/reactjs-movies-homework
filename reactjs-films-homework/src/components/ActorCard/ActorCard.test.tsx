import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ActorCard } from './ActorCard';

describe('ActorCard component', () => {
  const defaultProps = {
    isShowDescription: true,
    character: 'The Narrator',
    name: 'Edward Norton',
    imageHeight: '400px',
    id: 819,
  };

  it('ActorCard should render correctly', () => {
    render(<ActorCard {...defaultProps} />);
    expect(screen.getByTestId('actor-character')).toBeInTheDocument();
    expect(screen.getByTestId('actor-name')).toBeInTheDocument();
  });

  it('ActorCard snapshot', () => {
    const view = render(<ActorCard {...defaultProps} />);

    expect(view).toMatchSnapshot();
  });
});
