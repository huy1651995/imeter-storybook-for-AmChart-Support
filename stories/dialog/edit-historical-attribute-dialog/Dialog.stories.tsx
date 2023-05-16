import EditHistoricalAttributeDialog from './EditHistoricalAttributeDialog';
import React from 'react';

export const Dialog = () => {
   return (
      <EditHistoricalAttributeDialog
         title="Attribute History"
         subTitle="Avg Operating Pressure"
         open={true}
         setOpen={() => {}}
         onClose={() => {}}
      />
   );
};

export default {
   title: 'Dialogs/Edit Historical Attribute Dialog',
   component: Dialog,
   parameters: {
      layout: 'fullscreen', // fullscreen, centered, padded
      actions: { disabled: true },
      options: { showPanel: false },
   },
};
