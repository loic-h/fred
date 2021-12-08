import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fred-button',
  styleUrl: 'fred-button.scss',
  shadow: true,
})

export class FredButton {
  @Prop() url: string;

  render() {
    const Tag = this.url ? 'stencil-route-link' : 'button';
    return (
      <Tag url={this.url}>
        <slot />
      </Tag>
    );
  }
}
