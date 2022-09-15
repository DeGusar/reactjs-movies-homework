import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ActorCard } from './ActorCard';

describe('ActorCard component', () => {
  it('ActorCard should render correctly', () => {
    render(
      <ActorCard
        isDescription={true}
        character="The Narrator"
        name="Edward Norton"
        imageHeight="400px"
        id={819}
      />
    );
    expect(screen.getByText('"The Narrator"')).toBeInTheDocument();
    expect(screen.getByText('Edward Norton')).toBeInTheDocument();
  });

  it('ActorCard snapshot', () => {
    const view = render(
      <ActorCard
        isDescription={true}
        character="The Narrator"
        name="Edward Norton"
        imageHeight="400px"
        id={819}
      />
    );

    expect(view).toMatchSnapshot();
  });
});
