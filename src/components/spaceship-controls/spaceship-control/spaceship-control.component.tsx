import React from 'react';
import { IUpgrade } from 'models';
import { Box, Typography, Popover, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    borderRadius: 2,
    backgroundColor: theme.palette.primary.main,
    clipPath: `polygon(
      0 0, 0 0, /* top-left */
      calc(100% - 10px) 0%, 100% 10px, /* top-right */
      100% 100%, 100% 100%, /* bottom-right */
      10px 100%, 0% calc(100% - 10px)) /* bottom-left */`
  },
  dropdown: {}
}));

interface IProps {
  value: IUpgrade;
  options: IUpgrade[];
  type: string;
  onSelect: (option: IUpgrade) => void;
}

const SpaceshipControl: React.FC<IProps> = props => {
  const { value, options, type, onSelect } = props;
  const [anchorEl, setAnchorEl]: [any, any] = React.useState(null);
  const classes = useStyles();

  const handleOpen = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickUpgrade = (option: IUpgrade) => {
    handleClose();
    onSelect(option);
  };

  const open = Boolean(anchorEl);
  const id = open ? `${type}spacecraft-control` : undefined;

  return (
    <>
      <Typography variant="overline">{type}</Typography>
      <Box className={classes.input} p={1} pl={4} mb={4} onClick={handleOpen}>
        <Typography variant="overline">
          {value ? value.name : options.length + ' available'}
        </Typography>
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
              <li key={option.id} onClick={() => handleClickUpgrade(option)}>
                <Typography variant="h5">{option.name}</Typography>
                <Typography variant="body1" gutterBottom>
                  {option.manufacturer}
                </Typography>
              </li>
            ))
          )}
        </ul>
      </Popover>
    </>
  );
};

export default SpaceshipControl;
