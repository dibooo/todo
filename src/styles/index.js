import { Button, Grid, TextField } from "@mui/material";
import { styled } from "@mui/system";
import image from '../assets/image.png'

export const ParagraphErrorStyle = styled("p")(({ theme }) => ({
    color: theme.palette.error.main,
    marginLeft: "10px",
    marginTop: "2px",
    fontSize: "14px",
    wordBreak:'break-word',
  }));
  export const ImageContainerStyled=styled('div')(({theme}) => ({
        height:'196px',
        width:'50%',
        margin:'auto',
        marginTop:'92px',

        background: `url(${image})`,
        backgroundSize:"cover",
        backgroundPosition:'center'
}));
export const AuthPageStyled=styled(Grid)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));
export const AuthPageContainerStyled=styled(Grid)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}));
export const FormStyled=styled('form')(({theme}) => ({
    width: "100%",
    // marginTop: '20%'
}));
export const TextFieldStyled=styled(TextField)(({theme}) => ({
    input: {
        color: '#000',
      },
    // marginTop: '20%'
}));
export const PrimaryButtonStyled=styled(Button)(({theme}) => ({
    background:theme.palette.primary.main,
    color:theme.palette.primary.contrastText,
    width:'100%',
    padding:'2%',
    borderRadius:'50px',
    marginTop:'10%'
}));
export const SecondaryButtonStyled=styled(Button)(({theme}) => ({
    background:theme.palette.secondary.main,
    color:theme.palette.secondary.contrastText,
    width:'100%',
    padding:'2%',
    borderRadius:'50px',
    marginTop:'5%',
    ":hover":{
        background:'#ffcca7'
    }
}));