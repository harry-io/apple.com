import React from 'react'
import AdminProducts from '../../Components/Admin/AdminProducts';
import { Analytics } from '../../Components/Admin/Analytics';
import Dashboard from '../../Components/Admin/Dashboard';
import Settings from '../../Components/Admin/Settings';
import Sidebar from '../../Components/Admin/Sidebar';

const Admin = () => {
    return (
        <>
            {/* <Sidebar /> */}
            <Dashboard />
            <AdminProducts />
            <Analytics />
            <Settings />
        </>
    )
}

export default Admin;