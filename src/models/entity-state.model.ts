export interface EntityState<V> {
  ids: string[];
  entities: { [id: string]: V };
}
