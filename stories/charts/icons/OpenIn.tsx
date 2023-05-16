import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const OpenInIcon: React.FC<SvgIconProps> = props => (
  <SvgIcon
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.4127 12.5775C11.5726 12.7372 11.7818 12.8171 11.9911 12.8171C12.2003 12.8171 12.4096 12.7372 12.5695 12.5775L19.8571 5.28985L19.8642 10.4299C19.8649 10.8813 20.2308 11.2466 20.6822 11.2466H20.6833C21.135 11.246 21.5006 10.8794 21.5 10.4276L21.4902 3.31695C21.49 3.20667 21.4682 3.10183 21.4286 3.00599C21.3887 2.9091 21.3292 2.81828 21.2506 2.7396C21.1715 2.6605 21.08 2.60086 20.9825 2.56089C20.8908 2.52344 20.7908 2.50188 20.6862 2.50021C20.6858 2.5 20.6856 2.5 20.6854 2.50021C20.6834 2.50013 20.6816 2.50018 20.6797 2.50023C20.6769 2.5003 20.674 2.50038 20.6707 2.5H13.5714C13.1198 2.5 12.7536 2.8662 12.7536 3.318C12.7536 3.76979 13.1198 4.13599 13.5714 4.13599H18.6976L11.4127 11.421C11.0934 11.7403 11.0934 12.2582 11.4127 12.5775ZM7.84719 21.5H16.1474C17.5809 21.5 19.1921 21.3531 20.2763 20.2633C21.3517 19.1822 21.4999 17.6373 21.4999 16.1285V15.2417C21.4999 14.7899 21.1336 14.4239 20.6819 14.4239C20.2301 14.4239 19.8639 14.7899 19.8639 15.2417V16.1285C19.8639 17.2866 19.7735 18.4492 19.1166 19.1094C18.4551 19.7747 17.2444 19.8644 16.1474 19.8644H7.84719C6.75255 19.8644 5.54325 19.7744 4.87969 19.1113C4.22597 18.45 4.13578 17.2868 4.13578 16.1285V7.86651C4.13578 6.70826 4.22576 5.54624 4.87781 4.89063C5.5376 4.22727 6.69731 4.13583 7.85221 4.13583H8.75851C9.2103 4.13583 9.5765 3.76962 9.5765 3.31804C9.5765 2.86625 9.2103 2.50004 8.75851 2.50004H7.85221C6.41649 2.50004 4.80226 2.64694 3.71809 3.73698C2.64753 4.8132 2.5 6.35775 2.5 7.86651V16.1285C2.5 17.636 2.64732 19.1799 3.71977 20.2652C4.80938 21.3533 6.41753 21.5 7.84719 21.5Z'
    />
  </SvgIcon>
);

export default OpenInIcon;
