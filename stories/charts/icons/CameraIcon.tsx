import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const CameraIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox='0 0 17 11'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.6703 7.67077L12.4158 5.92806L12.4104 4.63014L14.6703 2.87268V7.67077ZM11.0048 8.09716C11.0048 8.68014 10.5302 9.1548 9.94721 9.1548H3.23575C2.65259 9.1548 2.17811 8.68014 2.17811 8.09716V2.51712C2.17811 1.93414 2.65259 1.45966 3.23575 1.45966H9.94721C10.5302 1.45966 11.0048 1.93414 11.0048 2.51712V8.09716ZM15.6469 0.875629C15.4139 0.76174 15.1368 0.79056 14.9323 0.949588L12.3618 2.94889V2.51712C12.3618 1.1857 11.2786 0.102539 9.94721 0.102539H3.23575C1.90433 0.102539 0.821167 1.1857 0.821167 2.51712V8.09716C0.821167 9.42858 1.90433 10.5117 3.23575 10.5117H9.94721C11.2786 10.5117 12.3618 9.42858 12.3618 8.09716V7.60184L14.9338 9.58987C15.055 9.68344 15.2015 9.73136 15.3489 9.73136C15.4507 9.73136 15.5529 9.70862 15.6479 9.66209C15.8802 9.54803 16.0272 9.31174 16.0272 9.05289V1.48518C16.0272 1.22598 15.8798 0.989518 15.6469 0.875629V0.875629Z'
    />
  </SvgIcon>
);

export default CameraIcon;
