import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Widget } from 'components';

const styless = ({ spacing }: Theme) =>
  createStyles({
    formControl: {
      margin: spacing(1),
      minWidth: 200
    }
  });

export interface IProps {
  classes: any;
}

class Inventory extends React.Component<IProps, {}> {
  state = {
    age: '',
    name: 'hai'
  };

  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  public render() {
    return (
      <>
        <Widget
          title="Lorem Ipsum Dolor"
          subheader="Sit amet siver og amund eeg"
        />
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
      </>
    );
  }
}

export default withStyles(styless)(Inventory);
