import { Component, h } from '@stencil/core';

@Component({
  tag: 'fred-home',
  styleUrl: 'fred-home.scss',
  shadow: true,
})
export class FredHome {
  render() {
    return (
      <div class="fred-home">
        <main>

        </main>
        <fred-nav class="bottom-nav">
          <fred-button slot="item-left" url="/add">
            <fred-icon name="search" size="s"></fred-icon>
          </fred-button>
          <fred-button slot="item-center" url="/add">
            <fred-icon name="shuffle" size="m"></fred-icon>
          </fred-button>
          <fred-button slot="item-right" url="/add">
            <fred-icon name="add" size="s"></fred-icon>
          </fred-button>
        </fred-nav>
      </div>
    );
  }
}
