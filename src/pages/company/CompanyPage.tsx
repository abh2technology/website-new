import { Routes, Route, Navigate } from 'react-router-dom';
import Overview from '../about/Overview';
import Values from '../about/Values';
import People from '../about/People';
import History from './History';
import Leadership from './Leadership';
import Locations from './Locations';
import Media from './Media';

const CompanyPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/company/about/overview" replace />} />
      <Route path="/about/overview" element={<Overview />} />
      <Route path="/about/values" element={<Values />} />
      <Route path="/about/people" element={<People />} />
      <Route path="/about/history" element={<History />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/media/*" element={<Media />} />
    </Routes>
  );
};

export default CompanyPage;