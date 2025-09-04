'use client';

interface ActionButtonsProps {
  variant: 'postToTikTok' | 'postToIG' | 'regenerate' | 'copyCode';
  onClick: () => void;
  disabled?: boolean;
  count?: number;
}

export function ActionButtons({ variant, onClick, disabled = false, count }: ActionButtonsProps) {
  const getButtonConfig = (variant: string) => {
    switch (variant) {
      case 'postToTikTok':
        return {
          label: `Post to TikTok${count ? ` (${count})` : ''}`,
          icon: '📱',
          gradient: 'from-black to-gray-800'
        };
      case 'postToIG':
        return {
          label: `Post to Instagram${count ? ` (${count})` : ''}`,
          icon: '📷',
          gradient: 'from-purple-500 to-pink-500'
        };
      case 'regenerate':
        return {
          label: 'Regenerate',
          icon: '🔄',
          gradient: 'from-blue-500 to-indigo-500'
        };
      case 'copyCode':
        return {
          label: 'Copy Code',
          icon: '📋',
          gradient: 'from-gray-500 to-gray-700'
        };
      default:
        return {
          label: 'Action',
          icon: '⚡',
          gradient: 'from-gray-500 to-gray-700'
        };
    }
  };

  const config = getButtonConfig(variant);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-gradient-to-r ${config.gradient} text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2`}
    >
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </button>
  );
}
