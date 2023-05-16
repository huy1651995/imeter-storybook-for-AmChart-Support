import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const path = 'M34.4992 84.7601C34.5832 84.6552 36.6125 82.1843 41.5838 82.1843C44.0936 82.1843 45.5919 82.8136 47.4889 83.6094C49.8671 84.6071 52.8267 85.8486 58.0308 85.8486C66.0208 85.8486 69.4979 81.2524 69.6417 81.0566C70.5236 79.8598 70.2332 78.1889 68.9755 77.3504C67.717 76.5099 65.9966 76.7822 65.1146 77.979C65.0306 78.0846 63.0013 80.5548 58.0308 80.5548C53.9991 80.5548 51.927 79.6851 49.7339 78.7646C47.6398 77.8862 45.2659 76.8905 41.5838 76.8905C33.5938 76.8905 30.1159 81.4867 29.9721 81.6825C29.0902 82.8799 29.3806 84.5502 30.6391 85.3894C31.1309 85.7172 31.6925 85.875 32.247 85.875C33.1133 85.875 33.9618 85.4896 34.4992 84.7601M58.4906 73.378C57.9247 73.4972 57.4186 73.0319 57.5005 72.486C57.7738 70.6715 57.9233 68.7331 57.9233 66.7167C57.9233 59.2874 53.1834 48.397 49.6215 48.397C46.2518 48.397 41.3197 59.2237 41.3197 66.7167C41.3197 68.9708 41.5048 71.1287 41.8422 73.122C41.9461 73.7343 41.2962 74.2118 40.7011 73.9592C36.673 72.2462 26.0835 66.5935 26.0835 54.4785C26.0835 40.4326 36.1612 35.0548 37.392 28.3197C37.5044 27.7047 38.2988 27.4805 38.775 27.9106C39.7808 28.8209 41.0229 30.4091 41.0229 32.7066C41.0229 36.5679 41.8251 36.5564 41.8251 36.5564C41.8251 36.5564 48.9773 33.413 48.9773 18.9234C48.9773 18.9234 48.9673 17.7747 48.8506 16.7032C48.7872 16.1194 49.3901 15.673 49.9646 15.8884C53.3663 17.1665 62.1279 21.8927 62.1279 36.6749C62.1279 42.6379 61.4866 43.6423 61.1179 45.6329C61.1179 45.6329 66.2051 42.9786 66.8984 34.9789C66.9596 34.2752 67.895 34.0077 68.3598 34.5583C70.2831 36.8368 73.5303 41.9267 73.5303 50.3144C73.5303 61.2394 66.4208 71.7119 58.4906 73.378';

const FireIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox='0 0 100 100'>
    <path fillRule='evenodd' clipRule='evenodd' d={path} />
  </SvgIcon>
);

export default FireIcon;