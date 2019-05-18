import React, { ReactNode } from 'react';

interface ILayoutProps {
  authenticated: boolean;
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ authenticated, children }) => {
  return (
    <>
      <header>Header {authenticated}</header>
      <aside>Sidenav</aside>
      <main>{children}</main>
    </>
  );
};

export default Layout;
