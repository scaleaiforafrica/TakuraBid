import { useState } from 'react';

interface Load {
  id: number;
  pickup: string;
  dropoff: string;
  rate: number;
  distance: number;
  truckType: string;
  postedDate: string;
  company: string;
  saved: boolean;
}

interface DriverDashboardProps {
  onViewJob?: (jobId: number) => void;
}

export function DriverDashboard({ onViewJob }: DriverDashboardProps = {}) {
  const [loads, setLoads] = useState<Load[]>([
    {
      id: 1,
      pickup: 'Harare',
      dropoff: 'Bulawayo',
      rate: 2800,
      distance: 439,
      truckType: 'Flatbed',
      postedDate: '2 hours ago',
      company: 'Zimbabwe Freight Solutions',
      saved: false,
    },
    {
      id: 2,
      pickup: 'Mutare',
      dropoff: 'Harare',
      rate: 1900,
      distance: 265,
      truckType: 'Dry Van',
      postedDate: '3 hours ago',
      company: 'Express Logistics ZW',
      saved: false,
    },
    {
      id: 3,
      pickup: 'Harare',
      dropoff: 'Masvingo',
      rate: 2100,
      distance: 292,
      truckType: 'Reefer',
      postedDate: '4 hours ago',
      company: 'ColdChain Zimbabwe',
      saved: true,
    },
    {
      id: 4,
      pickup: 'Gweru',
      dropoff: 'Bulawayo',
      rate: 1200,
      distance: 157,
      truckType: 'Box Truck',
      postedDate: '5 hours ago',
      company: 'Midlands Transport',
      saved: false,
    },
    {
      id: 5,
      pickup: 'Chitungwiza',
      dropoff: 'Kwekwe',
      rate: 1500,
      distance: 189,
      truckType: 'Flatbed',
      postedDate: '6 hours ago',
      company: 'Central Haulage',
      saved: false,
    },
    {
      id: 6,
      pickup: 'Bulawayo',
      dropoff: 'Victoria Falls',
      rate: 3500,
      distance: 440,
      truckType: 'Dry Van',
      postedDate: '8 hours ago',
      company: 'Western Corridor Logistics',
      saved: false,
    },
  ]);

  const toggleSave = (id: number) => {
    setLoads(
      loads.map((load) =>
        load.id === id ? { ...load, saved: !load.saved } : load
      )
    );
  };

  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', margin: '0 0 12px 0', color: 'var(--primary-navy)', fontWeight: '500' }}>
          Available Freight Opportunities
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', margin: 0 }}>
          Premium loads across Zimbabwe's major transport corridors
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {loads.map((load) => (
          <div
            key={load.id}
            style={{
              backgroundColor: 'var(--bg-white)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '20px',
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
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '5px 12px',
                    backgroundColor: 'rgba(27, 57, 87, 0.08)',
                    color: 'var(--primary-navy)',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '600',
                  }}
                >
                  {load.truckType}
                </span>
              </div>
              <button
                onClick={() => toggleSave(load.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                  padding: '4px',
                  color: load.saved ? 'var(--accent-gold)' : 'var(--light-gray)',
                }}
                title={load.saved ? 'Unsave' : 'Save'}
              >
                {load.saved ? '★' : '☆'}
              </button>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-secondary)' }}>From:</span>
                <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {load.pickup}
                </span>
              </div>
              <div style={{ paddingLeft: '26px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                ↓
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-secondary)' }}>To:</span>
                <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {load.dropoff}
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 0',
                borderTop: '1px solid var(--border-color)',
                borderBottom: '1px solid var(--border-color)',
                marginBottom: '16px',
              }}
            >
              <div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Rate</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--success-green)' }}>
                  ${load.rate.toLocaleString()}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Distance</div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {load.distance} mi
                </div>
              </div>
            </div>

            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              <div>Posted: {load.postedDate}</div>
              <div>By: {load.company}</div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                style={{
                  flex: 1,
                  padding: '11px 18px',
                  backgroundColor: 'var(--primary-navy)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-navy-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-navy)';
                }}
                onClick={() => onViewJob && onViewJob(load.id)}
              >
                Place Bid
              </button>
              <button
                style={{
                  padding: '11px 18px',
                  backgroundColor: 'transparent',
                  color: 'var(--accent-gold)',
                  border: '1px solid var(--accent-gold)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--accent-gold)';
                }}
                onClick={() => onViewJob && onViewJob(load.id)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}