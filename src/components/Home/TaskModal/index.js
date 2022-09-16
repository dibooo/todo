import { Checkbox, Dialog, DialogContent, DialogTitle, FormControlLabel, IconButton, TextareaAutosize, TextField } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { TaskModalActionsContainerStyled, TaskModalCloseActionStyled, TaskModalSaveActionStyled } from '../../../styles/Home';

function index({open,handleClose,state,handleChangeDescription,handleChangeCompleted,submit,id}) {
  return (
    <Dialog
    fullWidth
     open={open}
     sx={{
       '& .MuiDialogContent-root':{
         padding:'5%'
       }
     }}
   >
     <DialogTitle sx={{color:'#172B4D'}} id="responsive-dialog-title">
        Create New Task
      <IconButton
      aria-label="close"
      onClick={handleClose}
      sx={{
        position: 'absolute',
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
    </DialogTitle>
    <DialogContent>
    <TextField
      multiline
      minRows={10}
      label={state['description']?"":'Task Description'}
      style={{ width: '90%',margin:'auto',marginTop:'10px' }}
      value={state['description']}
      onChange={handleChangeDescription}
      
    />
    <FormControlLabel sx={{marginTop:'80px',marginLeft:'5%'}}  control={<Checkbox onChange={handleChangeCompleted}  checked={state['completed']} />} label="Completed" />
    <TaskModalActionsContainerStyled>
        <TaskModalSaveActionStyled onClick={id?()=>submit(id):submit}>
            Save
        </TaskModalSaveActionStyled>
        <TaskModalCloseActionStyled onClick={handleClose}>
            Close
        </TaskModalCloseActionStyled>
    </TaskModalActionsContainerStyled>
    </DialogContent>
    </Dialog>
  )
}

export default index