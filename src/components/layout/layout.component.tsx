import React, { ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import clsx from 'clsx';
import { Box } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from './toolbar/toolbar.component';
import backgroundImage from 'assets/images/15.jpg';

const useStyles = makeStyles(({ transitions }: Theme) => ({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    filter: 'grayscale(20%) brightness(30%)',
    transition: `filter 0.5s ${transitions.easing.easeInOut}, transform 1.2s ${transitions.easing.easeInOut}`,
    transform: 'scale(1.05)'
  },
  isTactical: {
    '& $background': {
      transform: 'scale(1)',
      filter: 'grayscale(10%) brightness(80%)'
    }
  }
}));

interface Props extends RouteComponentProps {
  authenticated: boolean;
  credits: number;
  children: ReactNode;
}

const Layout: React.FC<Props> = props => {
  const classes = useStyles();
  const { children, history, credits } = props;

  const className = clsx({
    [classes.isTactical]: history.location.pathname === '/tactical'
  });

  return (
    <Box
      display="flex"
      height="100vh"
      flexDirection="column"
      p={6}
      className={className}
    >
      <img className={classes.background} alt=" " />
      <Toolbar credits={credits} />
      <Box flex={1} mt={6} style={{ minHeight: 0 }}>
        {children}
      </Box>
    </Box>
  );
};

export default withRouter(Layout);
