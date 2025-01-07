import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const EligibilityItem = ({ text, value }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center justify-between py-3 border-b border-purple-500/20 hover:bg-purple-500/10 transition-colors rounded-lg px-4"
  >
    <span className="text-purple-200/80 flex items-center gap-2">
      <Check className="w-4 h-4 text-green-400" />
      {text}
    </span>
    <span className="text-purple-100 font-semibold">{value}</span>
  </motion.div>
);

export const ClaimCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative bg-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 w-full max-w-md mx-auto"
    style={{
      boxShadow: `
        0 0 40px rgba(168, 85, 247, 0.1),
        inset 0 0 20px rgba(168, 85, 247, 0.05)
      `
    }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
    
    <div className="text-center mb-8">
      <div className="text-sm text-green-400 mb-2 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Airdrop Active
      </div>
      <h3 className="text-3xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">
        Claim Your SOLV
      </h3>
      <p className="text-purple-200/80 text-sm">
        Connect wallet to check eligibility
      </p>
    </div>

    <div className="space-y-4 mb-8">
      <EligibilityItem text="Minimum Balance" value="0.1 ETH" />
      <EligibilityItem text="Wallet Age" value="30 days" />
      <EligibilityItem text="Previous Transactions" value="5+" />
    </div>

    <div className="text-center">
      <div className="text-sm text-purple-200/80 mb-2">Available to Claim</div>
      <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500 mb-2">
        2,000,000
      </div>
      <div className="text-xl font-semibold text-purple-300">SOLV</div>
    </div>
  </motion.div>
);