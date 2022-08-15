import { motion, AnimatePresence } from "framer-motion"

function LeftToRightFade({ name, className, children }) {
  return (
    <AnimatePresence>
      <motion.div
        key={name}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1.7 }}
        initial={{ x: -300, opacity: 0, rotate: 15, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, rotate: 15, scale: 1.3 }}
        exit={{ x: 400, opacity: 0, rotate: 15, scale: 2 }}
        transition={{ duration: 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default LeftToRightFade