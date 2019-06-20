import { Upgrade, Spacecraft } from 'models';

export function isUpgrade(product: Upgrade | Spacecraft): product is Upgrade {
  return ['deflector', 'engine', 'plating', 'stabilizer', 'weapons'].includes(
    (product as Upgrade).storeType
  );
}

export function isSpacecraft(
  product: Upgrade | Spacecraft
): product is Spacecraft {
  return ['spacecraft'].includes((product as Spacecraft).storeType);
}

export default {
  isUpgrade,
  isSpacecraft
};
