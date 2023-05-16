import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const AddMultipleIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox='0 0 24 24'>
    <path fillRule='evenodd' clipRule='evenodd' d='M4.14828 17.5087C4.20679 17.5224 4.26511 17.529 4.32283 17.5288C4.67489 17.5288 4.99344 17.2868 5.07595 16.9292C5.17195 16.5126 4.91231 16.0973 4.49598 16.0015C4.14273 15.92 3.88626 15.5969 3.88626 15.2333V5.8856C3.88626 5.23938 4.41208 4.71337 5.0585 4.71337H14.406C14.7954 4.71337 15.1226 4.99145 15.1843 5.37446C15.2523 5.79634 15.6484 6.08256 16.0709 6.01532C16.4928 5.94728 16.7796 5.55019 16.7118 5.12851C16.5285 3.99158 15.5588 3.16626 14.406 3.16626H5.0585C3.55899 3.16626 2.33936 4.38609 2.33936 5.8856V15.2333C2.33936 16.3274 3.08316 17.2632 4.14828 17.5087ZM17.4205 21.0047C18.9408 21.0047 20.1775 19.7678 20.1775 18.2477V17.1461L20.1777 17.1288V9.35912C20.1777 7.83899 18.9408 6.60229 17.4207 6.60229L8.53238 6.60229C7.01225 6.60229 5.77535 7.83899 5.77535 9.35912L5.77535 18.2475L5.77539 18.2591C5.77566 18.3265 5.77837 18.3933 5.78342 18.4595C5.89192 19.881 7.08331 21.0047 8.53219 21.0047H17.4205ZM16.322 14.6392C16.797 14.6392 17.182 14.2544 17.182 13.7794C17.182 13.3044 16.797 12.9194 16.322 12.9194H13.951V10.5482C13.951 10.0732 13.566 9.68821 13.091 9.68821C12.616 9.68821 12.2312 10.0732 12.2312 10.5482V12.9194H9.86C9.385 12.9194 9 13.3044 9 13.7794C9 14.2544 9.385 14.6392 9.86 14.6392H12.2312V17.0104C12.2312 17.4854 12.616 17.8704 13.091 17.8704C13.566 17.8704 13.951 17.4854 13.951 17.0104V14.6392H16.322Z' />
  </SvgIcon>
);

export default AddMultipleIcon;
