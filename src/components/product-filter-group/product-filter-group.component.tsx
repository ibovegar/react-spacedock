import React from 'react';
import {
  FormControlLabel,
  Checkbox,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  Divider
} from '@material-ui/core';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiFormGroup from '@material-ui/core/FormGroup';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './product-filter-group.styles';
import { CheckBoxOutlineBlank, CheckBox, ExpandMore } from '@material-ui/icons';
import { ProductFilter } from 'models';

const ExpansionPanelDetails = withStyles(() => ({
  root: {
    padding: 0
  }
}))(MuiExpansionPanelDetails);

const FormGroup = withStyles(() => ({
  root: {
    width: '100%'
  }
}))(MuiFormGroup);

interface Props extends WithStyles<typeof styles> {
  title: string;
  defaultExpanded?: boolean;
  filters: ProductFilter[];
  onFilterClick: (filter: ProductFilter) => void;
}

const ProductFilterGroup: React.FC<Props> = props => {
  const { classes, filters, title, onFilterClick, defaultExpanded } = props;

  return (
    <ExpansionPanel defaultExpanded={defaultExpanded}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography variant="overline">{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <FormGroup>
          {filters.map(filter => (
            <>
              <Divider />
              <FormControlLabel
                key={filter.id}
                control={
                  <Checkbox
                    classes={{
                      root: classes.root
                    }}
                    value={filter.value}
                    icon={<CheckBoxOutlineBlank fontSize="small" />}
                    checkedIcon={<CheckBox fontSize="small" />}
                    onChange={() => onFilterClick(filter)}
                  />
                }
                label={filter.label}
              />
            </>
          ))}
        </FormGroup>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default withStyles(styles)(ProductFilterGroup);
