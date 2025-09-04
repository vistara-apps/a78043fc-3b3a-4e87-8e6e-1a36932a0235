'use client';

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardHeader } from './components/DashboardHeader';
import { AdVariationGrid } from './components/AdVariationGrid';
import { PerformanceCard } from './components/PerformanceCard';
import { ImageUploader } from './components/ImageUploader';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { useAccount } from 'wagmi';

export default function Home() {
  const { isConnected } = useAccount();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [generatedAds, setGeneratedAds] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-purple-700 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center max-w-md w-full">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">AdRemix</h1>
          <p className="text-white/80 mb-8">
            Spin up AI-powered ad variations and auto-post them for instant testing.
          </p>
          <div className="flex justify-center">
            <ConnectWallet />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-purple-700">
      <div className="flex h-screen">
        <Sidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader />
          
          <main className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Main Content Area */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    AI Creative your ads ad copy Paste adifine text list for they shus your tune 
                    experiment and contributors all yur barsetsuns
                  </h2>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">Status Online</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">New Features</span>
                    </div>
                  </div>

                  {!selectedImage ? (
                    <ImageUploader onImageSelect={setSelectedImage} />
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-white">Variations</h3>
                        <button
                          onClick={() => setSelectedImage(null)}
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          Upload New Image
                        </button>
                      </div>
                      
                      <AdVariationGrid 
                        image={selectedImage}
                        ads={generatedAds}
                        isGenerating={isGenerating}
                        onGenerate={() => {
                          setIsGenerating(true);
                          // Simulate API call
                          setTimeout(() => {
                            setGeneratedAds([
                              {
                                id: 1,
                                type: 'Link',
                                title: 'Anna & Sam creates an adsfosotive lo engade with and their inurit',
                                platform: 'Instagram',
                                status: 'Active',
                                gradient: 'from-pink-500 to-purple-600'
                              },
                              {
                                id: 2,
                                type: 'Carousel',
                                title: 'Product & client proposales shouting card Facsations app her Hearts',
                                platform: 'TikTok',
                                status: 'Draft', 
                                gradient: 'from-blue-400 to-pink-400'
                              },
                              {
                                id: 3,
                                type: 'Channel',
                                title: 'Fast by toe oilcolse Pren tas hiy et terney Forcuitages',
                                platform: 'Instagram',
                                status: 'Scheduled',
                                gradient: 'from-purple-500 to-indigo-500'
                              }
                            ]);
                            setIsGenerating(false);
                          }, 3000);
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Performance Sidebar */}
              <div className="space-y-6">
                <PerformanceCard />
                
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    AI Growth Agent
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">AI</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Engagement</p>
                        <p className="text-xs text-white/60">6,560</p>
                      </div>
                      <div className="ml-auto text-green-400 text-sm font-medium">55%</div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">AI</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">A.I Growth</p>
                        <p className="text-xs text-white/60">6,920K</p>
                      </div>
                      <div className="ml-auto text-green-400 text-sm font-medium">29%</div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">AI</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">AI Growth Agent</p>
                        <p className="text-xs text-white/60">Growing Every</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
