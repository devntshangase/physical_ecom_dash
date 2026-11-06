import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import Sidebar from '../components/sidebar/Sidebar';

function DashboardLayout() {
  return (
    <div className="bg-slate-100 h-screen">
      <Header />
      <div className="flex p-4 gap-4">
        <Sidebar />
        <div className="flex w-full">
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout