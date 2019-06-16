import React from 'react';
import { ProductFilter } from 'models';
import { ProductFilterGroup } from 'components';
import { toArray } from 'utils/helpers';

interface Props {
  onFilterClick: (filters: ProductFilter[]) => void;
}

export default class UpgradeFilter extends React.Component<Props, any> {
  state = {
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
      () => this.props.onFilterClick(toArray(this.state))
    );
  };

  public render() {
    return (
      <ProductFilterGroup
        title="Upgrades"
        filters={toArray(this.state)}
        onFilterClick={this.handleFilterClick}
      />
    );
  }
}
