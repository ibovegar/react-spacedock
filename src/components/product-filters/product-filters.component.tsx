import React from 'react';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

const ProductFilters: React.FC = () => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={gilad}
              onChange={handleChange('gilad')}
              value="gilad"
            />
          }
          label="Gilad Gray"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={jason}
              onChange={handleChange('jason')}
              value="jason"
            />
          }
          label="Jason Killian"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={antoine}
              onChange={handleChange('antoine')}
              value="antoine"
            />
          }
          label="Antoine Llorca"
        />
      </FormGroup>
    </FormControl>
  );
};

export default ProductFilters;
