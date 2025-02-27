import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-icon-information',
  styleUrl: 'stencil.scss',
  shadow: true,
})
export class IconInformation {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-10 -10 38 38">
        <title>Information</title>
        <g>
          <path
            fill="currentColor"
            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
          />
          <path
            fill="white"
            d="M9 8.5C9 8.22386 9.22386 8 9.5 8H10.5C10.7761 8 11 8.22386 11 8.5V14.5C11 14.7761 10.7761 15 10.5 15H9.5C9.22386 15 9 14.7761 9 14.5V8.5Z"
          />
          <circle fill="white" cx="10" cy="6" r="1" />
        </g>
      </svg>
    );
  }
}
