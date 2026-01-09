import { useState } from 'react';
import { useIsMobile } from '../components/ui/use-mobile';

interface Job {
  id: number;
  pickup: string;
  dropoff: string;
  date: string;
  truckType: string;
  weight: string;
  rate: string;
  distance: string;
  status: string;
  postedBy: {
    name: string;
    company: string;
    rating: number;
    reviewCount: number;
    jobsPosted: number;
    location: string;
  };
  description: string;
  requirements: string[];
  pickupTime: string;
  dropoffTime: string;
}

interface JobDetailsAndBidProps {
  job: Job;
  onBack: () => void;
}

export function JobDetailsAndBid({ job, onBack }: JobDetailsAndBidProps) {
  const [bidAmount, setBidAmount] = useState('');
  const [estimatedDays, setEstimatedDays] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [insurance, setInsurance] = useState(false);
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Bid submitted successfully! The client will review and respond shortly.');
    onBack();
  };

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

  const toggleService = (service: string) => {
    setAdditionalServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const isMobile = useIsMobile();

  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 0',
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '14px',
            cursor: 'pointer',
            marginBottom: '16px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--primary-navy)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          ← Back to Jobs
        </button>
        <h1 style={{ fontSize: '36px', margin: '0 0 12px 0', color: 'var(--primary-navy)', fontWeight: '500' }}>
          Job Details
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', margin: 0 }}>
          Review the details and submit your competitive bid
        </p>
      </div>isMobile ? '1fr' : 

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        {/* Left Column - Job Details and Bid Form */}
        <div>
          {/* Job Information */}
          <div
            style={{
              backgroundColor: 'var(--bg-white)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '32px',
              marginBottom: '24px',
            }}
          >
            <h2 style={{ fontSize: '24px', margin: '0 0 8px 0', color: 'var(--primary-navy)', fontWeight: '500' }}>
              {job.pickup} → {job.dropoff}
            </h2>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', fontSize: '14px', color: 'var(--text-secondary)' }}>
              <span>Posted 2 hours ago</span>
              <span>•</span>
              <span>{job.distance}</span>
              <span>•</span>
              <span
                style={{
                  color: job.status === 'Urgent' ? '#dc2626' : '#16a34a',
                  fontWeight: '600',
                }}
              >
                {job.status}
              </span>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 16px 0', color: 'var(--text-primary)', fontWeight: '600' }}>
                Route Details
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  padding: '20px',
                  backgroundColor: 'var(--bg-light)',
                  borderRadius: '8px',
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Pickup</div>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '2px' }}>
                    {job.pickup}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    {job.date} at {job.pickupTime}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Dropoff</div>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '2px' }}>
                    {job.dropoff}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    {job.dropoffTime}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 16px 0', color: 'var(--text-primary)', fontWeight: '600' }}>
                Load Information
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Truck Type</div>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {job.truckType}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Weight</div>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {job.weight}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Distance</div>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {job.distance}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Client Budget</div>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--success-green)' }}>
                    {job.rate}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 12px 0', color: 'var(--text-primary)', fontWeight: '600' }}>
                Description
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                {job.description}
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', margin: '0 0 12px 0', color: 'var(--text-primary)', fontWeight: '600' }}>
                Requirements
              </h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {job.requirements.map((req, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: 'rgba(27, 57, 87, 0.08)',
                      color: 'var(--primary-navy)',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                    }}
                  >
                    {req}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bid Form */}
          <div
            style={{
              backgroundColor: 'var(--bg-white)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '32px',
            }}
          >
            <h2 style={{ fontSize: '20px', margin: '0 0 24px 0', color: 'var(--primary-navy)', fontWeight: '500' }}>
              Submit Your Bid
            </h2>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="bidAmount"
                  style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
                >
                  Your Bid Amount (USD) *
                </label>
                <input
                  type="number"
                  id="bidAmount"
                  required
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder="Enter your bid amount"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                  }}
                />
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px' }}>
                  Client budget: {job.rate}
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="estimatedDays"
                  style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
                >
                  Estimated Delivery Time (days) *
                </label>
                <input
                  type="number"
                  id="estimatedDays"
                  required
                  value={estimatedDays}
                  onChange={(e) => setEstimatedDays(e.target.value)}
                  placeholder="Number of days to complete"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="coverLetter"
                  style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
                >
                  Cover Letter *
                </label>
                <textarea
                  id="coverLetter"
                  required
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  placeholder="Explain why you're the best fit for this job, your relevant experience, and any additional information..."
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    resize: 'vertical',
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Additional Services
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      fontSize: '14px',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={insurance}
                      onChange={(e) => setInsurance(e.target.checked)}
                      style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                    Provide additional insurance coverage
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      fontSize: '14px',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={additionalServices.includes('tracking')}
                      onChange={() => toggleService('tracking')}
                      style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                    Real-time GPS tracking
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      fontSize: '14px',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={additionalServices.includes('loading')}
                      onChange={() => toggleService('loading')}
                      style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                    Loading/Unloading assistance
                  </label>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(198, 156, 109, 0.08)',
                  border: '1px solid rgba(198, 156, 109, 0.3)',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '24px',
                }}
              >
                <h4 style={{ fontSize: '14px', margin: '0 0 8px 0', color: 'var(--primary-navy)', fontWeight: '600' }}>
                  Bidding Tips
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.8' }}>
                  <li>Be competitive but fair with your pricing</li>
                  <li>Highlight your relevant experience and certifications</li>
                  <li>Respond promptly to client questions</li>
                  <li>Provide a realistic delivery timeline</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  onClick={onBack}
                  style={{
                    padding: '14px 28px',
                    backgroundColor: 'transparent',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-light)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: '14px 32px',
                    backgroundColor: 'var(--primary-navy)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-navy-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-navy)';
                  }}
                >
                  Submit Bid
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column - Client Information */}
        <div>
          <div
            style={{
              backgroundColor: 'var(--bg-white)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '24px',
              position: 'sticky',
              top: '24px',
            }}
          >
            <h3 style={{ fontSize: '16px', margin: '0 0 20px 0', color: 'var(--text-primary)', fontWeight: '600' }}>
              About the Client
            </h3>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-navy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: 'bold',
                  margin: '0 auto 12px',
                }}
              >
                {job.postedBy.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <h4 style={{ fontSize: '18px', margin: '0 0 4px 0', color: 'var(--text-primary)' }}>
                {job.postedBy.name}
              </h4>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                {job.postedBy.company}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span style={{ fontSize: '14px', color: 'var(--accent-gold)' }}>{renderStars(job.postedBy.rating)}</span>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>{job.postedBy.rating}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  ({job.postedBy.reviewCount})
                </span>
              </div>
            </div>

            <div
              style={{
                padding: '16px',
                backgroundColor: 'var(--bg-light)',
                borderRadius: '8px',
                marginBottom: '20px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Location</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {job.postedBy.location}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Jobs Posted</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {job.postedBy.jobsPosted}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Member Since</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  Jan 2024
                </span>
              </div>
            </div>

            <div
              style={{
                padding: '16px',
                backgroundColor: 'rgba(22, 163, 74, 0.08)',
                border: '1px solid rgba(22, 163, 74, 0.3)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Payment Verified
              </div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#166534' }}>
                ✓ Identity Verified Client
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
