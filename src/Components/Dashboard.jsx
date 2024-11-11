import React from 'react';
import MapComponent from './MapArea/MapComponent';
import Sidebar from './Sidebar/Sidebar';
import SidebarMobile from './Sidebar/SidebarMobile';
import ViewAnalytics from './ViewAnalytics';
import History from './History/History';

function Dashboard() {
    return (
        // Activities on the Map Component 
        
        <div className="flex flex-col  md:flex-row min-h-screen">
            {/* Sidebar - fixed position, takes full width on mobile and 1/5 width on desktop */}
            <div className="w-full md:w-1/5 md:relative md:h-screen ">
                <div className="hidden md:block">
                    <Sidebar />
                </div>
                <div className="md:hidden">
                    <SidebarMobile />
                </div>
            </div>

            {/* Main Content - including MapComponent and ViewAnalytics */}
            <div className="w-full md:w-4/5 ml-auto h-screen overflow-y-auto">
                <div className="flex flex-col space-y-4">
                    {/* Map Component */}
                    <MapComponent />

                    {/* ViewAnalytics - Ensure it's visible below MapComponent */}
                    <ViewAnalytics />

                    {/* History - Ensure it's visible below ViewAnalytics */}
                    <History />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
