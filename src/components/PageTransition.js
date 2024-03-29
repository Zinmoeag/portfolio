import {motion} from 'framer-motion';

const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

const PageTransition = ({children}) => {
	return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 2 }}
        >
            {children}
        </motion.div>
    );
}

export default PageTransition;


