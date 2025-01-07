import { motion } from 'framer-motion';

export const Logo = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="absolute top-6 left-6 flex items-center gap-4"
  >
    <span className="text-3xl font-bold text-white">$solv</span>
    <span className="text-2xl text-white">×</span>
    <span className="text-3xl font-bold text-white">Coinbase</span>
  </motion.div>
);