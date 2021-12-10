import { Component, h } from '@stencil/core';

@Component({
  tag: 'fred-page',
  styleUrl: 'fred-page.scss',
  shadow: true,
})
export class FredPage {
  render() {
    return (
      <div class="fred-page">
        <main>
          <slot name="content"></slot>
        </main>
        <slot name="bottom-nav"></slot>
      </div>
    );
  }
}
