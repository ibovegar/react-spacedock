import React from 'react';
import { Upgrade } from 'models';
import {
  Box,
  Typography,
  Popover,
  withStyles,
  WithStyles,
  Divider,
  Avatar
} from '@material-ui/core';
import clsx from 'clsx';
import styles from './upgrade-select.styles';
import RemoveIcon from '@material-ui/icons/IndeterminateCheckBox';
import { PopoverOrigin } from '@material-ui/core/Popover';

interface Props extends WithStyles<typeof styles> {
  value: Upgrade;
  options: Upgrade[];
  type: string;
  onSelect: (option: Upgrade) => void;
  onDeselect: () => void;
}

const UpgradeSelect: React.FC<Props> = props => {
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

  const handleSelect = (option: Upgrade) => {
    handleClose();
    onSelect(option);
  };

  const handleDeselect = (event: React.MouseEvent) => {
    event.stopPropagation();
    onDeselect();
  };

  const open = Boolean(anchorEl);
  const id = open ? `${type}spacecraft-control` : undefined;
  const placeholder = value ? value.name : options.length + ' available';
  const popoverOrigin: PopoverOrigin = { vertical: 'top', horizontal: 'left' };

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
          <Typography variant="overline">{placeholder}</Typography>
        </Box>
        {value && (
          <RemoveIcon
            fontSize="small"
            className={classes.icon}
            onClick={handleDeselect}
          />
        )}
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={popoverOrigin}
        transformOrigin={popoverOrigin}
      >
        <ul className={classes.dropdown}>
          {!options.length ? (
            <Box py={3} px={8}>
              <Typography variant="subtitle1">NO AVAILABLE UPGRADES</Typography>
            </Box>
          ) : (
            options.map((option: Upgrade, index) => (
              <li key={option.id} onClick={() => handleSelect(option)}>
                <Box display="flex">
                  <Box
                    width="80px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Avatar className="gain">{option.gain}</Avatar>
                  </Box>
                  <Box pr={8} py={3}>
                    <Typography style={{ whiteSpace: 'nowrap' }} variant="h6">
                      {option.name}
                    </Typography>
                    <Typography
                      style={{ whiteSpace: 'nowrap' }}
                      variant="subtitle1"
                    >
                      {option.manufacturer.toUpperCase()}
                    </Typography>
                  </Box>
                </Box>
                {index + 1 !== options.length && <Divider />}
              </li>
            ))
          )}
        </ul>
      </Popover>
    </div>
  );
};

export default withStyles(styles)(UpgradeSelect);
