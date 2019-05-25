import React, { ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Tabs, Tab, AppBar, Box } from '@material-ui/core';
// import classes from './layout.module.scss';

interface IProps extends RouteComponentProps {
  authenticated: boolean;
  children: ReactNode;
}

const Layout: React.FC<IProps> = props => {
  const { children, history } = props;
  const [value, setValue] = React.useState('/');

  const handleChange = (_: any, newValue: string) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <Box display="flex" height="100%" flexDirection="column">
      <Box height={50}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Tactical" value="/" />
            <Tab label="Engineering" value="/engineering" />
            <Tab label="Inventory" value="/inventory" />
            <Tab label="Marketplace" value="/marketplace" />
          </Tabs>
        </AppBar>
      </Box>
      {/* <aside>Sidenav</aside> */}
      <Box flex={1}>{children}</Box>
    </Box>
  );
};

export default withRouter(Layout);
