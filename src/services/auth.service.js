export const setUserToken=(new_token)=>{
    localStorage.setItem("auth",new_token );
  }

  export const getUserToken=()=>{
     return  localStorage.getItem("auth");
  }

 export const removeUserToken=()=>{
  return  localStorage.removeItem("auth");
}

