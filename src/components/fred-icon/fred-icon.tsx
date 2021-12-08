import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fred-icon',
  styleUrl: 'fred-icon.scss',
  shadow: true,
})

export class FredIcon {
  @Prop() name: string;

  render() {
    return (
      <material-icon class="fred-icon" name={this.name} size="s"></material-icon>
    );
  }
}
