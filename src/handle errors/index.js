import { toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { removeItemFromLocalStorage, setItemInLocalStorage } from "../helpers";
export const handleError = (error,type) => {
  if (error.response) {
    /*return */
    if(error.message==='Network Error')
    {
      window.location='/'
    }
    handleResponseError({
      data: error.response.data,
      status: error.response.status,
      headers: error.response.headers,
      type
    });
  } else if (error.request) {
    return error.request;
  } else {
    console.log(error);
  }
};
const handleResponseError = (result) => {
  console.log(result);
  if (result.status === 403 || result.status >= 500) {
    setItemInLocalStorage('serverError',result.data.message)
    // window.location = window.location.href;

    // const cookies = new Cookies();
    // cookies.set("myCat", "Pacman", {
    //   path: "/",
    //   expires: new Date(new Date().getTime() + 1000),
    // });
    // 
  } else if (result.status === 400 ) {
    if(result.type==='notification')
    toast.error(result.data, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } 

  else if (result.status >= 404&&result.status<500) {
    console.log(result);
    toast(result.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  else if(result.status===401){
    removeItemFromLocalStorage('auth')
    window.location='/'
  }
 
 
      
}
