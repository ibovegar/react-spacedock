import { BaseStats } from 'models';

export interface Spaceship {
  readonly id: string;
  readonly name: string;
  readonly registry: string;
  readonly manufacturer: string;
  readonly manufactured: number;
  readonly storeType?: string;
  readonly type: string;
  readonly height: number;
  readonly length: number;
  readonly price: number;
  readonly baseStats: BaseStats;
  attachedUpgrades: string[];
}
