import { Component, h } from '@stencil/core';

@Component({
  tag: 'fred-nav',
  styleUrl: 'fred-nav.scss',
  shadow: true,
})

export class FredButton {
  render() {
    return (
      <ul class="fred-nav">
        <li class="fred-nav__item"><slot name="item-left" /></li>
        <li class="fred-nav__item"><slot name="item-center" /></li>
        <li class="fred-nav__item"><slot name="item-right" /></li>
      </ul>
    );
  }
}
