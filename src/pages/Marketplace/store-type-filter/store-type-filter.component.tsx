import React from 'react';
import produce from 'immer';
import { ProductFilter } from 'models';
import { ProductFilterGroup } from 'components';
import { toArray, flatArrByValue } from 'utils/helpers';

interface Props {
  onFilterClick: (filters: string[]) => void; // TODO: typedef with ('spacecraft | 'etc')[]
}

interface State {
  [id: string]: ProductFilter;
}

export default class StoreTypeFilter extends React.Component<Props, State> {
  state = {
    spacecraft: {
      id: 'spacecraft',
      value: false,
      label: 'Spacecraft'
    },
    engine: {
      id: 'engine',
      value: false,
      label: 'Engine'
    },
    plating: {
      id: 'plating',
      value: false,
      label: 'Plating'
    },
    deflector: {
      id: 'deflector',
      value: false,
      label: 'Deflector'
    },
    weapons: {
      id: 'weapons',
      value: false,
      label: 'Weapons'
    },
    stabilizer: {
      id: 'stabilizer',
      value: false,
      label: 'Stabilizer'
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
        title="Product category"
        filters={toArray(this.state)}
        onFilterClick={this.handleFilterClick}
      />
    );
  }
}
