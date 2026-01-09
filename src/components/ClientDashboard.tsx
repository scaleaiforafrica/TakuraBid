import { useState } from 'react';

interface Driver {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  truckTypes: string[];
  tripsCompleted: number;
  hourlyRate: number;
  location: string;
  availability: string;
  badges: string[];
}

interface ClientDashboardProps {
  onPostJob: () => void;
}

export function ClientDashboard({ onPostJob }: ClientDashboardProps) {
  const [drivers] = useState<Driver[]>([
    {
      id: 1,
      name: 'John Moyo',
      rating: 4.9,
      reviewCount: 47,
      truckTypes: ['Flatbed', 'Dry Van'],
      tripsCompleted: 47,
      hourlyRate: 85,
      location: 'Harare',
      availability: 'Available Now',
      badges: ['CDL A', 'HAZMAT'],
    },
    {
      id: 2,
      name: 'Sarah Ncube',
      rating: 5.0,
      reviewCount: 62,
      truckTypes: ['Reefer', 'Dry Van'],
      tripsCompleted: 62,
      hourlyRate: 95,
      location: 'Bulawayo',
      availability: 'Available Now',
      badges: ['CDL A', 'Temperature Controlled'],
    },
    {
      id: 3,
      name: 'Michael Chikwanha',
      rating: 4.8,
      reviewCount: 38,
      truckTypes: ['Flatbed', 'Box Truck'],
      tripsCompleted: 38,
      hourlyRate: 75,
      location: 'Mutare',
      availability: 'Available Jan 10',
      badges: ['CDL A'],
    },
    {
      id: 4,
      name: 'Lisa Marowa',
      rating: 4.9,
      reviewCount: 54,
      truckTypes: ['Dry Van', 'Reefer'],
      tripsCompleted: 54,
      hourlyRate: 90,
      location: 'Gweru',
      availability: 'Available Now',
      badges: ['CDL A', 'Cross-Country'],
    },
    {
      id: 5,
      name: 'David Sibanda',
      rating: 4.7,
      reviewCount: 31,
      truckTypes: ['Flatbed'],
      tripsCompleted: 31,
      hourlyRate: 80,
      location: 'Masvingo',
      availability: 'Available Now',
      badges: ['CDL A', 'HAZMAT'],
    },
    {
      id: 6,
      name: 'Rachel Dube',
      rating: 5.0,
      reviewCount: 45,
      truckTypes: ['Dry Van', 'Box Truck'],
      tripsCompleted: 45,
      hourlyRate: 88,
      location: 'Chitungwiza',
      availability: 'Available Jan 9',
      badges: ['CDL A', 'Temperature Controlled'],
    },
  ]);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return (
      <>
        {'★'.repeat(fullStars)}
        {hasHalfStar && '½'}
        {'☆'.repeat(5 - Math.ceil(rating))}
      </>
    );
  };

  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', margin: '0 0 12px 0', color: 'var(--primary-navy)', fontWeight: '500' }}>
          Professional Driver Network
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', margin: 0 }}>
          Connect with verified, experienced drivers across Zimbabwe
        </p>
      </div>

      <div
        style={{
          marginBottom: '24px',
          padding: '20px',
          backgroundColor: 'var(--bg-white)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          placeholder="Search by location or truck type..."
          style={{
            flex: 1,
            minWidth: '250px',
            padding: '12px 16px',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            fontSize: '15px',
          }}
        />
        <select
          style={{
            padding: '12px 16px',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            fontSize: '15px',
            backgroundColor: 'white',
            cursor: 'pointer',
          }}
        >
          <option>All Truck Types</option>
          <option>Flatbed</option>
          <option>Dry Van</option>
          <option>Reefer</option>
          <option>Box Truck</option>
        </select>
        <button
          style={{
            padding: '12px 24px',
            backgroundColor: 'var(--primary-navy)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-navy-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-navy)';
          }}
          onClick={onPostJob}
        >
          Post a Job
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {drivers.map((driver) => (
          <div
            key={driver.id}
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
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--primary-navy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  flexShrink: 0,
                }}
              >
                {driver.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', margin: '0 0 6px 0', color: 'var(--text-primary)' }}>
                  {driver.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '14px', color: 'var(--accent-gold)' }}>{renderStars(driver.rating)}</span>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>{driver.rating}</span>
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    ({driver.reviewCount})
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  Location: {driver.location}
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '12px',
                backgroundColor: 'var(--bg-light)',
                borderRadius: '8px',
                marginBottom: '12px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Truck Types:</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {driver.truckTypes.join(', ')}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Trips Completed:</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {driver.tripsCompleted}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Rate:</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--success-green)' }}>
                  ${driver.hourlyRate}/hr
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {driver.badges.map((badge, index) => (
                <span
                  key={index}
                  style={{
                    padding: '4px 10px',
                    backgroundColor: 'rgba(27, 57, 87, 0.08)',
                    color: 'var(--primary-navy)',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '600',
                  }}
                >
                  {badge}
                </span>
              ))}
              <span
                style={{
                  padding: '4px 10px',
                  backgroundColor:
                    driver.availability === 'Available Now' ? '#dcfce7' : '#fef3c7',
                  color:
                    driver.availability === 'Available Now' ? '#166534' : '#92400e',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: '600',
                }}
              >
                {driver.availability}
              </span>
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
              >
                Hire Driver
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
              >
                Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}