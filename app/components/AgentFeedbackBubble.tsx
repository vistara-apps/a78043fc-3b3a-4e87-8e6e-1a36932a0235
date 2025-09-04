'use client';

interface AgentFeedbackBubbleProps {
  variant: 'positive' | 'neutral' | 'suggestive';
  message: string;
}

export function AgentFeedbackBubble({ variant, message }: AgentFeedbackBubbleProps) {
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'positive':
        return 'bg-green-500/20 border-green-400/30 text-green-100';
      case 'neutral':
        return 'bg-blue-500/20 border-blue-400/30 text-blue-100';
      case 'suggestive':
        return 'bg-yellow-500/20 border-yellow-400/30 text-yellow-100';
      default:
        return 'bg-white/10 border-white/20 text-white';
    }
  };

  const getIcon = (variant: string) => {
    switch (variant) {
      case 'positive':
        return '✅';
      case 'neutral':
        return 'ℹ️';
      case 'suggestive':
        return '💡';
      default:
        return '🤖';
    }
  };

  return (
    <div className={`rounded-2xl p-4 border backdrop-blur-lg ${getVariantStyles(variant)}`}>
      <div className="flex items-start space-x-3">
        <div className="text-2xl">{getIcon(variant)}</div>
        <div>
          <p className="text-sm font-medium mb-1">AI Growth Agent</p>
          <p className="text-sm opacity-90">{message}</p>
        </div>
      </div>
    </div>
  );
}
