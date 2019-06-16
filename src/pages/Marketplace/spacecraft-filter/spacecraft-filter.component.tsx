import React from 'react';
import { ProductFilter } from 'models';
import { ProductFilterGroup } from 'components';
import { toArray } from 'utils/helpers';

interface Props {
  onFilterClick: (filters: ProductFilter[]) => void;
}

export default class SpacecraftFilter extends React.Component<Props, any> {
  state = {
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
        title="Spaceships"
        filters={toArray(this.state)}
        onFilterClick={this.handleFilterClick}
      />
    );
  }
}
