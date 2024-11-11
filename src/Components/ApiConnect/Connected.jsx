// Connected.js
import React from 'react';
import Button from '../Reuse/Button';

export default function Connected({ services, searchTerm, setSearchTerm, confirmAndDelete, setIsModalOpen }) {
    return (
        <div>
            {/* Search Input */}
            <div className="relative mb-4">
                <input
                    type="text"
                    placeholder="Filter by name"
                    className="w-full px-4 py-2 rounded-md placeholder-gray-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Conditional Table Rendering */}
            {services.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="w-full rounded-md">
                        <thead className="hidden md:table-header-group">
                            <tr>
                                <th className="px-4 py-2 text-left font-medium">Name</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-300">Provider</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-300">Type</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-300">Region</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service, index) => (
                                <tr key={index} className="md:border-t md:border-gray-500/[.25] flex flex-col md:table-row mb-4 md:mb-0">
                                    <td className="px-4 py-2 md:table-cell">{service.name}</td>
                                    <td className="px-4 py-2 md:table-cell">{service.provider}</td>
                                    <td className="px-4 py-2 md:table-cell">
                                        <span className="px-2 py-1 rounded-full bg-gray-700 text-gray-300 text-sm">{service.type}</span>
                                    </td>
                                    <td className="px-4 py-2 md:table-cell">{service.region}</td>
                                    <td className="px-4 py-2 md:table-cell">
                                        <button
                                            className="text-red-500 hover:underline"
                                            onClick={() => confirmAndDelete(service.name)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Add New Service Button */}
            <div className="mt-6">
                <Button
                    className="w-full md:w-auto px-4 py-2 "
                    onClick={() => setIsModalOpen(true)}
                >
                    Add New Service
                </Button>
            </div>
        </div>
    );
}
