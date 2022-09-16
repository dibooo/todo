
      export const  setItemInLocalStorage=(key,value)=>{
        localStorage.setItem(key,value)
      }
      export const  getValueItemFromLocalStorage=(key)=>{
        return localStorage.getItem(key)
      }
      export const  removeItemFromLocalStorage=(key)=>{
        return localStorage.removeItem(key)
      }
   