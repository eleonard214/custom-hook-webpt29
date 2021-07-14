import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from 'react' 

const useDarkMode = (initialValue)=>{
    const [darkMode, setDarkMode]= useLocalStorage('darkMode', initialValue)

    const useEffect(() => {
        const className ='darkmode';
        const element = window.document.body;
        if (enabled){
            element.classList.add(className);
        }else {
            element.classList.remove(className);
        }
    }, [enabled]);
    return [enabled, setDarkMode]
};
export default useDarkMode;