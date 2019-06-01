export interface IUpgrade {
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

export interface IAttachedUpgrades {
  engine: IUpgrade;
  plating: IUpgrade;
  deflector: IUpgrade;
  weapons: IUpgrade;
  stabilizer: IUpgrade;
}

export interface IAvailableUpgrades {
  engine: IUpgrade[];
  plating: IUpgrade[];
  deflector: IUpgrade[];
  weapons: IUpgrade[];
  stabilizer: IUpgrade[];
}

export enum UpgradeType {
  Deflector = 'deflector',
  Engine = 'engine',
  Plating = 'plating',
  Stabilizer = 'stabilizer',
  Weapons = 'weapons'
}
