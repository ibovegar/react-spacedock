export interface Upgrade {
  id: string;
  spacecraftRegistry: string;
  storeType: 'deflector' | 'engine' | 'plating' | 'stabilizer' | 'weapons';
  name: string;
  manufacturer: string;
  gain: number;
  isAttached?: boolean;
  spaceshipId?: string;
}

export class AttachedUpgrades {
  engine: Upgrade;
  plating: Upgrade;
  deflector: Upgrade;
  weapons: Upgrade;
  stabilizer: Upgrade;
}

export class AvailableUpgrades {
  engine: Upgrade[] = [];
  plating: Upgrade[] = [];
  deflector: Upgrade[] = [];
  weapons: Upgrade[] = [];
  stabilizer: Upgrade[] = [];
}

export enum UpgradeType {
  Deflector = 'deflector',
  Engine = 'engine',
  Plating = 'plating',
  Stabilizer = 'stabilizer',
  Weapons = 'weapons'
}
