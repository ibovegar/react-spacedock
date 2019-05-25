import * as React from 'react';
import { ISpaceship } from 'models';
import { LinearProgress, Box, Typography } from '@material-ui/core';

interface IProps {
  spacecraft: ISpaceship;
}

const SpaceshipStats: React.FC<IProps> = ({ spacecraft }) => {
  // Only rerender if buffs changes
  const { baseStats } = spacecraft;

  return (
    <>
      <Box m={2}>
        <Typography variant="body1">
          <strong>Name:</strong> {spacecraft.name}
        </Typography>
        <Typography variant="body1">
          <strong>Type:</strong> {spacecraft.type}
        </Typography>
        <Typography variant="body1">
          <strong>Manufacturer:</strong> {spacecraft.manufacturer}
        </Typography>
        <Typography variant="body1">
          <strong>Manufactured:</strong> {spacecraft.manufactured}
        </Typography>
        <Typography variant="body1">
          <strong>Height:</strong> {spacecraft.height}
        </Typography>
        <Typography variant="body1">
          <strong>Length:</strong> {spacecraft.length}
        </Typography>
        <Typography variant="body1">
          <strong>Registry:</strong> {spacecraft.registry}
        </Typography>
      </Box>
      <Box m={2}>
        <Typography variant="h6">Speed</Typography>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={baseStats.speed}
        />
      </Box>
      <Box m={2}>
        <Typography variant="h6">Shield</Typography>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={baseStats.shield}
        />
      </Box>
      <Box m={2}>
        <Typography variant="h6">Damage</Typography>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={baseStats.damage}
        />
      </Box>
      <Box m={2}>
        <Typography variant="h6">Hull</Typography>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={baseStats.hull}
        />
      </Box>
      <Box m={2}>
        <Typography variant="h6">Manuvrability</Typography>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={baseStats.manuvrability}
        />
      </Box>
      {/* <ul>
        <li>
          Speed: {stats.speed} {buffs.speed && ' + ' + buffs.speed.gain}
        </li>
        <li>
          Shield: {stats.shield} {buffs.shield && ' + ' + buffs.shield.gain}
        </li>
        <li>
          Damage: {stats.damage} {buffs.damage && ' + ' + buffs.damage.gain}
        </li>
        <li>
          Hull: {stats.hull} {buffs.hull && ' + ' + buffs.hull.gain}
        </li>
        <li>
          Manuvrability: {stats.manuvrability}
          {buffs.manuvrability && ' + ' + buffs.manuvrability.gain}
        </li>
      </ul> */}
    </>
  );
};

export default SpaceshipStats;
