import React from 'react';
import { IUpgrade } from 'models';
import { Box, Typography, Popover } from '@material-ui/core';
import classes from './spaceship-control.module.scss';

interface IProps {
  selectedUpgrade: IUpgrade;
  selectableUpgrades: IUpgrade[];
  type: string;
  onSelectUpgrade: (upgrade: IUpgrade) => void;
}

const SpaceshipControl: React.FC<IProps> = props => {
  const { selectedUpgrade, selectableUpgrades, type, onSelectUpgrade } = props;
  const [anchorEl, setAnchorEl]: [any, any] = React.useState(null);

  const handleOpen = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickUpgrade = (upgrade: IUpgrade) => {
    handleClose();
    onSelectUpgrade(upgrade);
  };

  const open = Boolean(anchorEl);
  const id = open ? `${type}spacecraft-control` : undefined;

  return (
    <>
      <Typography variant="h6">{type}</Typography>
      <Box bgcolor="grey.100" p={2} m={2} onClick={handleOpen}>
        {selectedUpgrade ? (
          <>
            <Typography variant="h5">{selectedUpgrade.name}</Typography>
            <Typography variant="body1" gutterBottom>
              {selectedUpgrade.manufacturer}
            </Typography>
          </>
        ) : (
          <Typography variant="h5">
            {selectableUpgrades.length} available upgrade
            {selectableUpgrades.length > 1 ? 's' : ''}
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
          {!selectableUpgrades.length ? (
            <Typography variant="h6">No available upgrades</Typography>
          ) : (
            selectableUpgrades.map((upgrade: IUpgrade) => (
              <li key={upgrade.id} onClick={() => handleClickUpgrade(upgrade)}>
                <Typography variant="h5">{upgrade.name}</Typography>
                <Typography variant="body1" gutterBottom>
                  {upgrade.manufacturer}
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
