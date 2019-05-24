import React from 'react';
import { IUpgrade } from 'models';
import { Box, Typography, Popover } from '@material-ui/core';

interface IProps {
  selectedUpgrade: IUpgrade;
  selectableUpgrades: IUpgrade[];
  type: string;
}

const SpaceshipControl: React.FC<IProps> = ({
  selectedUpgrade,
  selectableUpgrades,
  type
}) => {
  const [anchorEl, setAnchorEl]: [any, any] = React.useState(null);

  const handleClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? `${type}spacecraft-control` : undefined;

  return (
    <>
      <Box bgcolor="grey.100" p={2} onClick={handleClick}>
        {selectedUpgrade ? (
          <>
            <Typography variant="h5">{selectedUpgrade.name}</Typography>
            <Typography variant="body1" gutterBottom>
              {selectedUpgrade.manufacturer}
            </Typography>
          </>
        ) : (
          <Typography variant="h5">Empty</Typography>
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
        <Box p={3}>
          {!selectableUpgrades.length ? (
            <Typography variant="h6">No available upgrades</Typography>
          ) : (
            selectableUpgrades.map((upgrade: IUpgrade) => (
              <div key={upgrade.id}>
                <Typography variant="h5">{upgrade.name}</Typography>
                <Typography variant="body1" gutterBottom>
                  {upgrade.manufacturer}
                </Typography>
              </div>
            ))
          )}
        </Box>
      </Popover>
    </>
  );
};

export default SpaceshipControl;
