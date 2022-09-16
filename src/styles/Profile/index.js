import { Avatar, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const ProfileImageStyled=styled(Avatar)(({theme}) => ({
    margin:'auto',
    marginTop:'50px',
    width:'100px',
    height:'100px',
}));
export const ProfileImageEditIconStyled=styled('label')(({theme}) => ({
    position:'absolute',
    left:'52%',
    top:'180px',
    width:'20px',
    height:'20px',
    background:theme.palette.secondary.main,
    cursor:'pointer',
    borderRadius:'50px',
    
    // padding:'10px'
}));

export const ProfileHeaderStyled=styled('h3')(({theme}) => ({
    textAlign:'center',
    fontFamily: "Inter,sans-serif",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "31px",
    lineHeight: "38px",
    marginTop:'10px'
}));
export const TextFieldContainerStyled = styled('div', {
    shouldForwardProp: (propName) =>{
      return propName !== "index" 
    },
  })(({ theme, index }) =>
  
 ({
    width: "90%",
    marginTop: '3%'
})); 
export const TextFieldLabelStyled=styled('h3')(({theme}) => ({
    fontFamily: "Inter,sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "19px",
    lineHeight: "23px",
    color:theme.palette.text.primary,
    paddingBottom:'5px'
}));   
export const TextFieldStyled=styled(TextField)(({theme}) => ({
    fontFamily: "Inter,sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",
    input: {
        color: '#000',
      },
})); 
export const ProfileButtonsContainerStyled=styled('div')(({theme}) => ({
   margin:'auto',
   width:'80%',
   marginTop:'10%',
   [theme.breakpoints.down('sm')]: {
    width:'100%',
  },
})); 
export const ProfileSaveButtonStyled=styled(Button)(({theme}) => ({
    background:theme.palette.primary.main,
    color:theme.palette.primary.contrastText,
    width:'20%',
    padding:'1%',
    borderRadius:'50px',
    marginLeft:'30%',
    ":hover":{
        background:theme.palette.primary.main
    }

})); 
export const ProfileDeleteAccountButtonStyled=styled(Button)(({theme}) => ({
    background:'#F53333',
    color:theme.palette.primary.contrastText,
    // width:'32%',
    marginLeft:'5%',
    padding:'1%',
    borderRadius:'50px',
    ":hover":{
        background:'#F53333'
    }
}));