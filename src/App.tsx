import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import classes from './App.module.scss';
import Layout from './components/layout/layout.component';
import { Home, Marketplace, Inventory, Engineering } from 'pages';

class App extends Component {
  render() {
    return (
      <Layout authenticated>
        <Route exact path="/" component={Home} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/engineering" component={Engineering} />
      </Layout>
    );
  }
}

export default App;
