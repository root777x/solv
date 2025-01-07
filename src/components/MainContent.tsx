import { motion } from 'framer-motion';

export const MainContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative z-10 max-w-3xl mx-auto px-6 pt-32"
  >
    <motion.h1 
      className="text-8xl font-bold mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400">
        2,000,000
      </span>
    </motion.h1>
    
    <motion.h2 
      className="text-4xl font-bold mb-8 text-purple-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      $SOLV Tokens
    </motion.h2>
    
    <motion.p 
      className="text-xl text-purple-100/80 mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      Campaign with Coinbase Web3 Wallet
    </motion.p>
  </motion.div>
);