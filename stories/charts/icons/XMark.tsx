import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const XMarkIcon: (props: SvgIconProps) => JSX.Element = props => (
  <SvgIcon {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.5 16.1283C21.5 17.6371 21.3518 19.1822 20.2767 20.2633C19.1925 21.3531 17.581 21.5 16.1477 21.5H14.9342C14.4825 21.5 14.1163 21.1338 14.1163 20.6822C14.1163 20.2306 14.4825 19.8644 14.9342 19.8644H16.1477C17.2447 19.8644 18.4553 19.7746 19.1169 19.1094C19.7736 18.4492 19.8642 17.2865 19.8642 16.1283V15.1506C19.8642 14.699 20.2304 14.3328 20.682 14.3328C21.1338 14.3328 21.5 14.699 21.5 15.1506V16.1283ZM4.136 7.86648V9.28234C4.136 9.73413 3.76979 10.1003 3.318 10.1003C2.86621 10.1003 2.5 9.73413 2.5 9.28234V7.86648C2.5 6.35771 2.64753 4.81337 3.7181 3.73694C4.80249 2.6469 6.41652 2.5 7.85246 2.5H9.06596C9.51754 2.5 9.88375 2.86621 9.88375 3.318C9.88375 3.76979 9.51754 4.136 9.06596 4.136H7.85246C6.69734 4.136 5.53762 4.22744 4.87803 4.89059C4.22577 5.5462 4.136 6.70843 4.136 7.86648ZM9.06596 19.8644C9.51754 19.8644 9.88375 20.2306 9.88375 20.6822C9.88375 21.1338 9.51754 21.5 9.06596 21.5H7.84744C6.41777 21.5 4.8094 21.3533 3.71999 20.2652C2.64732 19.1799 2.5 17.6358 2.5 16.1283V15.1506C2.5 14.699 2.86621 14.3328 3.318 14.3328C3.76979 14.3328 4.136 14.699 4.136 15.1506V16.1283C4.136 17.2868 4.22598 18.45 4.87971 19.1113C5.54348 19.7744 6.75259 19.8644 7.84744 19.8644H9.06596ZM19.8642 9.28234C19.8642 9.73413 20.2304 10.1003 20.682 10.1003C21.1338 10.1003 21.5 9.73413 21.5 9.28234V7.86648C21.5 6.35646 21.3516 4.81107 20.2767 3.73694C19.1925 2.6469 17.581 2.5 16.1477 2.5H14.9342C14.4825 2.5 14.1163 2.86621 14.1163 3.318C14.1163 3.76979 14.4825 4.136 14.9342 4.136H16.1477C17.2447 4.136 18.4555 4.22556 19.1186 4.89226C19.7738 5.54704 19.8642 6.70864 19.8642 7.86648V9.28234ZM14.9827 8.23298C15.2933 7.92234 15.797 7.92234 16.1076 8.23299C16.4183 8.54363 16.4183 9.04729 16.1076 9.35793L13.2953 12.1703L16.108 14.9831C16.4187 15.2937 16.4187 15.7974 16.108 16.108C15.7974 16.4187 15.2937 16.4187 14.9831 16.108L12.1703 13.2953L9.35793 16.1076C9.04729 16.4183 8.54363 16.4183 8.23299 16.1076C7.92234 15.797 7.92234 15.2933 8.23299 14.9827L11.0454 12.1703L8.23336 9.35831C7.92271 9.04766 7.92271 8.544 8.23336 8.23336C8.54401 7.92271 9.04766 7.92271 9.35831 8.23336L12.1703 11.0454L14.9827 8.23298Z'
    />
  </SvgIcon>
);

export default XMarkIcon;
