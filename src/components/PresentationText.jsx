import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion'

const TextComponent = () => {
    const { ref, inView } = useInView({
        threshold: 0.8 // adjust this value as needed
    });

    const textVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1, // add stagger effect
                ease: 'easeInOut' // use custom easing function
            }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, rotate: 15 },
        visible: { opacity: 1, y: 0, rotate: 0 }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
        >
            <motion.p className='text-[2.5rem]' variants={wordVariants}>Experienced</motion.p>
            <motion.p className='text-[2.5rem]' variants={wordVariants}>photographer</motion.p>
            <motion.p className='text-[2.5rem]' variants={wordVariants}>with a keen eye</motion.p>
            <motion.p className='text-[2.5rem]' variants={wordVariants}>for composition</motion.p>
            <motion.p className='text-[2.5rem]' variants={wordVariants}>and a natural ability</motion.p>
            <motion.p className='text-[2.5rem]' variants={wordVariants}>to capture the perfect moment</motion.p>
        </motion.div>
    );
};

export default PresentationText;