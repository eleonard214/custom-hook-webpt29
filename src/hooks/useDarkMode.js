import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from 'react' 

const useDarkMode = (initialValue)=>{
    const [darkMode, setDarkMode]= useLocalStorage('darkMode', initialValue)

    return[darkMode, setDarkMode]
};
export default useDarkMode;