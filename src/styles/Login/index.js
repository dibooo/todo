import { Button, Grid, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const TextFieldContainerStyled = styled('div', {
    shouldForwardProp: (propName) =>{
      return propName !== "index" 
    },
  })(({ theme, index }) =>
  
 ({
    width: "100%",
    marginTop: '10%'
}));

