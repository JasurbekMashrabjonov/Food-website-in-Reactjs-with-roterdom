import { createContext, useReducer } from "react";
import reduce from "./reduce"
export const ContextProvider = createContext();

export default function MealMenu({ children }) {
   const  initialState ={
        posts:[],
        name:[],
        categories:[],
        addClassSettings:'',
        addClassLeft :'',
        isClickLeft:false
    }
    const [value,dispatch] = useReducer(reduce,initialState)
        value.setData = (posts)=>{
            dispatch({type:"POST",payload:posts})
        }
        value.setCategory = (categories)=>{
            dispatch({type:"CATEGORY",payload:categories})
        }
        value.setName = (name)=>{
            dispatch({type:"ID",payload:name})
        }
        value.setIsClickLeft = (posts)=>{
            dispatch({type:"CLICKLEFT",payload:posts})
        }
  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
}
