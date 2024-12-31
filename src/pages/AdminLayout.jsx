import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className='flex h-[100vh]'>
            <Sidebar></Sidebar>
            <div className='flex-1 overflow-y-auto'>
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default AdminLayout;