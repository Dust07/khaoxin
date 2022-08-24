import { motion } from "framer-motion"

function BotToTopFade({ name, children, className }) {
  return (
    <motion.div
      key={name}
      initial={{ y: 100, opacity: 0, }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>

  )
}

export default BotToTopFade