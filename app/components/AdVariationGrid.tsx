'use client';

import { useState } from 'react';
import { AdVariationCard } from './AdVariationCard';
import { PaymentGatewayButton } from './PaymentGatewayButton';

interface AdVariationGridProps {
  image: File;
  ads: any[];
  isGenerating: boolean;
  onGenerate: () => void;
}

export function AdVariationGrid({ image, ads, isGenerating, onGenerate }: AdVariationGridProps) {
  const [selectedAds, setSelectedAds] = useState<number[]>([]);

  const toggleAdSelection = (adId: number) => {
    setSelectedAds(prev => 
      prev.includes(adId) 
        ? prev.filter(id => id !== adId)
        : [...prev, adId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Image Preview */}
      <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
        <img
          src={URL.createObjectURL(image)}
          alt="Uploaded product"
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div>
          <p className="text-white font-medium">{image.name}</p>
          <p className="text-white/60 text-sm">
            {(image.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
        
        <div className="ml-auto flex items-center space-x-3">
          <PaymentGatewayButton amount={0.5} />
          
          <button
            onClick={onGenerate}
            disabled={isGenerating}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all disabled:opacity-50"
          >
            {isGenerating ? 'Generating...' : 'Generate Variations'}
          </button>
        </div>
      </div>

      {/* Loading State */}
      {isGenerating && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/10 rounded-2xl p-6 animate-pulse">
              <div className="bg-white/20 h-40 rounded-xl mb-4"></div>
              <div className="space-y-2">
                <div className="bg-white/20 h-4 rounded w-3/4"></div>
                <div className="bg-white/20 h-3 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Generated Ads Grid */}
      {ads.length > 0 && !isGenerating && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ads.map((ad) => (
            <AdVariationCard
              key={ad.id}
              ad={ad}
              isSelected={selectedAds.includes(ad.id)}
              onToggleSelect={() => toggleAdSelection(ad.id)}
            />
          ))}
        </div>
      )}

      {/* Action Buttons */}
      {selectedAds.length > 0 && (
        <div className="flex items-center justify-center space-x-4 p-6 bg-white/10 rounded-2xl">
          <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all">
            Post to TikTok ({selectedAds.length})
          </button>
          
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all">
            Post to Instagram ({selectedAds.length})
          </button>
          
          <button className="bg-white/20 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition-all">
            Regenerate Selected
          </button>
        </div>
      )}
    </div>
  );
}
