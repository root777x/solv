import { motion } from 'framer-motion';
import { Clock, Users, Coins } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="relative flex-1 bg-purple-900/20 backdrop-blur-xl rounded-xl p-6 flex flex-col items-center justify-center border border-purple-500/20 group hover:bg-purple-900/30 transition-colors"
    style={{
      boxShadow: '0 0 20px rgba(168, 85, 247, 0.1)'
    }}
  >
    <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
    
    <div className="relative">
      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform" />
      <Icon className="w-8 h-8 text-purple-300 mb-3 relative transform group-hover:scale-110 transition-transform" />
    </div>
    
    <div className="text-3xl font-bold text-white mb-1 relative">
      {value}
    </div>
    <div className="text-sm text-purple-200/80 relative">
      {label}
    </div>
  </motion.div>
);

export const Stats = () => (
  <div className="grid grid-cols-3 gap-6 w-full max-w-3xl mx-auto mb-12">
    <StatCard icon={Coins} value="2M" label="SOLV per Claim" delay={0.2} />
    <StatCard icon={Users} value="10k+" label="Claims Made" delay={0.4} />
    <StatCard icon={Clock} value="2025" label="Launch Year" delay={0.6} />
  </div>
);