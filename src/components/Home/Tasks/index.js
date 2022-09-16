import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {OptionsContainerStyled, TasksContainerStyled, TasksHeaderButtonStyled,TasksHeaderContainerStyled,TasksHeaderStyled} from "../../../styles/Home"
import Option from './option'
import TaskModal from '../TaskModal'

import todo from '../../../assets/todo.svg'
import completed from '../../../assets/completed.svg'
import Task from './Task'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask, getTask, getTasks, taskSelector, tasksSelector, updateTask } from '../../../redux/slices/taskSlice'
import LoadingDiallog from '../../LoadingDiallog'
import { ToastContainer } from 'react-toastify'
import PaginationControlled from '../../pagination'
import { tasksLimit } from '../../../constants/Home'

function Index() {
    const { isFetching, isSuccess,data } = useSelector(
        tasksSelector
      );
      const taskData = useSelector(
        taskSelector
      );
      console.log(data);
const [open, setOpen] = useState(false)
const [action, setAction] = useState('')
const [page, setPage] = useState(1)
const [task, setTask] = useState({
    description:'',
    completed:false
})
const [itemActive, setItemActive] = useState('Todo')
const dispatch=useDispatch()
useEffect(() => {   
    dispatch(getTasks({completed:false}))
   }, [isSuccess])
   useEffect(() => {   
    setTask(taskData.data)
   }, [taskData.data])
const addTaskSubmit=()=>{
    dispatch(addTask(task))
    setOpen(false)
}
const handleChangeDescription=(event)=>{
        const {value}=event.target
        setTask(prevState => ({
            ...prevState,
            description: value
         }))
    
}


const handleChangeComplete=(event)=>{
    const {checked}=event.target
    setTask(prevState => ({
        ...prevState,
        completed: checked
     }));

}
const handleChangePagination=(event,value)=>{
    setPage(value)
}
const  getTaskByCompleted=(name)=>{
    setItemActive(name)
    let completed
    if(name==='Todo'){    
        completed=false
    }
    else
    completed=true
 dispatch(getTasks({completed}))

}
const submitDelete=(id)=>{
    dispatch(deleteTask({id}))
}
const submitUpdate=(id)=>{
    setAction(id)
    setOpen(true)
    dispatch(getTask({id}))
}
const updateTaskSubmit=(id)=>{
    dispatch(updateTask({id,task}))
    setOpen(false)
}

  return (
    <div>
        {open&&<TaskModal handleChangeDescription={handleChangeDescription} handleChangeCompleted={handleChangeComplete} handleClose={()=>setOpen(false)} open={open} state={task} submit={!action?addTaskSubmit:updateTaskSubmit} id={action} />}
        { isFetching&& <LoadingDiallog open={isFetching}/>}
        { taskData.isFetching&& <LoadingDiallog open={taskData.isFetching}/>}
      <ToastContainer />
<TasksHeaderContainerStyled>
    <TasksHeaderStyled>
    My tasks
    </TasksHeaderStyled>
    <TasksHeaderButtonStyled onClick={()=>{
        setTask({
            completed:false,
            description:''
        })
        setOpen(true)
        }}>
    Create New Task +
    </TasksHeaderButtonStyled>
</TasksHeaderContainerStyled>
    <Grid container>
  
    <Grid item lg={3} md={4} sm={6} xs={12} sx={{ borderRight:'2px solid #FFE2A7',}}>
        <OptionsContainerStyled>
        <Option submit={getTaskByCompleted} itemActive={itemActive} name='Todo' icon={todo}/>
        <Option submit={getTaskByCompleted}  itemActive={itemActive}  name='Completed' icon={completed}/>
        </OptionsContainerStyled>
    </Grid>
    <Grid item lg={9} md={8} sm={6} xs={12}>
        <TasksContainerStyled>
            {data&&data.slice((page-1)*tasksLimit,(page-1)*tasksLimit+tasksLimit).map((item,index)=>{
              let date=new Date(item.createdAt)  
              return(
            <Task submitUpdate={submitUpdate} submitDelete={submitDelete} id={item._id} completed={item.completed} description={item.description} date={`${date.getUTCFullYear()+'/'+(date.getUTCMonth()+1)+'/'+date.getUTCDate()}`}/>
              )
})}
        {/* <Task completed={'true'} description='TASK DESCRIPTION' date='2020/5/2'/>
        <Task completed={'false'} description='TASK DESCRIPTION' date='2020/6/2'/>
        <Task completed={'false'} description='TASK DESCRIPTION' date='2020/7/2'/> */}
           <PaginationControlled page={page} count={Math.ceil(data.length/tasksLimit)} handleChange={handleChangePagination} />      
        </TasksContainerStyled>
    </Grid>
    </Grid>
    </div>
  )
}

export default Index