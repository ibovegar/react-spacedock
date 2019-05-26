import { IBaseStats } from 'models';

export interface ISpaceship {
  id: string;
  name: string;
  registry: string;
  manufacturer: string;
  manufactured: number;
  type: string;
  height: number;
  length: number;
  price: number;
  attachedUpgrades: string[];
  baseStats: IBaseStats;
}
