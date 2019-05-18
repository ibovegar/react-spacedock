import React from 'react';

export interface IInventoryProps {}

export interface IInventoryState {}

export default class Inventory extends React.Component<
  IInventoryProps,
  IInventoryState
> {
  constructor(props: IInventoryProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>Inventory</div>;
  }
}
