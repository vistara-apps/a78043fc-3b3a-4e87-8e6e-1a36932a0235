'use client';

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const mockData = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 35 },
  { name: 'Mar', value: 25 },
  { name: 'Apr', value: 45 },
  { name: 'May', value: 40 },
  { name: 'Jun', value: 60 },
];

export function PerformanceCard() {
  return (
    <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Becnoteinvershiilly</h3>
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
          </svg>
          <span className="text-green-400 text-sm font-medium">5% this week</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="text-3xl font-bold text-white">40,508</div>
        <div className="text-white/60 text-sm">Active Users</div>
      </div>
      
      <div className="h-24 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#60A5FA" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-white/60 text-xs">
        An this this creation
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-white/70 text-sm">117.80</span>
          <span className="text-green-400 text-sm font-medium">859%</span>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-white/70 text-sm">Comps and tacticalengty</span>
          <span className="text-white text-sm font-medium">thefri</span>
        </div>
      </div>
    </div>
  );
}
