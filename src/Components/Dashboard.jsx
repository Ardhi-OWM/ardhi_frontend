// Dashboard.jsx
import React from 'react';
import MapComponent from './MapArea/MapComponent';

function Dashboard() {
    return (
        <div className="flex flex-col min-h-screen">
            <MapComponent />
        </div>
    );
}

export default Dashboard;
