import React, { useState } from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Typography, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: { padding: theme.spacing(2) }
}));

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  onCompleted: () => void;
}

const MissionProgress: React.FC<Props> = props => {
  const { onCompleted, className } = props;
  const [progress, setProgress] = useState(0);
  const classes = useStyles();
  const rootClasses = clsx(classes.root, className);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          onCompleted();
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, [progress, onCompleted]);

  return (
    <div className={rootClasses}>
      <div>
        <Typography variant="h5" gutterBottom>
          MISSION IN PROGRESS
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          color="secondary"
        />
      </div>
    </div>
  );
};

export default MissionProgress;
