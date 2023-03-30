import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion'

const PresentationText = () => {
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
                duration: 1.5,
                staggerChildren: 0.2, // add stagger effect
                ease: 'easeInOut' // use custom easing function
            }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: "-100%" },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 90,
                damping: 10,
                delayChildren: 2, // add delay for stagger effect
                staggerChildren: 0.05 // add stagger effect
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0.3, y: "-100%" },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 5,
            }
        }
    };


    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
        >
            <motion.p className='text-[2.5rem]' variants={wordVariants}>Experienced photographer</motion.p>
            <motion.p className='text-[2.5rem]' variants={wordVariants}>with a keen eye for</motion.p>

            <motion.p className="text-[2.5rem] composition" variants={wordVariants}>
                {"composition".split("").map((letter, index) => (
                    <motion.span key={index} variants={letterVariants}>
                        {letter}
                    </motion.span>
                ))}
            </motion.p>

            <motion.p className='text-[2.5rem]' variants={wordVariants}>and a natural ability</motion.p>
            <motion.p className='text-[2.5rem]' variants={wordVariants}>to capture the perfect moment</motion.p>
        </motion.div>
    );
};

export default PresentationText;