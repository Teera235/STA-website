import KlonasHero from '../components/KlonasHero';
import KlonasAbout from '../components/KlonasAbout';
import KlonasOverview from '../components/KlonasOverview';
import KlonasPhases from '../components/KlonasPhases';
import KlonasTeamStructure from '../components/KlonasTeamStructure';
import KlonasTeamMembers from '../components/KlonasTeamMembers';
import Footer from '../components/Footer';

const KlonasPage = () => {
  return (
    <>
      <KlonasHero />
      <KlonasAbout />
      <KlonasOverview />
      <KlonasPhases />
      <KlonasTeamStructure />
      <KlonasTeamMembers />
      <Footer />
    </>
  );
};

export default KlonasPage;
