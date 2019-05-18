import { IBaseStats, IBuffs } from 'models';

export interface ISpaceship {
  id: string;
  name: string;
  manufacturer: string;
  manufactured: number;
  type: string;
  height: number;
  length: number;
  price: number;
  stats: IBaseStats;
  buffs: IBuffs;
}
