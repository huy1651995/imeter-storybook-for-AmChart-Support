import { DialogContent } from '@material-ui/core';
import React from 'react';
import {
   Grid as DxGrid,
   TableHeaderRow,
   TableGroupRow,
   GroupingPanel,
   DragDropProvider,
   Toolbar,
   TableColumnResizing,
   Table,
} from '@devexpress/dx-react-grid-material-ui';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(1),
      overflow: 'auto',
      alignItems: 'flex-start',
      display: 'flex',
      height: 800,
      width: 1200,
      flexDirection: 'row',
      justifyContent: 'flex-start',
   },
}));

const attributeColumns = [
   { name: 'avgOperationPressure', title: 'Avg Operation Pressure' },
   { name: 'effectiveStartDate', title: 'Effective Start Date' },
   { name: 'updatedBy', title: 'updatedBy' },
];

const attributeHistoricalMockData = [
   { avgOperationPressure: 45, effectiveStartDate: '02/01/2022', updatedBy: 'John Smith' },
   { avgOperationPressure: 40, effectiveStartDate: '01/01/2022', updatedBy: 'John Smith' },
];

export type EditHistoricalAttributeDialogContentProps = {
   equipmentData: any;
};
// const Root: React.FC = (props) => <DxGrid.Root {...props} style={{ height: '100%' }} />;

const EditHistoricalAttributeDialogContent: React.FunctionComponent<EditHistoricalAttributeDialogContentProps> =
   ({ equipmentData }) => {
      const classes = useStyles();

      return (
         <DialogContent className={classes.root}>
            <Grid container direction="row" alignItems="center">
               {/* Equipment Information */}
               <Grid item xs={12} justifyContent="center">
                  <h1>Asset Image</h1>
               </Grid>

               {/* Historical Attribute Table */}
               <Grid item xs={12} justifyContent="center">
                  {/* <TableData /> */}
                  <h1>Attribute Data Table</h1>
               </Grid>
            </Grid>
         </DialogContent>
      );
   };

export default EditHistoricalAttributeDialogContent;
