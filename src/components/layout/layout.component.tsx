import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ILayoutProps {
  authenticated: boolean;
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ authenticated, children }) => {
  return (
    <>
      <header style={{ height: '80px' }}>
        {authenticated && (
          <>
            <Link to="/">Home</Link> -{' '}
            <Link to="/engineering">Engineering</Link> -{' '}
            <Link to="/inventory">Inventory</Link> -{' '}
            <Link to="/marketplace">Marketplace</Link>
          </>
        )}
      </header>
      {/* <aside>Sidenav</aside> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
