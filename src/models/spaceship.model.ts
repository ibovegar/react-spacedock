import { IBaseStats } from './base-stats.model';

export interface ISpaceship {
  id: string;
  name: string;
  manufacturer: string;
  manufactured: number;
  type: string;
  height: number;
  length: number;
  price: number;
  upgrades: [];
  baseStats: IBaseStats;
}
