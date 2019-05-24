import React, { ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Tabs, Tab, AppBar } from '@material-ui/core';

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
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Tactical" value="/" />
          <Tab label="Engineering" value="/engineering" />
          <Tab label="Inventory" value="/inventory" />
          <Tab label="Marketplace" value="/marketplace" />
        </Tabs>
      </AppBar>
      {/* <aside>Sidenav</aside> */}
      <main>{children}</main>
    </>
  );
};

export default withRouter(Layout);
