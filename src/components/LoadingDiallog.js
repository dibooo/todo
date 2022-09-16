import { CircularProgress, Dialog, DialogContent } from '@mui/material'
import React from 'react'

function LoadingDiallog({open}) {
 
    console.log(open);
    return (
        <div>
              <Dialog   open={open}>
  <DialogContent>
      <CircularProgress />
      </DialogContent>
    </Dialog>
        </div>
    )
}

export default LoadingDiallog
