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
        <stencil-route-link url="/add">
          <button>Add</button>
        </stencil-route-link>
      </div>
    );
  }
}
