import { motion, AnimatePresence } from "framer-motion"

function Fade({ name, children }) {
  return (
    <AnimatePresence>
      <motion.div
        key={name}
        initial={{ opacity: 0, }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Fade