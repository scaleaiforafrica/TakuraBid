import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { DriverDashboard } from './components/DriverDashboard';
import { DriverProfile } from './components/DriverProfile';
import { Analytics } from './components/Analytics';
import { ClientDashboard } from './components/ClientDashboard';
import { Messages } from './components/Messages';
import { JobPostingForm } from './components/JobPostingForm';
import { JobDetailsAndBid } from './components/JobDetailsAndBid';
import { useIsMobile } from './components/ui/use-mobile';

export default function App() {
  const [currentPage, setCurrentPage] = useState('jobs');
  const [userType, setUserType] = useState<'driver' | 'client'>('driver');
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  // Mock job data - in a real app this would come from a database
  const mockJobs = [
    {
      id: 1,
      pickup: 'Harare',
      dropoff: 'Bulawayo',
      date: 'Jan 12, 2026',
      truckType: 'Flatbed',
      weight: '5,000 kg',
      rate: '$2,800',
      distance: '439 km',
      status: 'Open',
      postedBy: {
        name: 'Michael Khumalo',
        company: 'Zimbabwe Freight Solutions',
        rating: 4.8,
        reviewCount: 34,
        jobsPosted: 127,
        location: 'Harare',
      },
      description: 'Transport construction materials from our Harare warehouse to a construction site in Bulawayo. Load consists of steel beams and concrete blocks, properly palletized and ready for loading. Site has forklift available for unloading.',
      requirements: ['CDL A License', 'Flatbed Experience', 'Load Securing Certification'],
      pickupTime: '08:00 AM',
      dropoffTime: 'By 5:00 PM',
    },
    {
      id: 2,
      pickup: 'Mutare',
      dropoff: 'Harare',
      date: 'Jan 11, 2026',
      truckType: 'Dry Van',
      weight: '3,200 kg',
      rate: '$1,900',
      distance: '265 km',
      status: 'Urgent',
      postedBy: {
        name: 'Sarah Moyo',
        company: 'Express Logistics ZW',
        rating: 4.9,
        reviewCount: 52,
        jobsPosted: 203,
        location: 'Mutare',
      },
      description: 'Time-sensitive delivery of packaged electronics and consumer goods. All items are boxed and labeled. Requires careful handling and climate control recommended due to sensitive electronics.',
      requirements: ['CDL A License', 'Clean Driving Record', 'Insurance Coverage'],
      pickupTime: '06:00 AM',
      dropoffTime: 'By 2:00 PM',
    },
    {
      id: 3,
      pickup: 'Harare',
      dropoff: 'Masvingo',
      date: 'Jan 13, 2026',
      truckType: 'Reefer',
      weight: '4,500 kg',
      rate: '$2,100',
      distance: '292 km',
      status: 'Open',
      postedBy: {
        name: 'David Ncube',
        company: 'ColdChain Zimbabwe',
        rating: 5.0,
        reviewCount: 41,
        jobsPosted: 156,
        location: 'Harare',
      },
      description: 'Temperature-controlled transport of perishable food products. Must maintain consistent temperature between 2-4°C throughout transit. Professional cold chain experience required.',
      requirements: ['CDL A License', 'Reefer Certified', 'Temperature Monitoring', 'Food Safety Training'],
      pickupTime: '05:00 AM',
      dropoffTime: 'By 12:00 PM',
    },
    {
      id: 4,
      pickup: 'Gweru',
      dropoff: 'Bulawayo',
      date: 'Jan 14, 2026',
      truckType: 'Box Truck',
      weight: '2,100 kg',
      rate: '$1,200',
      distance: '157 km',
      status: 'Open',
      postedBy: {
        name: 'Lisa Sibanda',
        company: 'Midlands Transport',
        rating: 4.7,
        reviewCount: 28,
        jobsPosted: 89,
        location: 'Gweru',
      },
      description: 'Local delivery of office furniture and equipment. Multiple stop delivery with 3 locations in Bulawayo. Liftgate required for some deliveries.',
      requirements: ['CDL B License', 'Liftgate Experience'],
      pickupTime: '09:00 AM',
      dropoffTime: 'By 5:00 PM',
    },
    {
      id: 5,
      pickup: 'Chitungwiza',
      dropoff: 'Kwekwe',
      date: 'Jan 15, 2026',
      truckType: 'Flatbed',
      weight: '3,800 kg',
      rate: '$1,500',
      distance: '189 km',
      status: 'Open',
      postedBy: {
        name: 'James Dube',
        company: 'Central Haulage',
        rating: 4.8,
        reviewCount: 36,
        jobsPosted: 142,
        location: 'Chitungwiza',
      },
      description: 'Agricultural equipment transport. Load includes farming machinery that requires proper securing and tarping. Experience with oversized loads preferred.',
      requirements: ['CDL A License', 'Flatbed Certified', 'Load Securing'],
      pickupTime: '07:00 AM',
      dropoffTime: 'By 4:00 PM',
    },
    {
      id: 6,
      pickup: 'Bulawayo',
      dropoff: 'Victoria Falls',
      date: 'Jan 16, 2026',
      truckType: 'Dry Van',
      weight: '4,200 kg',
      rate: '$3,500',
      distance: '440 km',
      status: 'Open',
      postedBy: {
        name: 'Rachel Marowa',
        company: 'Western Corridor Logistics',
        rating: 4.9,
        reviewCount: 47,
        jobsPosted: 178,
        location: 'Bulawayo',
      },
      description: 'Long-haul delivery of hospitality supplies to Victoria Falls hotels. Premium service required with white-glove delivery. Professional appearance and conduct essential.',
      requirements: ['CDL A License', 'Clean Record', 'Professional Service'],
      pickupTime: '06:00 AM',
      dropoffTime: 'By 6:00 PM',
    },
  ];

  const handleViewJob = (jobId: number) => {
    setSelectedJobId(jobId);
    setCurrentPage('job-details');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'jobs':
        return userType === 'driver' ? (
          <DriverDashboard onViewJob={handleViewJob} />
        ) : (
          <ClientDashboard onPostJob={() => setCurrentPage('post-job')} />
        );
      case 'job-details':
        if (selectedJobId !== null) {
          const job = mockJobs.find((j) => j.id === selectedJobId);
          if (job) {
            return <JobDetailsAndBid job={job} onBack={() => setCurrentPage('jobs')} />;
          }
        }
        return <DriverDashboard onViewJob={handleViewJob} />;
      case 'post-job':
        return <JobPostingForm onBack={() => setCurrentPage('jobs')} />;
      case 'messages':
        return <Messages />;
      case 'analytics':
        return <Analytics />;
      case 'profile':
        return <DriverProfile />;
      default:
        return userType === 'driver' ? (
          <DriverDashboard onViewJob={handleViewJob} />
        ) : (
          <ClientDashboard onPostJob={() => setCurrentPage('post-job')} />
        );
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-light)' }}>
      {!isMobile && (
        <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} userType={userType} />
      )}

      <div style={{ flex: 1, marginLeft: isMobile ? 0 : '260px', transition: 'margin-left 0.2s ease', width: '100%', position: 'relative' }}>
        <div style={{ zIndex: 50, position: 'relative' }}>
            <TopBar 
                userType={userType} 
                onUserTypeChange={setUserType} 
                onMenuClick={isMobile ? () => setIsSidebarOpen(!isSidebarOpen) : undefined}
            />
            {isMobile && isSidebarOpen && (
                <div 
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        zIndex: 49,
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    }}
                >
                    <Sidebar
                    currentPage={currentPage}
                    onNavigate={(page) => {
                        setCurrentPage(page);
                        setIsSidebarOpen(false);
                    }}
                    userType={userType}
                    onUserTypeChange={setUserType}
                    mobile
                    />
                </div>
            )}
        </div>
        <main style={{ padding: isMobile ? '16px' : '24px' }}>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}