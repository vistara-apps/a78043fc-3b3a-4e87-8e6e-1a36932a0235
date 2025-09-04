'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';

export function DashboardHeader() {
  return (
    <header className="bg-white/5 backdrop-blur-lg border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">AdRemix</h1>
          <p className="text-white/70 text-sm">
            AI Creative your ads ad copy Paste adifine text list for they shus your tune
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all">
            Becnoteinvershiilly
          </button>
          
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
          
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
