import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Layout from './components/layout/layout.component';
import { Tactical, Marketplace, Inventory, Engineering } from 'containers';
import { loadUserStats } from 'store/user';
import { AppState } from 'store';

interface Props {
  credits: number;
  loadUserStats: () => void;
}

class App extends Component<Props> {
  componentDidMount() {
    this.props.loadUserStats();
  }

  render() {
    const { credits } = this.props;

    return (
      <Layout authenticated credits={credits}>
        <Route path="/" component={Tactical} />
        <Route path="/tactical" component={Tactical} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/engineering" component={Engineering} />
        <Redirect from="/" to="/tactical" />
      </Layout>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  credits: state.user.credits
});

const mapDispatchToProps = {
  loadUserStats
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
