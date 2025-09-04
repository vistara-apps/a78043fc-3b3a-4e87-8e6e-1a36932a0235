'use client';

import { useState } from 'react';

interface PaymentGatewayButtonProps {
  amount: number;
  variant?: 'USDC' | 'StripeFallback';
}

export function PaymentGatewayButton({ amount, variant = 'USDC' }: PaymentGatewayButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Show success message or handle payment result
    }, 2000);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-white/70 text-sm">${amount}</span>
      
      <button
        onClick={handlePayment}
        disabled={isProcessing}
        className={`px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50 ${
          variant === 'USDC'
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-600 hover:bg-gray-700 text-white'
        }`}
      >
        {isProcessing ? 'Processing...' : variant === 'USDC' ? 'Pay with USDC' : 'Pay with Card'}
      </button>
    </div>
  );
}
