import { Avatar, Button } from "@mui/material";
import { styled } from "@mui/system";
import image from '../../assets/image.png'
import weather from '../../assets/weather.png'
import task from '../../assets/task.svg'

export const NavbarStyled=styled('div')(({theme}) => ({
    width: "100%",
}));
export const NavBarLogoStyled=styled('div')(({theme}) => ({
    margin:'10px 0 10px 4%',
    background: `url(${image})`,
    backgroundSize:"cover",
    backgroundPosition:'center',
    height:'40px',
    width:'40px',
    display: 'inline-block',
    cursor:'pointer'

}))
export const NavBarProfileStyled=styled(Avatar)(({theme}) => ({
    float:'right',
    margin:'10px 6% 10px 0',
    height:'40px',
    width:'40px',
    cursor:'pointer'
}))



export const WeatherBoxStyled=styled('div')(({theme}) => ({
    width:'90%',
    margin:'auto',
    marginTop:'20px',
    background:theme.palette.secondary.main,
    borderRadius:'37px',
    color:theme.palette.secondary.contrastText,
    fontFamily: "Inter ,sans-serif",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "35px",
    lineHeight: "81px"
}))
export const WeatherBoxLeftSideStyled=styled('div')(({theme}) => ({
    margin:'5% 0 2% 8%',
    width:'100%'
 
}))
export const WeatherBoxRightSideStyled=styled('div')(({theme}) => ({
    margin:'5% 0 2% 10%',
}))
export const WeatherBoxRightSideImageStyled=styled('div')(({theme}) => ({
    marginLeft:'10%',
    background: `url(${weather})`,
    backgroundSize:"cover",
    backgroundPosition:'center',
    height:'150px',
    width:'40%',
    display: 'inline-block',
}))
export const WeatherBoxRightSideWeatherTextStyled=styled('div')(({theme}) => ({
   color:theme.palette.text.primary,
   display: 'inline-block',
   
})) 


export const TasksHeaderContainerStyled=styled('div')(({theme}) => ({
   width:'90%',
   margin:'auto',
   marginTop:'10px'  
 })) 
 export const TasksHeaderStyled=styled('div')(({theme}) => ({
    // marginLeft:'2%',
    fontFamily: "Inter ,sans-serif",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "33px",
    lineHeight: "40px",
    display:'inline-block',
    
  })) 
  export const TasksHeaderButtonStyled=styled('button')(({theme}) => ({
    background:theme.palette.primary.main,
    color:theme.palette.primary.contrastText,
    float:'right',
    width:'20%',
    padding:'10px',
    border:'none',
    borderRadius:'50px',
    cursor:'pointer'
  })) 



  export const OptionsContainerStyled=styled('div')(({theme}) => ({
   marginTop:'40px',
   marginLeft:'20%'
  })) 
  export const OptionContainerStyled = styled('div', {
    shouldForwardProp: (propName) =>{
      return propName !== "name"&& propName !== "itemActive"
    },
  })(({ theme, name,itemActive }) =>
  
 ({
    background:name===itemActive?'rgba(171, 49, 214, 0.22)':'#EFEFEF',
    color:theme.palette.text.secondary,
    width:'70%',
    borderRadius:'13px',
    padding:'10px',
    marginBottom:'40px',
    cursor:'pointer'
  })) 
  export const TasksContainerStyled=styled('div')(({theme}) => ({
    width:'80%',
    margin:'auto',
    marginTop:'10px'
   })) 
  export const TaskContainerStyled=styled('div')(({theme}) => ({
    width:'100%',
    paddingTop:'20px',
   })) 
  export const TaskImageStyled=styled('img')(({theme}) => ({
    height:'56px',
    width:'20%',
    backgroundSize:"cover",
    backgroundPosition:'center',
    display:'inline-block'
   })) 
   export const TaskDescriptionStyled=styled('h3')(({theme}) => ({
    fontFamily: "Inter,sans-serif",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "27px",
    width:'200px'
   })) 
   export const TaskBodyStyled=styled('h3')(({theme}) => ({
    fontFamily: "Inter,sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
    color:'#8C8C8C',
    paddingTop:'5px'
   })) 
   export const TaskActionContainerStyled=styled('div')(({theme}) => ({
    float:'right',
    display:'table',
    marginTop:'30px'
   })) 
   export const TaskActionStyled=styled('img')(({theme}) => ({
    marginRight:'20%',
    width:'30%',
    cursor:'pointer'
   })) 


   export const TaskModalActionsContainerStyled=styled('div')(({theme}) => ({
   width:'90%',
   margin:'auto',
   marginTop:'80px'
   })) 
   export const TaskModalSaveActionStyled=styled(Button)(({theme}) => ({
    width:'20%',
    background:theme.palette.primary.main,
    color:theme.palette.primary.contrastText,
    marginLeft:'5%',
    padding:'1%',
    borderRadius:'50px',
    ":hover":{
        background:theme.palette.primary.main
    }


    })) 
    export const TaskModalCloseActionStyled=styled(Button)(({theme}) => ({
        width:'20%',
        background:theme.palette.secondary.main,
        color:theme.palette.secondary.contrastText,
        marginLeft:'5%',
        padding:'1%',
        borderRadius:'50px',
        ":hover":{
            background:'#ffcca7'
        }
        })) 

   

  