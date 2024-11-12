// layout.js
import React, { useState } from 'react';
import {
  handleDelete, filterServices, addService, parseServiceFromURL,

} from './functions';
import Connected from './Connected';
import LastDeleted from './LastDeleted';
//import useTheme from '../Sidebar/functions';

export default function ConnectToGISCloudServices() {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newServiceUrl, setNewServiceUrl] = useState('');
  const [confirmDelete, setConfirmDelete] = useState({ open: false, serviceName: '' });
  const [activeTab, setActiveTab] = useState('connected');
  const [deletedServices, setDeletedServices] = useState([]);


  //const { theme } = useTheme();

  const filteredServices = filterServices(services, searchTerm);

  const handleAddService = () => {
    const newService = parseServiceFromURL(newServiceUrl);
    if (newService) {
      setServices(addService(services, newService));
      setIsModalOpen(false);
      setNewServiceUrl('');
    } else {
      alert('Invalid URL. Please provide a valid API URL.');
    }
  };
  // ---------------- Delete Functions----------------

  const confirmAndDelete = (serviceName) => {
    setConfirmDelete({ open: true, serviceName });
  };

  const handleConfirmDelete = () => {
    const deletedService = services.find(service => service.name === confirmDelete.serviceName);
    setDeletedServices([...deletedServices, deletedService]);
    setServices(services.filter(service => service.name !== confirmDelete.serviceName));
    setConfirmDelete({ open: false, serviceName: '' });
  };

  // ----------------Last Deleted Functions----------------

  const handleRestoreService = (url) => {
    const restoredService = parseServiceFromURL(url);
    if (restoredService) {
      setServices([...services, restoredService]);
      setDeletedServices(deletedServices.filter(service => service.apiUrl !== url));
      setActiveTab('connected');
    } else {
      alert('Invalid URL. Please provide a valid API URL.');
    }
  };

  const handleDeletePermanently = (serviceName) => {
    setDeletedServices(deletedServices.filter(service => service.name !== serviceName));
  };

  return (
    <div className="p-4 md:p-8 min-h-screen">
      <h1 className="text-xl md:text-4xl font-bold mb-2 tracking-wide">Connect to GIS Cloud Services</h1>
      <p className="mb-4 text-sm md:text-base ">
        Use Ardhi to connect to your cloud services and easily visualize your analysis.
        You can also use Ardhi for your on-premise data sources and cloud services.
      </p>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`font-bold pb-1 px-3 ${activeTab === 'connected' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('connected')}
        >
          Connect
        </button>
        <button
          className={`font-bold pb-1 px-3 ${activeTab === 'lastDeleted' ? 'text-ourGreen border-b rounded-md border-grey-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('lastDeleted')}
        >
          Last Deleted
        </button>
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === 'connected' && (
        <Connected
          services={filteredServices}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          confirmAndDelete={confirmAndDelete}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {activeTab === 'lastDeleted' && <LastDeleted
        deletedServices={deletedServices}
        onRestoreService={handleRestoreService}
        onDeletePermanently={handleDeletePermanently}
      />}

      {/* Add Service Modal */}
      {isModalOpen && (
        // <div className={`fixed inset-0 flex items-center justify-center ${theme === 'dark' ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'}`}>
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black ">
          <div className="bg-gray-400 p-6 rounded-md">
            <h2 className="text-xl font-bold mb-4 ">Add New Service</h2>
            <input
              type="text"
              placeholder="API URL"
              className="w-full mb-2 px-4 py-2 rounded-md bg-gray-500 text-white"
              value={newServiceUrl}
              onChange={(e) => setNewServiceUrl(e.target.value)}
            />
            <button
              className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              onClick={handleAddService}
            >
              Save Service
            </button>
            <button
              className="w-full mt-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Confirm Delete Modal */}
      {confirmDelete.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-md text-center">
            <p className="text-white mb-4">Are you sure you want to delete {confirmDelete.serviceName}?</p>
            <button
              className="w-full mb-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              onClick={handleConfirmDelete}
            >
              Yes
            </button>
            <button
              className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              onClick={() => setConfirmDelete({ open: false, serviceName: '' })}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
