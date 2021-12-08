import { Component, h } from '@stencil/core';

@Component({
  tag: 'fred-add',
  styleUrl: 'fred-add.scss',
  shadow: true,
})
export class FredHome {
  render() {
    return (
      <div class="fred-add">
        Add page
      </div>
    );
  }
}
