interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  userType: 'driver' | 'client';
  onUserTypeChange?: (type: 'driver' | 'client') => void;
  mobile?: boolean;
}

export function Sidebar({ currentPage, onNavigate, userType, onUserTypeChange, mobile }: SidebarProps) {
  const driverMenuItems = [
    { id: 'jobs', label: 'Available Loads', icon: '▣' },
    { id: 'messages', label: 'Messages', icon: '✉' },
    { id: 'analytics', label: 'Analytics', icon: '▲' },
    { id: 'profile', label: 'Profile', icon: '●' },
  ];

  const clientMenuItems = [
    { id: 'jobs', label: 'Find Drivers', icon: '▣' },
    { id: 'messages', label: 'Messages', icon: '✉' },
    { id: 'analytics', label: 'Analytics', icon: '▲' },
    { id: 'profile', label: 'Profile', icon: '●' },
  ];

  const menuItems = userType === 'driver' ? driverMenuItems : clientMenuItems;

  const sidebarStyles: React.CSSProperties = mobile ? {
    width: '100%',
    height: 'auto',
    backgroundColor: 'var(--sidebar-bg)',
    color: 'white',
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 'calc(100vh - 70px)',
    overflowY: 'auto',
  } : {
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    width: '260px',
    backgroundColor: 'var(--sidebar-bg)',
    color: 'white',
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
  };

  return (
    <aside style={sidebarStyles}>
      <div style={{ marginBottom: '32px', padding: '0 12px' }}>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: '500',
            margin: 0,
            color: 'var(--accent-gold)',
            fontFamily: 'Playfair Display, Georgia, serif',
            letterSpacing: '0.05em',
          }}
        >
          TAKURABID
        </h1>
        <p style={{ fontSize: '11px', color: '#9ca3af', margin: '6px 0 0 0', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Logistics Marketplace
        </p>
      </div>
{mobile && onUserTypeChange && (
        <div style={{ marginBottom: '24px', padding: '0 12px' }}>
          <label style={{ display: 'block', color: '#9ca3af', fontSize: '12px', marginBottom: '8px' }}>
            Switch View
          </label>
          <div style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0.2)', padding: '4px', borderRadius: '8px' }}>
            <button
              onClick={() => onUserTypeChange('driver')}
              style={{
                flex: 1,
                padding: '8px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: userType === 'driver' ? 'var(--accent-gold)' : 'transparent',
                color: userType === 'driver' ? 'white' : '#9ca3af',
                fontSize: '13px',
                cursor: 'pointer',
                fontWeight: '500',
              }}
            >
              Driver
            </button>
            <button
              onClick={() => onUserTypeChange('client')}
              style={{
                flex: 1,
                padding: '8px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: userType === 'client' ? 'var(--accent-gold)' : 'transparent',
                color: userType === 'client' ? 'white' : '#9ca3af',
                fontSize: '13px',
                cursor: 'pointer',
                fontWeight: '500',
              }}
            >
              Client
            </button>
          </div>
        </div>
      )}

      
      <nav style={{ flex: 1 }}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              marginBottom: '4px',
              backgroundColor:
                currentPage === item.id ? 'var(--sidebar-active)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '15px',
              textAlign: 'left',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (currentPage !== item.id) {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== item.id) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <span style={{ fontSize: '18px' }}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <button
        onClick={() => {
          if (confirm('Are you sure you want to logout?')) {
            alert('Logged out successfully');
            // In a real app, this would redirect to login page
          }
        }}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 16px',
          marginBottom: '16px',
          backgroundColor: 'transparent',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '8px',
          color: 'white',
          fontSize: '15px',
          textAlign: 'left',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
        }}
      >
        <span style={{ fontSize: '18px' }}>🚪</span>
        <span>Logout</span>
      </button>

      <div
        style={{
          padding: '18px',
          backgroundColor: 'rgba(198, 156, 109, 0.15)',
          borderRadius: '8px',
          border: '1px solid rgba(198, 156, 109, 0.3)',
        }}
      >
        <p style={{ fontSize: '13px', color: 'var(--accent-gold)', margin: 0, fontWeight: '600' }}>
          Premium Membership
        </p>
        <p style={{ fontSize: '12px', color: '#d1d5db', margin: '4px 0 0 0' }}>
          Upgrade for unlimited bids
        </p>
      </div>
    </aside>
  );
}