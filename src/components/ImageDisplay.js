import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react'
import {useAppStateContext} from '../utilites/AppStateContext.js'


const ImageDisplay = () => {

	const {showImageDisplay, setShowImageDisplay} = useAppStateContext();
	

	return (
		<div className={`${showImageDisplay ? "translate-y-0" : "translate-y-[-100%]"} h-[100vh] w-full fixed top-0 bg-slate-900/90 z-40 pt-[6rem] text-white flex justify-center items-center transition-all duration-200`}> 
			<div className="absolute top-0 right-[2rem] mt-[5rem] text-2xl">
				<FontAwesomeIcon 
				icon={faXmark}
				onClick = {() => setShowImageDisplay(false)}
				/>
			</div>
			<div className="w-full md:w-[80%] lg:w-[70%] flex items-center justify-center">
				<img 
				className="h-full"
				src={showImageDisplay && showImageDisplay}
				alt="" />
			</div>
		</div>
	)
}

export default ImageDisplay;