import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const ChartMinMax: React.FC<SvgIconProps> = props => (
  <SvgIcon {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.8663 14.1262L12.425 17.7582C12.2349 18.0384 11.7846 18.0584 11.6145 17.7582L9.17318 14.1262C8.95305 13.786 9.20319 13.3457 9.59341 13.3457H11.4044V8.63313H9.60342C9.20319 8.63313 8.93304 8.19288 9.18318 7.8527L11.6245 4.22068C11.8146 3.94052 12.2649 3.92051 12.435 4.22068L14.8763 7.8527C15.0965 8.19288 14.8463 8.63313 14.4561 8.63313H12.6451V13.3457H14.4461C14.8463 13.3457 15.1165 13.786 14.8663 14.1262ZM3.56006 20.2996V3.71039C3.56006 3.31017 3.87023 3 4.27045 3C4.67068 3 4.98085 3.31017 4.98085 3.71039V19.5992H20.8497C21.2499 19.5992 21.5601 19.9094 21.5601 20.3096C21.5601 20.7098 21.2299 21 20.8497 21H4.27045C3.87023 21 3.56006 20.6898 3.56006 20.2896V20.2996Z'
    />
  </SvgIcon>
);

export default ChartMinMax;