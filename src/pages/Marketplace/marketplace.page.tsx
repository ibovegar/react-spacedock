import * as React from 'react';

export interface IMarketplaceProps {}

export interface IMarketplaceState {}

export default class Marketplace extends React.Component<
  IMarketplaceProps,
  IMarketplaceState
> {
  constructor(props: IMarketplaceProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>Marketplace</div>;
  }
}
