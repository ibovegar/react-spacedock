import React from 'react';
import { IUpgrade } from 'models';
import {
  Box,
  Typography,
  Popover,
  withStyles,
  WithStyles
} from '@material-ui/core';
import clsx from 'clsx';
import styles from './upgrade-select.styles';
import InfoIcon from '@material-ui/icons/AddBox';
import RemoveIcon from '@material-ui/icons/IndeterminateCheckBox';

interface IProps extends WithStyles<typeof styles> {
  value: IUpgrade;
  options: IUpgrade[];
  type: string;
  onSelect: (option: IUpgrade) => void;
  onDeselect: () => void;
}

const UpgradeSelect: React.FC<IProps> = props => {
  const { classes, value, options, type, onSelect, onDeselect } = props;
  const [anchorEl, setAnchorEl]: [any, any] = React.useState(null);

  const className = clsx({
    [classes.disabled]: !value && options.length === 0,
    [classes.active]: value
  });

  const handleOpen = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option: IUpgrade) => {
    handleClose();
    onSelect(option);
  };

  const handleDeselect = (event: React.MouseEvent) => {
    event.stopPropagation();
    onDeselect();
  };

  const open = Boolean(anchorEl);
  const id = open ? `${type}spacecraft-control` : undefined;

  return (
    <div className={className}>
      <Typography variant="overline">{type}</Typography>
      <Box
        className={classes.input}
        py={1}
        px={4}
        mb={4}
        display="flex"
        alignItems="center"
        onClick={handleOpen}
      >
        <Box flex={1}>
          <Typography variant="overline">
            {value ? value.name : options.length + ' available'}
          </Typography>
        </Box>
        {value && (
          <>
            <InfoIcon fontSize="small" className={classes.icon} />
            <RemoveIcon
              fontSize="small"
              className={classes.icon}
              onClick={handleDeselect}
            />
          </>
        )}
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <ul className={classes.dropdown}>
          {!options.length ? (
            <Typography variant="h6">No available upgrades</Typography>
          ) : (
            options.map((option: IUpgrade) => (
              <li key={option.id} onClick={() => handleSelect(option)}>
                <Typography variant="h5">{option.name}</Typography>
                <Typography variant="body1" gutterBottom>
                  {option.manufacturer}
                </Typography>
              </li>
            ))
          )}
        </ul>
      </Popover>
    </div>
  );
};

export default withStyles(styles)(UpgradeSelect);
