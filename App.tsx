
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeSection from './components/sections/WelcomeSection';
import RaceVideoSection from './components/sections/RaceVideoSection';
import LogisticsSection from './components/sections/LogisticsSection';
import ScheduleSection from './components/sections/ScheduleSection';
import FindBibSection from './components/sections/FindBibSection';
import VolunteersSection from './components/sections/VolunteersSection';
import MapsSection from './components/sections/MapsSection';
import CultureSection from './components/sections/CultureSection';
import SponsorsSection from './components/sections/SponsorsSection';
import BottomNav from './components/BottomNav';
import InstallPWA from './components/InstallPWA';
import PointsOfInterestSection from './components/sections/PointsOfInterestSection';
import TshirtSection from './components/sections/TshirtSection';
import TrophySection from './components/sections/TrophySection';

const App: React.FC = () => {
  return (
    <div className="text-gray-800 min-h-screen pb-16 md:pb-0">
      <Header />
      <main>
        <WelcomeSection />
        <RaceVideoSection />
        <LogisticsSection />
        <ScheduleSection />
        <FindBibSection />
        <VolunteersSection />
        <MapsSection />
        <PointsOfInterestSection />
        <TshirtSection />
        <TrophySection />
        <CultureSection />
        <SponsorsSection />
      </main>
      <Footer />
      <BottomNav />
      <InstallPWA />
    </div>
  );
};

export default App;
