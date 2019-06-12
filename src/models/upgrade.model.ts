export interface Upgrade {
  readonly id: string;
  readonly spacecraftRegistry: string;
  readonly type: string;
  readonly storeType?: string;
  readonly name: string;
  readonly manufacturer: string;
  readonly gain: number;
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
