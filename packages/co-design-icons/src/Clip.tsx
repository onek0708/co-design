import * as React from 'react';
import { SVGProps } from 'react';

const SvgClip = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.96 22a.658.658 0 0 1-.372-.116.685.685 0 0 1-.247-.309.705.705 0 0 1 .146-.75l7.8-8.007a5.042 5.042 0 0 0 1.42-3.518c0-1.319-.51-2.584-1.42-3.517a4.784 4.784 0 0 0-3.426-1.457 4.783 4.783 0 0 0-3.427 1.457l-8.187 8.408a3.32 3.32 0 0 0-.92 2.311 3.32 3.32 0 0 0 .935 2.305 3.15 3.15 0 0 0 2.245.96 3.149 3.149 0 0 0 2.252-.944l8.189-8.407a1.6 1.6 0 0 0 .45-1.116 1.6 1.6 0 0 0-.45-1.116 1.518 1.518 0 0 0-1.086-.463c-.408 0-.799.166-1.088.462l-7.8 8.01a.662.662 0 0 1-.94-.009.697.697 0 0 1-.008-.964l7.8-8.008a2.84 2.84 0 0 1 2.035-.865 2.84 2.84 0 0 1 2.035.865c.54.554.842 1.305.842 2.088 0 .784-.303 1.535-.842 2.089l-8.192 8.408a4.472 4.472 0 0 1-3.195 1.329 4.475 4.475 0 0 1-3.182-1.363A4.714 4.714 0 0 1 2 16.498a4.717 4.717 0 0 1 1.295-3.28l8.191-8.406A6.104 6.104 0 0 1 15.846 3a6.108 6.108 0 0 1 4.342 1.86A6.436 6.436 0 0 1 22 9.315a6.44 6.44 0 0 1-1.764 4.476l-7.802 8.007a.662.662 0 0 1-.474.202Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgClip;