import {createContext,Dispatch,SetStateAction} from 'react'
interface CategoryContextProps {
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
    isLoggedIn:boolean;
    setIsLoggedIn:Dispatch<SetStateAction<boolean>>;
    userId:string;
    setUserId:Dispatch<SetStateAction<string>>;
    cart:any;
    setCart:any
  }
  
  const defaultValues: CategoryContextProps = {
    category: '',
    setCategory: () => {}, // Provide a default value for setCategory
    isLoggedIn:false,
    setIsLoggedIn:()=>{},
    userId:"",
    setUserId:()=>{},
    cart:[],
    setCart:()=>{}

  };
export const CategoryContext=createContext<CategoryContextProps>(defaultValues)