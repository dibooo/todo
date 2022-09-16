import React from 'react'
import dateImage from '../../../assets/clarity_date-line.svg'
import completedImage from '../../../assets/completed2.svg'
import task from '../../../assets/task.svg'
import edit from '../../../assets/edit.svg'
import deleteImage from '../../../assets/delete.svg'



import { TaskActionContainerStyled, TaskActionStyled, TaskBodyStyled, TaskContainerStyled, TaskDescriptionStyled, TaskImageStyled } from '../../../styles/Home'
function Task({description,date,completed,id,submitDelete,submitUpdate}) {
  return (
   <TaskContainerStyled>
    <img src={task}/>
    <div style={{display:'inline-block',marginLeft:'5%',position:'relative',top:'25px'}}>
    <TaskDescriptionStyled>
    {description}
    </TaskDescriptionStyled>
    <TaskBodyStyled>
      <img src={dateImage}/>
      <span style={{marginLeft:'5%',position:'relative',bottom:'5px'}}> creation date : {date}</span> 
    </TaskBodyStyled>
    <TaskBodyStyled>
      <img src={completedImage}/>
      <span style={{marginLeft:'7%',position:'relative',bottom:'5px'}}> completed: {completed}</span> 
    </TaskBodyStyled>
    </div>
    <TaskActionContainerStyled>
        <TaskActionStyled onClick={()=>submitUpdate(id)}  src={edit}/> 
        
        <TaskActionStyled onClick={()=>submitDelete(id)} src={deleteImage}/>     
       
    </TaskActionContainerStyled>
   </TaskContainerStyled>
  )
}

export default Task