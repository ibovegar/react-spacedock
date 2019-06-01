import * as React from 'react';
import { ISpaceship, IAttachedUpgrades } from 'models';
import { LinearProgress, Box, Typography } from '@material-ui/core';
import classes from './spaceship-stats.module.scss';

interface IProps {
  spacecraft: ISpaceship;
  attachedUpgrades: IAttachedUpgrades;
}

const SpaceshipStats: React.FC<IProps> = ({ spacecraft, attachedUpgrades }) => {
  // Only rerender if buffs changes
  const { baseStats } = spacecraft;
  const { engine, deflector, weapons, stabilizer, plating } = attachedUpgrades;

  return (
    <div className={classes.root}>
      {/* <Box m={2}>
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
      </Box> */}
      <Box m={2}>
        <Typography variant="overline">Speed</Typography>
        <LinearProgress
          variant="determinate"
          color="secondary"
          value={baseStats.speed + ((engine && engine.gain) || 0)}
        />
      </Box>
      <Box m={2}>
        <Typography variant="overline">Shield</Typography>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={baseStats.shield + ((deflector && deflector.gain) || 0)}
        />
      </Box>
      <Box m={2}>
        <Typography variant="overline">Damage</Typography>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={baseStats.damage + ((weapons && weapons.gain) || 0)}
        />
      </Box>
      <Box m={2}>
        <Typography variant="overline">Hull</Typography>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={baseStats.hull + ((plating && plating.gain) || 0)}
        />
      </Box>
      <Box m={2}>
        <Typography variant="overline">Manuvrability</Typography>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={
            baseStats.manuvrability + ((stabilizer && stabilizer.gain) || 0)
          }
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
    </div>
  );
};

export default SpaceshipStats;
