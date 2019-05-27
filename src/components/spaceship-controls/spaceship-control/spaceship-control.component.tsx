import React from 'react';
import { IUpgrade } from 'models';
import { Box, Typography, Popover } from '@material-ui/core';
import classes from './spaceship-control.module.scss';

interface IProps {
  value: IUpgrade;
  options: IUpgrade[];
  type: string;
  onSelect: (option: IUpgrade) => void;
}

const SpaceshipControl: React.FC<IProps> = props => {
  const { value, options, type, onSelect } = props;
  const [anchorEl, setAnchorEl]: [any, any] = React.useState(null);

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
      <Typography variant="h6">{type}</Typography>
      <Box bgcolor="grey.300" p={2} m={2} onClick={handleOpen}>
        {value ? (
          <>
            <Typography variant="h5">{value.name}</Typography>
            <Typography variant="body1" gutterBottom>
              {value.manufacturer}
            </Typography>
          </>
        ) : (
          <Typography variant="h5">
            {options.length} available upgrade
            {options.length > 1 ? 's' : ''}
          </Typography>
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
        <ul className={classes.ItemList}>
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
