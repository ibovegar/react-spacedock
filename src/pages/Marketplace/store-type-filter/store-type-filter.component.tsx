import React from 'react';
import { ProductFilter } from 'models';
import { ProductFilterGroup } from 'components';
import { toArray, flatArrByValue } from 'utils/helpers';

interface Props {
  onFilterClick: (filters: string[]) => void; // TODO: typedef with ('spacecraft | 'etc')[]
}

export default class StoreTypeFilter extends React.Component<Props, any> {
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
      (prevState: any) => ({
        ...prevState,
        [filter.id]: {
          ...prevState[filter.id],
          value: !prevState[filter.id].value
        }
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
