import { motion } from "framer-motion"

function HoverClick({ children }) {
  return (
    <motion.div
      whileHover={{ rotate: 15, scale: 1.2 }}
      whileTap={{ scale: 1.2 }}

    >
      {children}
    </motion.div>
  )
}

export default HoverClick