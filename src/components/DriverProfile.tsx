import { ImageWithFallback } from './figma/ImageWithFallback';

interface PastJob {
  id: number;
  route: string;
  date: string;
  rating: number;
  earnings: number;
  client: string;
}

export function DriverProfile() {
  const pastJobs: PastJob[] = [
    {
      id: 1,
      route: 'Harare → Bulawayo',
      date: 'Jan 5, 2026',
      rating: 5,
      earnings: 2800,
      client: 'Zimbabwe Freight Solutions',
    },
    {
      id: 2,
      route: 'Mutare → Harare',
      date: 'Jan 3, 2026',
      rating: 5,
      earnings: 1900,
      client: 'Express Logistics ZW',
    },
    {
      id: 3,
      route: 'Harare → Masvingo',
      date: 'Dec 28, 2025',
      rating: 4,
      earnings: 2100,
      client: 'ColdChain Zimbabwe',
    },
    {
      id: 4,
      route: 'Gweru → Bulawayo',
      date: 'Dec 22, 2025',
      rating: 5,
      earnings: 1200,
      client: 'Midlands Transport',
    },
    {
      id: 5,
      route: 'Chitungwiza → Kwekwe',
      date: 'Dec 18, 2025',
      rating: 5,
      earnings: 1500,
      client: 'Central Haulage',
    },
  ];

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: 'var(--bg-white)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '32px',
          marginBottom: '24px',
        }}
      >
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '12px',
              backgroundColor: 'var(--primary-purple)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '48px',
              fontWeight: 'bold',
              flexShrink: 0,
            }}
          >
            TM
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
              <div>
                <h2 style={{ fontSize: '28px', margin: '0 0 8px 0', color: 'var(--text-primary)' }}>
                  Tendai Moyo
                </h2>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '16px', fontWeight: '600' }}>Rating: 4.9</span>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>(47 reviews)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Flatbed, Dry Van</span>
                  </div>
                </div>
              </div>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'var(--primary-purple)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-purple-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-purple)';
                }}
              >
                Edit Profile
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '16px',
                padding: '16px',
                backgroundColor: 'var(--bg-light)',
                borderRadius: '8px',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Total Trips</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                  47
                </div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Total Earned</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--success-green)' }}>
                  $87.5K
                </div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Success Rate</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                  98%
                </div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Member Since</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                  2024
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--border-color)' }}>
          <h3 style={{ fontSize: '18px', margin: '0 0 12px 0', color: 'var(--text-primary)' }}>
            About
          </h3>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
            Professional logistics operator with 5+ years of experience in regional and long-distance freight transport. 
            Specialized in flatbed and dry van operations across Zimbabwe's major transport corridors including Harare-Bulawayo, 
            Mutare-Harare, and routes to Victoria Falls. CDL Class A certified with an exemplary safety record and consistently 
            high client satisfaction ratings. Committed to on-time deliveries and professional service.
          </p>
        </div>

        <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span
              style={{
                padding: '6px 14px',
                backgroundColor: '#dbeafe',
                color: '#1e40af',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              CDL Class A
            </span>
            <span
              style={{
                padding: '6px 14px',
                backgroundColor: '#dcfce7',
                color: '#166534',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              HAZMAT Certified
            </span>
            <span
              style={{
                padding: '6px 14px',
                backgroundColor: '#fef3c7',
                color: '#92400e',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              Temperature Controlled
            </span>
            <span
              style={{
                padding: '6px 14px',
                backgroundColor: '#ede9fe',
                color: 'var(--primary-purple)',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              Cross-Country
            </span>
          </div>
        </div>
      </div>

      {/* Truck & Equipment Gallery */}
      <div
        style={{
          backgroundColor: 'var(--bg-white)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px',
        }}
      >
        <h3 style={{ fontSize: '22px', margin: '0 0 20px 0', color: 'var(--text-primary)' }}>
          Fleet & Equipment
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3' }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1766608422198-5be9ac0aac9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVpZ2h0JTIwdHJ1Y2slMjBoaWdod2F5fGVufDF8fHx8MTc2Nzk0NDI2MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Main Freight Truck"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3' }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761853448290-790fa53a2910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHRyYWlsZXIlMjBsb2FkaW5nfGVufDF8fHx8MTc2Nzk0NDI2MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Cargo Trailer Loading"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3' }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1725449264087-28926bc1a610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY3OTQ0MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Container Load"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3' }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1649372708980-1efce0ffb7bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc3BvcnQlMjB0cnVjayUyMGNhcmdvfGVufDF8fHx8MTc2Nzk0NDI2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Transport Truck"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Truck Specifications */}
        <div
          style={{
            padding: '20px',
            backgroundColor: 'var(--bg-light)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
          }}
        >
          <h4 style={{ fontSize: '18px', margin: '0 0 16px 0', color: 'var(--text-primary)', fontWeight: '600' }}>
            Primary Vehicle Specifications
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Make & Model</div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                Freightliner Cascadia 2022
              </div>
            </div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Trailer Type</div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                53ft Flatbed / Dry Van
              </div>
            </div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Max Payload</div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                22,000 kg (48,500 lbs)
              </div>
            </div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Engine</div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                Detroit DD15 455hp
              </div>
            </div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Last Inspection</div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--success-green)' }}>
                Jan 2, 2026 ✓
              </div>
            </div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>GPS Tracking</div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                Real-time Available
              </div>
            </div>
          </div>
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
        <h3 style={{ fontSize: '22px', margin: '0 0 20px 0', color: 'var(--text-primary)' }}>
          Past Jobs & Reviews
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {pastJobs.map((job) => (
            <div
              key={job.id}
              style={{
                padding: '16px',
                backgroundColor: 'var(--bg-light)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    Route: {job.route}
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    {job.client} • {job.date}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--success-green)', marginBottom: '4px' }}>
                    ${job.earnings.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '16px' }}>{renderStars(job.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}