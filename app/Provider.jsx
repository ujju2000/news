'use client';

import {createContext , useState ,useContext} from 'react' 

export const ContextProvider = createContext(null);
export default function Provider({children}) {
  const [theme, setTheme] = useState(true);
  const [data ,setData] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <ContextProvider.Provider value={{theme , setTheme , data ,setData , loading , setLoading}}>
        {children}
    </ContextProvider.Provider>    
  )
}

export const useProvider =  () => {
    const provider = useContext(ContextProvider);
    return provider;
}
