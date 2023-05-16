import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
const SaveIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox='0 0 100 100'>
    <path d='M66.375 19.125H25.875C22.1287 19.125 19.125 22.1625 19.125 25.875V73.125C19.125 76.8375 22.1287 79.875 25.875 79.875H73.125C76.8375 79.875 79.875 76.8375 79.875 73.125V32.625L66.375 19.125ZM49.5 73.125C43.8975 73.125 39.375 68.6025 39.375 63C39.375 57.3975 43.8975 52.875 49.5 52.875C55.1025 52.875 59.625 57.3975 59.625 63C59.625 68.6025 55.1025 73.125 49.5 73.125ZM59.625 39.375H25.875V25.875H59.625V39.375Z' />
  </SvgIcon>
);

export default SaveIcon;
