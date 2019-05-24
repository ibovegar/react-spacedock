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

export interface IUpgrade {
  id: string;
  spacecraftRegistry: string;
  type: string;
  name: string;
  manufacturer: string;
  gain: number;
}
