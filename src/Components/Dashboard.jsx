// Dashboard.jsx
import React from 'react';
import MapComponent from './MapArea/MapComponent';
import Sidebar from './Sidebar/Sidebar';

function Dashboard() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen overflow-y-auto">
            {/* Sidebar - takes full width on mobile and 1/5 width on desktop */}
            <div className="w-full md:w-1/5">
                <Sidebar />
            </div>

            {/* Map Component - takes full width on mobile and remaining space on desktop */}
            <div className="w-full md:w-4/5">
                <MapComponent />
            </div>
        </div>
    );
}

export default Dashboard;
