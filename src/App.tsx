import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { DashBoard } from './pages/DashBoard';
import { PageRoutes } from './constants/pageRoutes';
import { NavBar } from './components/layout/NavBar';
import { PageLayout } from './components/layout/PageLayout';

export const App = () => {
  return (
    <PageLayout>
      <NavBar />
      <Routes>
        <Route path={PageRoutes.HOME} element={<Home />} />
        <Route path={PageRoutes.DASHBOARD} element={<DashBoard />} />
      </Routes>
    </PageLayout>

  )
};