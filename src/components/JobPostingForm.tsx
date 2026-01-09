import { useState } from 'react';
import { useIsMobile } from '../components/ui/use-mobile';

interface JobPostingFormProps {
  onBack: () => void;
}

export function JobPostingForm({ onBack }: JobPostingFormProps) {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffLocation: '',
    dropoffDate: '',
    dropoffTime: '',
    truckType: '',
    loadWeight: '',
    loadDescription: '',
    budget: '',
    specialRequirements: '',
    hazmat: false,
    temperatureControlled: false,
    insurance: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Job posted successfully! Drivers will be notified.');
    onBack();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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
          ← Back to Drivers
        </button>
        <h1 style={{ fontSize: '36px', margin: '0 0 12px 0', color: 'var(--primary-navy)', fontWeight: '500' }}>
          Post a New Job
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', margin: 0 }}>
          Fill in the details to connect with qualified drivers
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            backgroundColor: 'var(--bg-white)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '32px',
            marginBottom: '24px',
          }}
        >
          <h2 style={{ fontSize: '20px', margin: '0 0 24px 0', color: 'var(--primary-navy)', fontWeight: '500' }}>
            Pickup Information
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '24px' }}>
            <div>
              <label
                htmlFor="pickupLocation"
                style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
              >
                Pickup Location *
              </label>
              <select
                id="pickupLocation"
                name="pickupLocation"
                required
                value={formData.pickupLocation}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  fontSize: '15px',
                  backgroundColor: 'white',
                }}
              >
                <option value="">Select pickup location</option>
                <option value="Harare">Harare</option>
                <option value="Bulawayo">Bulawayo</option>
                <option value="Mutare">Mutare</option>
                <option value="Gweru">Gweru</option>
                <option value="Masvingo">Masvingo</option>
                <option value="Chitungwiza">Chitungwiza</option>
                <option value="Kwekwe">Kwekwe</option>
                <option value="Victoria Falls">Victoria Falls</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
              <div>
                <label
                  htmlFor="pickupDate"
                  style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
                >
                  Pickup Date *
                </label>
                <input
                  type="date"
                  id="pickupDate"
                  name="pickupDate"
                  required
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="pickupTime"
                  style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
                >
                  Pickup Time *
                </label>
                <input
                  type="time"
                  id="pickupTime"
                  name="pickupTime"
                  required
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'var(--bg-white)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '32px',
            marginBottom: '24px',
          }}
        >
          <h2 style={{ fontSize: '20px', margin: '0 0 24px 0', color: 'var(--primary-navy)', fontWeight: '500' }}>
            Delivery Information
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '24px' }}>
            <div>
              <label
                htmlFor="dropoffLocation"
                style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
              >
                Delivery Location *
              </label>
              <select
                id="dropoffLocation"
                name="dropoffLocation"
                required
                value={formData.dropoffLocation}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  fontSize: '15px',
                  backgroundColor: 'white',
                }}
              >
                <option value="">Select delivery location</option>
                <option value="Harare">Harare</option>
                <option value="Bulawayo">Bulawayo</option>
                <option value="Mutare">Mutare</option>
                <option value="Gweru">Gweru</option>
                <option value="Masvingo">Masvingo</option>
                <option value="Chitungwiza">Chitungwiza</option>
                <option value="Kwekwe">Kwekwe</option>
                <option value="Victoria Falls">Victoria Falls</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
              <div>
                <label
                  htmlFor="dropoffDate"
                  style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
                >
                  Delivery Date *
                </label>
                <input
                  type="date"
                  id="dropoffDate"
                  name="dropoffDate"
                  required
                  value={formData.dropoffDate}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="dropoffTime"
                  style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
                >
                  Delivery Time *
                </label>
                <input
                  type="time"
                  id="dropoffTime"
                  name="dropoffTime"
                  required
                  value={formData.dropoffTime}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'var(--bg-white)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '32px',
            marginBottom: '24px',
          }}
        >
          <h2 style={{ fontSize: '20px', margin: '0 0 24px 0', color: 'var(--primary-navy)', fontWeight: '500' }}>
            Load Details
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            <div>
              <label
                htmlFor="truckType"
                style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
              >
                Required Truck Type *
              </label>
              <select
                id="truckType"
                name="truckType"
                required
                value={formData.truckType}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  fontSize: '15px',
                  backgroundColor: 'white',
                }}
              >
                <option value="">Select truck type</option>
                <option value="Flatbed">Flatbed</option>
                <option value="Dry Van">Dry Van</option>
                <option value="Reefer">Reefer (Temperature Controlled)</option>
                <option value="Box Truck">Box Truck</option>
                <option value="Tanker">Tanker</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="loadWeight"
                style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
              >
                Estimated Load Weight (kg) *
              </label>
              <input
                type="number"
                id="loadWeight"
                name="loadWeight"
                required
                value={formData.loadWeight}
                onChange={handleInputChange}
                placeholder="e.g., 5000"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  fontSize: '15px',
                }}
              />
            </div>

            <div>
              <label
                htmlFor="loadDescription"
                style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
              >
                Load Description *
              </label>
              <textarea
                id="loadDescription"
                name="loadDescription"
                required
                value={formData.loadDescription}
                onChange={handleInputChange}
                placeholder="Describe the cargo, packaging, and any special handling instructions..."
                rows={4}
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

            <div>
              <label
                htmlFor="budget"
                style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
              >
                Budget (USD) *
              </label>
              <input
                type="number"
                id="budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="e.g., 2500"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  fontSize: '15px',
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'var(--bg-white)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '32px',
            marginBottom: '24px',
          }}
        >
          <h2 style={{ fontSize: '20px', margin: '0 0 24px 0', color: 'var(--primary-navy)', fontWeight: '500' }}>
            Additional Requirements
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                fontSize: '15px',
                color: 'var(--text-primary)',
              }}
            >
              <input
                type="checkbox"
                name="hazmat"
                checked={formData.hazmat}
                onChange={handleInputChange}
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                }}
              />
              HAZMAT Certification Required
            </label>

            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                fontSize: '15px',
                color: 'var(--text-primary)',
              }}
            >
              <input
                type="checkbox"
                name="temperatureControlled"
                checked={formData.temperatureControlled}
                onChange={handleInputChange}
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                }}
              />
              Temperature Controlled Transport
            </label>

            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                fontSize: '15px',
                color: 'var(--text-primary)',
              }}
            >
              <input
                type="checkbox"
                name="insurance"
                checked={formData.insurance}
                onChange={handleInputChange}
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                }}
              />
              Additional Insurance Coverage Required
            </label>

            <div style={{ marginTop: '8px' }}>
              <label
                htmlFor="specialRequirements"
                style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}
              >
                Special Requirements or Notes
              </label>
              <textarea
                id="specialRequirements"
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleInputChange}
                placeholder="Any additional requirements, access restrictions, or special instructions..."
                rows={3}
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
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(198, 156, 109, 0.08)',
            border: '1px solid rgba(198, 156, 109, 0.3)',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
          }}
        >
          <h3 style={{ fontSize: '16px', margin: '0 0 12px 0', color: 'var(--primary-navy)', fontWeight: '600' }}>
            What happens next?
          </h3>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
            <li>Your job will be posted to qualified drivers in the network</li>
            <li>Drivers can review details and submit bids</li>
            <li>You'll receive notifications as bids come in</li>
            <li>Review driver profiles, ratings, and bids to select the best fit</li>
            <li>Award the contract and coordinate pickup details</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
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
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}
