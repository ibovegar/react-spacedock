import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import {
  withStyles,
  createStyles,
  Theme,
  WithStyles
} from '@material-ui/core/styles';

const styles = ({ spacing }: Theme) =>
  createStyles({
    formControl: {
      margin: spacing(1),
      minWidth: 200
    }
  });

class Inventory extends React.Component<WithStyles<typeof styles>, any> {
  state = {
    age: '',
    name: 'hai'
  };

  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  public render() {
    return (
      <FormControl className={this.props.classes.formControl}>
        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
          value={this.state.age}
          onChange={this.handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple'
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(Inventory);
