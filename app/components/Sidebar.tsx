'use client';

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const menuItems = [
    { icon: '🏠', label: 'AdRemix', active: true },
    { icon: '👁', label: 'View', active: false },
    { icon: '🎯', label: 'Ad Ton', active: false },
    { icon: '📊', label: 'Growth Report', active: false },
    { icon: '📝', label: 'Ad new idea', active: false },
    { icon: '💬', label: 'Connections', active: false },
    { icon: '🌟', label: 'Enhancement', active: false },
  ];

  return (
    <div className="w-64 bg-white/10 backdrop-blur-lg border-r border-white/20 p-6">
      <div className="flex items-center space-x-3 mb-8">
        <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-10 h-10 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
          </svg>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all ${
              item.active
                ? 'bg-white/20 text-white shadow-lg'
                : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
            <div>
              <p className="text-sm font-medium text-white">Connected</p>
              <p className="text-xs text-white/60">Base Wallet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
