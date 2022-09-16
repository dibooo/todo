import {grey} from '@mui/material/colors'
// export const customTheme = createTheme({
//     palette: {
//         primary:{
//          main:'#1Ac1dd',
//          light:'#1Ac1dd',
//          dark:'#1Ac1dd',
         
//         }
//     },
//   });
export const theme = (mode) => ({
    overrides: {
        MuiInput: {
          input: {
            "&::placeholder": {
              color: mode==='light'?'#000':'#fff',
            },}}},
    palette: {
      grey,
      mode,
      ...(mode === 'light'
        ? {
            
            // palette values for light mode
            primary:{
                main:'#AB31D6',
                contrastText:'#fff'
            },
            secondary:{
                main:'#FFE2A7',
                contrastText:'#3F2525'

            },
            error:{
                main:'#d32f2f'
            },
            info:{
                main: '#11476c'
            },
            // divider: amber[200],
            text: {
              primary: '#AB31D6',
              secondary:'#241D1D',
            },
            action:{
              hover:{
                buttonHover:'#AB31D6',
                textHover:'#fff'
              }
            }
          }
        : {
            // palette values for dark mode
            primary:{
                main:'#FBCB0A',
                contrastText:'#fff'
            },
            secondary:{
                main:'#172B4D'
            },
            // divider: amber[200],
            text: {
              primary: '#697A84',
              secondary:'#707070',
            },
            // divider: deepOrange[700],
            // background: {
            //   default: deepOrange[900],
            //   paper: deepOrange[900],
            // },
          }),
    },
  });