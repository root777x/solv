export const Background = () => (
  <div className="fixed inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,255,0.15),rgba(0,0,0,1)_100%)]" />
    <div className="absolute inset-0" style={{
      background: `
        linear-gradient(to bottom right, 
          rgba(0,0,0,0.9) 0%,
          rgba(76,29,149,0.3) 50%,
          rgba(0,0,0,0.9) 100%
        )
      `
    }} />
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.1) 0%, transparent 30%),
          radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 30%),
          radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)
        `
      }}
    />
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-30" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-purple-900/20" />
  </div>
);