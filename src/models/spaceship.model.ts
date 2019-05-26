import { IBaseStats } from 'models';

export interface ISpaceship {
  readonly id: string;
  readonly name: string;
  readonly registry: string;
  readonly manufacturer: string;
  readonly manufactured: number;
  readonly type: string;
  readonly height: number;
  readonly length: number;
  readonly price: number;
  readonly baseStats: IBaseStats;
  attachedUpgrades: string[];
}
