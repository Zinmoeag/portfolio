import React,{useRef, useEffect, useState} from "react";

//Higher-Order Component to track visibility
const withVisibilityTracking = WrappedComponent => {
	return props => {
		const [isVisible, setIsVisible] = useState(false);
		const targetRef = useRef(null);

		useEffect(() => {
			const Observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if(entry.isIntersecting){
						setIsVisible(true);
					}else{
						setIsVisible(false)
					}
				})
			});

			Observer.observe(targetRef.current);

			return () => {
				Observer.disconnect();
			}

		},[]);

		return (
			<div ref={targetRef}>
				<WrappedComponent  isVisible={isVisible} {...props} />
			</div>
		)
	};
};


export default withVisibilityTracking;
