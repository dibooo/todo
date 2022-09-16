import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({page,count,handleChange}) {
    
  return (
    
      count>0? <Stack spacing={2}>
      
      <Pagination  shape="rounded" color="primary" sx={{marginLeft:'30%',padding:'30px'}} count={count} page={page} onChange={handleChange} />
    </Stack>:''
    
   
  );
}