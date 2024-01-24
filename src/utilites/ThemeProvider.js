import {React, useState, createContext, useContext, useEffect} from 'react';

const ThemeContext = createContext();

export function ThemeProvider({children}){

	//checking localStorage theme key is existed or not, set theme conditionally
	const [theme,setTheme] = useState('light');


	useEffect(() => {
		localStorage.setItem("theme", theme);
	},[theme])


	return (
		<ThemeContext.Provider value={{theme,setTheme}} >
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext);
