import { Component, h, Prop } from '@stencil/core';

const sizeMap = {
  's': 'sm',
  'm': 'md'
}
@Component({
  tag: 'fred-icon',
  styleUrl: 'fred-icon.scss',
  shadow: true,
})

export class FredIcon {
  @Prop() name: string;
  @Prop() size: 's' | 'm' = 's';

  render() {
    return (
      <material-icon class="fred-icon " name={this.name} size={sizeMap[this.size]}></material-icon>
    );
  }
}
