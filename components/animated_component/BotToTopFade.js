import { motion } from "framer-motion"

function BotToTopFade({ name, children }) {
  return (
    <motion.div
      key={name}
      initial={{ y: 100, opacity: 0, }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>

  )
}

export default BotToTopFade