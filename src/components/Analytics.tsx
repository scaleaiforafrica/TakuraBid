export function Analytics() {
  const stats = [
    { label: 'Total Trips Completed', value: '47', icon: 'TRIPS', color: '#1B3957' },
    { label: 'Total Money Earned', value: '$87,542', icon: 'EARN', color: '#c69c6d' },
    { label: 'Total Kilometres Moved', value: '18,450 km', icon: 'KM', color: '#16a34a' },
    { label: 'Average Rating', value: '4.9', icon: '★', color: '#f59e0b' },
    { label: 'Profile Views', value: '1,243', icon: 'VIEW', color: '#2d5575' },
    { label: 'Active Bids', value: '8', icon: 'BIDS', color: '#7c3aed' },
  ];

  const monthlyEarnings = [
    { month: 'Jul', amount: 12500 },
    { month: 'Aug', amount: 14200 },
    { month: 'Sep', amount: 13800 },
    { month: 'Oct', amount: 16400 },
    { month: 'Nov', amount: 15200 },
    { month: 'Dec', amount: 15442 },
  ];

  const monthlyPerformance = [
    { month: 'Jul', trips: 6, rating: 4.8 },
    { month: 'Aug', trips: 8, rating: 4.9 },
    { month: 'Sep', trips: 7, rating: 4.7 },
    { month: 'Oct', trips: 9, rating: 5.0 },
    { month: 'Nov', trips: 8, rating: 4.9 },
    { month: 'Dec', trips: 9, rating: 4.9 },
  ];

  const maxEarning = Math.max(...monthlyEarnings.map((e) => e.amount));
  const maxTrips = Math.max(...monthlyPerformance.map((p) => p.trips));

  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', margin: '0 0 12px 0', color: 'var(--primary-navy)', fontWeight: '500' }}>
          Performance Analytics
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', margin: 0 }}>
          Comprehensive insights into your logistics operations
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '32px',
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'var(--bg-white)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '24px',
              transition: 'all 0.2s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: `${stat.color}20`,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  color: stat.color,
                }}
              >
                {stat.icon}
              </div>
              <span
                style={{
                  fontSize: '12px',
                  padding: '4px 8px',
                  backgroundColor: '#dcfce7',
                  color: '#166534',
                  borderRadius: '4px',
                  fontWeight: '600',
                }}
              >
                +12%
              </span>
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: stat.color }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Monthly Performance Graph */}
      <div
        style={{
          backgroundColor: 'var(--bg-white)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px',
        }}
      >
        <h3 style={{ fontSize: '20px', margin: '0 0 24px 0', color: 'var(--text-primary)' }}>
          Monthly Performance Overview
        </h3>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '280px', padding: '20px 0' }}>
          {monthlyPerformance.map((data, index) => {
            const heightPercent = (data.trips / maxTrips) * 100;
            return (
              <div
                key={index}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '2px',
                  }}
                >
                  {data.trips} trips
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#f59e0b',
                    marginBottom: '4px',
                  }}
                >
                  ★ {data.rating}
                </div>
                <div
                  style={{
                    width: '100%',
                    height: `${heightPercent}%`,
                    backgroundColor: 'var(--primary-navy)',
                    borderRadius: '8px 8px 0 0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-navy-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-navy)';
                  }}
                />
                <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-secondary)' }}>
                  {data.month}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div
          style={{
            backgroundColor: 'var(--bg-white)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '24px',
          }}
        >
          <h3 style={{ fontSize: '18px', margin: '0 0 16px 0', color: 'var(--text-primary)' }}>
            Top Routes
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { route: 'Harare → Bulawayo', trips: 12 },
              { route: 'Mutare → Harare', trips: 9 },
              { route: 'Gweru → Bulawayo', trips: 8 },
              { route: 'Harare → Masvingo', trips: 7 },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px',
                  backgroundColor: 'var(--bg-light)',
                  borderRadius: '6px',
                }}
              >
                <span style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Route: {item.route}</span>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--accent-gold)',
                  }}
                >
                  {item.trips} trips
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'var(--bg-white)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '24px',
          }}
        >
          <h3 style={{ fontSize: '18px', margin: '0 0 16px 0', color: 'var(--text-primary)' }}>
            Recent Activity
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { action: 'Completed Harare-Bulawayo delivery', time: '2 hours ago' },
              { action: 'New contract awarded for Mutare route', time: '5 hours ago' },
              { action: 'Received 5-star review from client', time: '1 day ago' },
              { action: 'Profile viewed by 18 companies', time: '2 days ago' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  padding: '12px',
                  backgroundColor: 'var(--bg-light)',
                  borderRadius: '6px',
                }}
              >
                <span style={{ fontSize: '14px', color: 'var(--text-primary)', flex: 1 }}>{item.action}</span>
                <span
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    whiteSpace: 'nowrap',
                    marginLeft: '8px',
                  }}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}