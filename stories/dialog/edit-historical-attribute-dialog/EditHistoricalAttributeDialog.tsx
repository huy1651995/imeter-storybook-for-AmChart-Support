import { PencilFill, Plus } from '@eog/geode-iconsv3';
import { Dialog, DialogActions, DialogContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import { GeodeButton, GeodeIconButton } from '@eog/geode-core';
import { DialogTitle } from '@material-ui/core';
import EditHistoricalAttributeDialogContent from './EditHistoricalAttributeDialogContent';

import * as equipmentMockData from './mock-data';

export type EquipmentData = {
   propertyId: string;
   assetId?: number;
   itemId?: number;
   categoryName?: string;
   categoryShortName?: string;
   assetDesc?: string;
   itemDesc?: string;
   barcode?: string;
   stockNumber?: number;
   serialNumber?: string;
   productCd?: string | null;
};

const useStyles = makeStyles((theme) => ({
   dialogContent: {
      padding: theme.spacing(1),
      overflow: 'auto',
      alignItems: 'flex-start',
      display: 'flex',
      height: 800,
      width: 1200,
      flexDirection: 'column',
      justifyContent: 'flex-start',
   },

   footer: {
      borderRadius: '0px 0px 4px 4px',
      boxShadow: 'inset 0px 1px 0px rgba(19,23,28,0.1)',
   },

   //Dialog Title
   rootTitle: {
      borderRadius: '4px 4px 0px 0px',
      boxShadow: 'inset 0px -1px 0px rgba(19,23,28,0.1)',
   },
   title: {
      display: 'flex',

      fontSize: '20px',
      fontWeight: 500,
   },
   subTitle: {
      display: 'flex',
      color: 'rgba(19, 23, 28, 0.62)',
      fontSize: '12px',
      fontWeight: 400,
   },
   centerButton: {},
   buttons: {
      '& svg': {
         fill: 'currentColor',
      },
   },
   exitEditButton: {
      color: '#D23131',
      border: '1px solid #D23131',
   },
}));

const ConfirmationDialog: React.FC<{
   open: boolean;
   onClose: () => void;
   onConfirm: () => void;
}> = ({ open, onClose, onConfirm }) => {
   return (
      <Dialog id="targetButton12" disableEnforceFocus maxWidth="lg" open={open} onClose={onClose}>
         <DialogTitle>Exit Edit Mode?</DialogTitle>
         <DialogContent>Any changes you have made will be lost.</DialogContent>
         <DialogActions>
            <Grid container direction="row" alignItems="center">
               <Grid item xs={12} direction="row">
                  <Grid container justifyContent="flex-end" spacing={2}>
                     <Grid item>
                        <GeodeButton color="secondary" onClick={onClose}>
                           Cancel
                        </GeodeButton>
                     </Grid>
                     <Grid item>
                        <GeodeButton color="secondary" onClick={onConfirm} variant="contained">
                           Yes, Exit
                        </GeodeButton>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </DialogActions>
      </Dialog>
   );
};

export type EditHistoricalAttributeDialogProps = {
   title: string;
   subTitle?: string;
   open: boolean;
   setOpen: (open: boolean) => void;
   onClose: () => void;
};

const EditHistoricalAttributeDialog: React.FunctionComponent<
   EditHistoricalAttributeDialogProps
> = ({ open, setOpen, onClose, title, subTitle }) => {
   const classes = useStyles();

   const [isExitConfirmOpen, setIsExitConfirmOpen] = useState(false);
   const [isEditMode, setIsEditMode] = useState(false);

   const selectedEquipment = equipmentMockData.default[0];

   return (
      <>
         <Dialog id="targetButton1" disableEnforceFocus maxWidth="lg" open={open} onClose={onClose}>
            {/* Title */}
            <DialogTitle className={classes.rootTitle}>
               <Grid container direction="row" alignItems="center">
                  <Grid item xs={3} direction="row" justifyContent="flex-start">
                     <div>
                        <div className={classes.title}> {title}</div>
                        <div className={classes.subTitle}>{subTitle}</div>
                     </div>
                  </Grid>

                  <Grid item xs={8} direction="row">
                     <Grid container justifyContent="flex-end" spacing={2}>
                        <Grid item>
                           <GeodeButton
                              className={classes.buttons}
                              variant="outlined"
                              color="secondary"
                              startIcon={<Plus />}
                           >
                              Add a Record
                           </GeodeButton>
                        </Grid>
                        <Grid item>
                           {isEditMode ? (
                              <GeodeButton
                                 className={classes.exitEditButton}
                                 variant="outlined"
                                 onClick={() => setIsExitConfirmOpen(true)}
                              >
                                 Exit Edit Mode
                              </GeodeButton>
                           ) : (
                              <GeodeButton
                                 className={classes.buttons}
                                 variant="outlined"
                                 color="secondary"
                                 startIcon={<PencilFill />}
                                 onClick={() => setIsEditMode(!isEditMode)}
                              >
                                 Edit Attribute
                              </GeodeButton>
                           )}
                        </Grid>
                     </Grid>
                  </Grid>

                  <Grid container item xs={1} direction="row" justifyContent="center">
                     <GeodeIconButton size="small" onClick={onClose}>
                        <CloseIcon />
                     </GeodeIconButton>
                  </Grid>
               </Grid>
            </DialogTitle>
            {/* Content */}
            <EditHistoricalAttributeDialogContent equipmentData={selectedEquipment} />
            {/* Footer & Actions */}
            <DialogActions className={classes.footer}>
               <Grid container direction="row" alignItems="center">
                  <Grid item xs={12} direction="row">
                     <Grid container justifyContent="flex-end" spacing={2}>
                        <Grid item>
                           <GeodeButton color="secondary">Cancel</GeodeButton>
                        </Grid>
                        <Grid item>
                           <GeodeButton color="secondary" variant="contained">
                              Save Edits
                           </GeodeButton>
                        </Grid>
                     </Grid>
                  </Grid>
               </Grid>
            </DialogActions>
         </Dialog>
         //* Confirmation Dialog */
         <ConfirmationDialog
            open={isExitConfirmOpen}
            onClose={() => setIsExitConfirmOpen(false)}
            onConfirm={() => {
               console.log('Confirmation');
               setIsExitConfirmOpen(false);
               setIsEditMode(false);
            }}
         />
      </>
   );
};

export default EditHistoricalAttributeDialog;
