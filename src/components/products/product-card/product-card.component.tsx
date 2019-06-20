import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './product-card.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Spacecraft, Upgrade } from 'models';
import { Button, Divider, Chip, Box } from '@material-ui/core';
import { isSpacecraft } from 'utils/guards';

interface Props extends WithStyles<typeof styles> {
  product: Spacecraft | Upgrade;
  onAddClick: () => void;
}

const ProductCard: React.FC<Props> = props => {
  const { product, classes, onAddClick } = props;

  const imgUrl = isSpacecraft(product)
    ? `${process.env.PUBLIC_URL}/images/spacecraft_lg/${product.spacecraftRegistry}.png`
    : `${process.env.PUBLIC_URL}/images/upgrade_lg/${product.upgradeRegistry}.png`;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        component="img"
        classes={{
          media: classes.img
        }}
        image={imgUrl}
        title="Live from space album cover"
      />
      <CardContent className={classes.content}>
        <Box display="flex" alignItems="center">
          <Typography variant="h5">{product.name}</Typography>
          <Chip
            label={product.storeType.toUpperCase()}
            className={classes.chip}
          />
        </Box>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {product.manufacturer}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.spacecraftRegistry}
        </Typography>
      </CardContent>
      <div className={classes.controls}>
        <Typography component="h6">$ {product.price}</Typography>
        <Divider className={classes.divider} />
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={onAddClick}
        >
          ADD
        </Button>
      </div>
    </Card>
  );
};

export default withStyles(styles)(ProductCard);
