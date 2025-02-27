import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-icon-warning',
  styleUrl: 'stencil.scss',
  shadow: true,
})
export class IconWarning {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-7 -8 38 38">
        <title>Warning</title>
        <g>
          <path
            d="M11.134 3.5C11.5189 2.83333 12.4811 2.83333 12.866 3.5L22.3923 20C22.7772 20.6667 22.2961 21.5 21.5263 21.5H2.47372C1.70392 21.5 1.22279 20.6667 1.6077 20L11.134 3.5Z"
            fill="currentColor"
          />
          <rect
            x="12.9"
            y="15.6504"
            width="1.9"
            height="6.65"
            rx="0.5"
            transform="rotate(-180 12.9 15.6504)"
            fill="white"
          />
          <circle fill="white" cx="11.95" cy="17.55" r="0.95" transform="rotate(-180 11.95 17.55)" />
        </g>
      </svg>
    );
  }
}
