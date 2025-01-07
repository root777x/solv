import { motion } from 'framer-motion';
import { Coins } from 'lucide-react';

export const InfoCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-purple-500/20"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-full bg-purple-500/20">
          <Coins className="w-6 h-6 text-purple-400" />
        </div>
        <h2 className="text-2xl font-bold text-white">Airdrop Details</h2>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-300">
          Join the future of decentralized finance with Solv x Coinbase airdrop.
          Each eligible participant will receive:
        </p>
        
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
          2,000,000 Tokens
        </div>
        
        <div className="space-y-2 text-sm text-gray-400">
          <p>• Launch Date: 2025</p>
          <p>• Total Supply: Limited</p>
          <p>• Distribution: First come, first served</p>
        </div>
      </div>
    </motion.div>
  );
};