import React from 'react'
import { Typography ,Divider ,Box} from '@mui/material'

export default function DataGrid() {
  return (
    <div>
      <Typography variant="h6" sx={{textAlign:'justify' ,margin:'20px'}}>
        A fast and extendable react data table and react data grid. It's a
        feature-rich component available in MIT or Commercial versions. The
        component leverages the power of React and TypeScript, to provide the
        best UX while manipulating an unlimited set of data. It comes with an
        intuitive API for real-time updates, accessibility, as well as theming
        and custom templates, all with blazing fast performance.
        <Box>
          The DataGrid presents information in a structured format of rows and
          columns. The data is displayed in a user-friendly, quick-to-scan and
          interactive way, enabling users to efficiently identify patterns, edit
          data, and gather insights. The component comes in three different
          versions. One available under MIT license and two available under
          commercial license.
        </Box>
      </Typography>
    </div>
  );
}
