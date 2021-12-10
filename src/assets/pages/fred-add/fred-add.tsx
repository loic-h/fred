import { Component, h } from '@stencil/core';

@Component({
  tag: 'fred-add',
  styleUrl: 'fred-add.scss',
  shadow: true,
})
export class FredAdd {
  render() {
    return (
      <fred-page class="fred-add">
        <fred-nav slot="bottom-nav">
          <fred-button slot="item-left">
            <fred-icon name="close" size="s"></fred-icon>
          </fred-button>
          <fred-button slot="item-center">
            <fred-icon name="arrow_forward" size="m"></fred-icon>
          </fred-button>
        </fred-nav>
      </fred-page>
    );
  }
}
