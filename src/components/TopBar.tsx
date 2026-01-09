import { useState } from 'react';
import { Menu } from 'lucide-react';
import { useIsMobile } from './ui/use-mobile';

interface TopBarProps {
  userType: 'driver' | 'client';
  onUserTypeChange: (type: 'driver' | 'client') => void;
  onMenuClick?: () => void;
}

export function TopBar({ userType, onUserTypeChange, onMenuClick }: TopBarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const isMobile = useIsMobile();
  const notifications = [
    { id: 1, type: 'bid', message: 'New bid received on Harare → Bulawayo job', time: '5 min ago', unread: true },
    { id: 2, type: 'award', message: 'You won the contract for Mutare → Harare delivery', time: '1 hour ago', unread: true },
    { id: 3, type: 'message', message: 'New message from Zimbabwe Freight Solutions', time: '2 hours ago', unread: false },
    { id: 4, type: 'reminder', message: 'Pickup reminder: Job starts tomorrow at 8:00 AM', time: '3 hours ago', unread: false },
    { id: 5, type: 'payment', message: 'Payment received: $2,800 for completed job', time: '1 day ago', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header
      style={{
        backgroundColor: 'var(--bg-white)',
        borderBottom: '1px solid var(--border-color)',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              color: 'var(--text-primary)',
            }}
          >
            <Menu size={24} />
          </button>
        )}
        <div>
          <h2 style={{ margin: 0, fontSize: isMobile ? '20px' : '24px', color: 'var(--text-primary)' }}>
            {userType === 'driver' ? 'Driver Portal' : 'Client Portal'}
          </h2>
          {!isMobile && (
            <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
              TakuraBid Logistics Marketplace
            </p>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {!isMobile && (
          <select
            value={userType}
            onChange={(e) => onUserTypeChange(e.target.value as 'driver' | 'client')}
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-white)',
              fontSize: '14px',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
          >
            <option value="driver">Driver View</option>
            <option value="client">Client View</option>
          </select>
        )}

        {/* Notifications Bell */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            style={{
              padding: '10px',
              backgroundColor: 'transparent',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              fontSize: '18px',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-light)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            title="Notifications"
          >
            🔔
            {unreadCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '4px',
                  right: '4px',
                  width: '18px',
                  height: '18px',
                  backgroundColor: '#dc2626',
                  borderRadius: '50%',
                  fontSize: '11px',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}
              >
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                width: '360px',
                backgroundColor: 'var(--bg-white)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                zIndex: 1000,
              }}
            >
              <div
                style={{
                  padding: '16px',
                  borderBottom: '1px solid var(--border-color)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  Notifications
                </h3>
                <button
                  style={{
                    fontSize: '12px',
                    color: 'var(--primary-navy)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '600',
                  }}
                >
                  Mark all read
                </button>
              </div>

              <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid var(--border-color)',
                      cursor: 'pointer',
                      backgroundColor: notification.unread ? 'rgba(27, 57, 87, 0.04)' : 'transparent',
                      transition: 'background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--bg-light)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = notification.unread
                        ? 'rgba(27, 57, 87, 0.04)'
                        : 'transparent';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: notification.unread ? 'var(--primary-navy)' : 'transparent',
                          marginTop: '6px',
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            margin: '0 0 4px 0',
                            fontSize: '14px',
                            color: 'var(--text-primary)',
                            fontWeight: notification.unread ? '600' : '400',
                          }}
                        >
                          {notification.message}
                        </p>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                          {notification.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  padding: '12px 16px',
                  textAlign: 'center',
                  borderTop: '1px solid var(--border-color)',
                }}
              >
                <button
                  style={{
                    fontSize: '13px',
                    color: 'var(--primary-navy)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '600',
                  }}
                >
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary-navy)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          {userType === 'driver' ? 'D' : 'C'}
        </div>
      </div>
    </header>
  );
}