// Dashboard.jsx
import React from 'react';
import MapComponent from './MapArea/MapComponent';
import Sidebar from './Sidebar/Sidebar';

function Dashboard() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar - occupies 1/5 of the width on medium and larger screens */}
            <div className="w-full md:w-1/5">
                <Sidebar />
            </div>

            {/* Map Component - occupies remaining space */}
            <div className="w-full md:w-4/5">
                <MapComponent />
            </div>
        </div>
    );
}

export default Dashboard;
