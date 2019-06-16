import React from 'react';
import { ProductFilter } from 'models';
import { ProductFilterGroup } from 'components';
import { toArray } from 'utils/helpers';

interface Props {
  onFilterClick: (filters: ProductFilter[]) => void;
}

class CategoryFilter extends React.Component<Props, any> {
  state = {
    spaceship: {
      id: 'spaceship',
      value: false,
      label: 'Spaceship'
    },
    upgrade: {
      id: 'upgrade',
      value: false,
      label: 'Upgrade'
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

export default CategoryFilter;
