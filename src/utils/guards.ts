import { Upgrade, Spaceship } from 'models';

export function isUpgrade(product: Upgrade | Spaceship): product is Upgrade {
  return ['deflector', 'engine', 'plating', 'stabilizer', 'weapons'].includes(
    (product as Upgrade).storeType
  );
}

export function isSpacecraft(
  product: Upgrade | Spaceship
): product is Spaceship {
  return ['spacecraft'].includes((product as Spaceship).storeType);
}

export default {
  isUpgrade,
  isSpacecraft
};
