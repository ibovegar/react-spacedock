import React from 'react';
import { ProductFilter } from 'models';
import { ProductFilterGroup } from 'components';
import { toArray } from 'utils/helpers';

interface Props {
  onFilterClick: (filters: ProductFilter[]) => void;
}

class PriceFilter extends React.Component<Props, any> {
  state = {
    100: {
      id: '100',
      value: false,
      label: '0-100'
    },
    500: {
      id: '500',
      value: false,
      label: '100-500'
    },
    1000: {
      id: '1000',
      value: false,
      label: '500-1000'
    },
    2000: {
      id: '2000',
      value: false,
      label: '1000-2000'
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
        title="Product category"
        filters={toArray(this.state)}
        onFilterClick={this.handleFilterClick}
      />
    );
  }
}

export default PriceFilter;
