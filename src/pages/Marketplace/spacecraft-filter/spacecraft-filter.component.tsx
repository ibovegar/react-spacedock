import React from 'react';
import { ProductFilter } from 'models';
import { ProductFilterGroup } from 'components';
import { toArray, flatArrByValue } from 'utils/helpers';
import produce from 'immer';

interface Props {
  onFilterClick: (filters: string[]) => void;
}

interface State {
  [id: string]: ProductFilter;
}

export default class SpacecraftFilter extends React.Component<Props, State> {
  state: State = {
    drax22: {
      id: 'drax22',
      value: false,
      label: 'Draxon SA-22'
    },
    cygf35: {
      id: 'cygf35',
      value: false,
      label: 'Cygnia F35'
    },
    hamm2: {
      id: 'hamm2',
      value: false,
      label: 'Hammerhead 2'
    },
    vanguard: {
      id: 'vanguard',
      value: false,
      label: 'Vanguard SAR'
    },
    tellrx5: {
      id: 'tellrx5',
      value: false,
      label: 'Tellus R X5'
    }
  };

  handleFilterClick = (filter: ProductFilter) => {
    this.setState(
      produce(state => {
        state[filter.id].value = !state[filter.id].value;
      }),
      () => {
        const arr: ProductFilter[] = toArray(this.state);
        const filters = flatArrByValue(arr, 'value', 'id');
        return this.props.onFilterClick(filters);
      }
    );
  };

  public render() {
    return (
      <ProductFilterGroup
        title="Spaceships"
        filters={toArray(this.state)}
        onFilterClick={this.handleFilterClick}
      />
    );
  }
}
