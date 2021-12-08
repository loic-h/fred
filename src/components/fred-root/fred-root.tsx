import { Component, h } from '@stencil/core';

@Component({
  tag: 'fred-root',
  styleUrl: 'fred-root.scss',
  shadow: true,
})
export class FredRoot {
  render() {
    return (
      <div class="fred-root">
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="fred-home" exact={true} />
            <stencil-route url="/add" component="fred-add" exact={true} />
          </stencil-route-switch>
        </stencil-router>
      </div>
    );
  }
}
