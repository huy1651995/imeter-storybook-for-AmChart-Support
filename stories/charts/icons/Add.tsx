import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const AddIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M11.1001 7.50705C11.1001 7.0095 11.5034 6.60623 12.0009 6.60623C12.4985 6.60602 12.902 7.0095 12.9018 7.50705V11.0389H16.4336C16.9312 11.0386 17.3346 11.4421 17.3344 11.9397C17.3344 12.4372 16.9312 12.8405 16.4336 12.8405H12.9018L12.902 16.3723C12.9018 16.8698 12.4985 17.2731 12.0009 17.2733C11.7523 17.2731 11.5271 17.1723 11.3641 17.0091C11.2009 16.8464 11.1001 16.6212 11.1001 16.3723V12.8405H7.56827C7.3196 12.8405 7.09419 12.7397 6.93141 12.5767C6.76822 12.4135 6.66745 12.1883 6.66724 11.9399C6.66745 11.4421 7.07073 11.0389 7.56827 11.0389H11.1001V7.50705ZM8.06414 21.5H15.9254C17.7105 21.5 19.2138 21.3324 20.2787 20.2674C21.3435 19.2019 21.5 17.7187 21.5 15.9324V8.06743C21.5 6.28131 21.3435 4.78764 20.2787 3.73265C19.2138 2.66738 17.7105 2.5 15.9254 2.5H8.0434C6.28953 2.5 4.7862 2.66738 3.72156 3.73265C2.65649 4.79791 2.5 6.29179 2.5 8.03601V15.9324C2.5 17.7187 2.65649 19.2019 3.72156 20.2674C4.7862 21.3324 6.28953 21.5 8.06414 21.5V21.5Z' />
  </SvgIcon>
);

export default AddIcon;