export interface IUpgrade {
  id: string;
  spacecraftId: string;
  spacecraftRegistry: string;
  isAttached: boolean;
  type: string;
  name: string;
  manufacturer: string;
  gain: number;
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
