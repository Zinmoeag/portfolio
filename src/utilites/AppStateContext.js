import {useState, useEffect, createContext , useContext , useMemo, useRef} from "react"

const appStateContext = createContext();

export const AppStateProvider = ({children}) => {

	const [showImageDisplay, setShowImageDisplay] = useState(null);


	return (
		<appStateContext.Provider 
			value={{
				showImageDisplay, 
				setShowImageDisplay
			}} 
		>
			{children}
		</appStateContext.Provider>
	)
}

export const useAppStateContext = () => useContext(appStateContext);