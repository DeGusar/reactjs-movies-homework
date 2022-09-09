import { Container } from '@mui/material';
import { Header } from '../index';
import { useStyles } from './styles';

type ModalPropsType = {
  children: React.ReactNode;
};

export const Layout = ({ children }: ModalPropsType) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.layout}>{children}</Container>
    </>
  );
};
