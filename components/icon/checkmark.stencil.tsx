import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-icon-checkmark',
  styleUrl: 'stencil.scss',
  shadow: true,
})
export class Checkmark {
  render() {
    return (
      <svg width="20" height="20" viewBox="0 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>✔</title>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.1645 9.72984C2.79771 9.31695 2.16565 9.27958 1.75276 9.64637L0.74761 10.5393C0.334716 10.9061 0.297345 11.5381 0.664139 11.951L6.46246 18.4781C6.62657 18.6628 6.84377 18.7724 7.07068 18.8042C7.35107 18.8437 7.64634 18.7644 7.87461 18.5616L18.9907 8.68669C19.4036 8.31989 19.4409 7.68783 19.0741 7.27494L18.2644 6.36347C17.8977 5.95058 17.2656 5.9132 16.8527 6.28L8.2368 13.9339C7.82391 14.3007 7.19185 14.2634 6.82505 13.8505L3.1645 9.72984Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}
