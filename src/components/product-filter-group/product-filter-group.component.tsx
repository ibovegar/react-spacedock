import React from 'react';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import { ProductFilter } from 'models';

interface Props {
  title: string;
  filters: ProductFilter[];
  onFilterClick: (filter: ProductFilter) => void;
}

const ProductFilterGroup: React.FC<Props> = props => {
  const { filters, title, onFilterClick } = props;

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{title}</FormLabel>
      <FormGroup>
        {filters.map(filter => (
          <FormControlLabel
            key={filter.id}
            control={
              <Checkbox
                checked={filter.value}
                value={filter.value}
                onChange={() => onFilterClick(filter)}
              />
            }
            label={filter.label}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default ProductFilterGroup;
