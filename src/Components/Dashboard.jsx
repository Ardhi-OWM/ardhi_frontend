import React from 'react';
import MapComponent from './MapArea/MapComponent';
import Sidebar from './Sidebar/Sidebar';
import ViewAnalytics from './ViewAnalytics';

function Dashboard() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar - fixed position, takes full width on mobile and 1/5 width on desktop */}
            <div className="fixed left-0 w-full md:w-1/5 h-screen">
                <Sidebar />
            </div>

            {/* Main Content - including MapComponent and ViewAnalytics */}
            <div className="w-full md:w-4/5 ml-auto h-screen overflow-y-auto">
                <div className="flex flex-col space-y-4">
                    {/* Map Component */}
                    <MapComponent />

                    {/* ViewAnalytics - Ensure it's visible below MapComponent */}
                    <ViewAnalytics />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
