import React from 'react';
import { connect } from 'react-redux';
import { loadStore } from 'store/store';
import { AppState } from 'store';
import { IUpgrade, ISpaceship } from 'models';

interface IStateProps {
  store: Array<ISpaceship | IUpgrade>;
}

interface IDispatchProps {
  loadStore: () => void;
}

type IProps = IStateProps & IDispatchProps;

class Marketplace extends React.Component<IProps, {}> {
  componentDidMount() {
    this.props.loadStore();
  }

  public render() {
    return (
      <div>
        {this.props.store.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    );
  }
}

export const mapStateToProps = (state: AppState) => ({
  store: state.store.store
});

export const mapDispatchToProps = {
  loadStore
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Marketplace);
