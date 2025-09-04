'use client';

interface AdVariationCardProps {
  ad: {
    id: number;
    type: string;
    title: string;
    platform: string;
    status: string;
    gradient: string;
  };
  isSelected: boolean;
  onToggleSelect: () => void;
}

export function AdVariationCard({ ad, isSelected, onToggleSelect }: AdVariationCardProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
        return '🟢';
      case 'Draft':
        return '⚪';
      case 'Scheduled':
        return '🟡';
      default:
        return '⚪';
    }
  };

  return (
    <div
      className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 cursor-pointer transition-all hover:bg-white/15 ${
        isSelected ? 'ring-2 ring-pink-400 bg-white/20' : ''
      }`}
      onClick={onToggleSelect}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-white/60 text-sm font-medium">{ad.type}</span>
        <div className="flex items-center space-x-2">
          <span className="text-xs">{getStatusIcon(ad.status)}</span>
          <span className="text-white/60 text-xs">{ad.status}</span>
        </div>
      </div>

      {/* Visual Preview */}
      <div className={`bg-gradient-to-br ${ad.gradient} rounded-xl h-40 flex items-center justify-center mb-4 relative overflow-hidden`}>
        {/* Mock content based on ad type */}
        {ad.type === 'Link' && (
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <div className="text-white text-xs">Product Link</div>
          </div>
        )}
        
        {ad.type === 'Carousel' && (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-16 h-20 bg-white/20 rounded-lg"></div>
            <div className="w-16 h-20 bg-white/30 rounded-lg"></div>
            <div className="w-16 h-20 bg-white/20 rounded-lg"></div>
          </div>
        )}
        
        {ad.type === 'Channel' && (
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-8 h-8 bg-white/30 rounded-full"></div>
            </div>
            <div className="text-white text-xs">Channel Post</div>
          </div>
        )}

        {/* Selection indicator */}
        {isSelected && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-white font-medium text-sm mb-2 line-clamp-2">
        {ad.title}
      </h3>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-white/60 text-xs">{ad.platform}</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span className="text-white/40 text-xs">Ready</span>
        </div>
      </div>
    </div>
  );
}
