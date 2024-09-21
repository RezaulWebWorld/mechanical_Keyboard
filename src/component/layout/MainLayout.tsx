import Navbar from '../Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default MainLayout;