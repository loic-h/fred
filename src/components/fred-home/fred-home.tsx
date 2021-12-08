import { Component, h } from '@stencil/core';

@Component({
  tag: 'fred-home',
  styleUrl: 'fred-home.scss',
  shadow: true,
})
export class FredHome {
  render() {
    return (
      <div class="app-home">
        <fred-button url="/add">
          <fred-icon name="add"></fred-icon>
        </fred-button>
      </div>
    );
  }
}
