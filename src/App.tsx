import { Background } from './components/Background';
import { Logo } from './components/Logo';
import { Stats } from './components/Stats';
import { ClaimCard } from './components/ClaimCard';
import { TokenAnimation } from './components/TokenAnimation';
import { ConnectButton } from './components/ConnectButton';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <Logo />
      <TokenAnimation />
      
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Exclusive Airdrop Event
          </h1>
          <p className="text-purple-200/80 text-lg max-w-2xl mx-auto">
            SOLV token distribution is now available for wallets that meet the requirements
          </p>
        </div>

        <Stats />
        <ClaimCard />
        
        <div className="mt-8">
          <ConnectButton />
        </div>

        <div className="mt-12 text-center text-sm text-purple-200/60">
          Powered by Polygon Network
        </div>
      </div>
    </div>
  );
}

export default App;