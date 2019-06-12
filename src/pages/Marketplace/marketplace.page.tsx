import React from 'react';
import { connect } from 'react-redux';
import {
  withStyles,
  createStyles,
  Theme,
  WithStyles
} from '@material-ui/core/styles';
import { loadStore } from 'store/store';
import { AppState } from 'store';
import { Upgrade, Spaceship } from 'models';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Widget } from 'components';
import { Typography } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    formControl: {
      margin: spacing(1),
      minWidth: 200
    }
  });

interface StateProps extends WithStyles<typeof styles> {
  store: (Spaceship | Upgrade)[];
}

interface DispatchProps {
  loadStore: () => void;
}

type Props = StateProps & DispatchProps;

class Marketplace extends React.Component<Props, {}> {
  state = {
    age: '',
    name: 'hai'
  };

  componentDidMount() {
    this.props.loadStore();
  }

  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  public render() {
    return (
      <Widget title="Lorem Ipsum Dolor" subheader="Sit amet siver og amund eeg">
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
        <div>
          {this.props.store.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>
        <Typography variant="h1">Lorem ipsum dolor</Typography>
        <Typography variant="h2">Lorem ipsum dolor</Typography>
        <Typography variant="h3">Lorem ipsum dolor</Typography>
        <Typography variant="h4">Lorem ipsum dolor</Typography>
        <Typography variant="h5">Lorem ipsum dolor</Typography>
        <Typography variant="h6">Lorem ipsum dolor</Typography>
        <Typography variant="subtitle1">Lorem ipsum dolor</Typography>
        <Typography variant="subtitle2">Lorem ipsum dolor</Typography>
      </Widget>
    );
  }
}

export const mapStateToProps = (state: AppState) => ({
  store: state.store.store
});

export const mapDispatchToProps = {
  loadStore
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Marketplace)
);
