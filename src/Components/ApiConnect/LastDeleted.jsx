// LastDeleted.js
import React from 'react';

export default function LastDeleted({ deletedServices, onRestoreService, onDeletePermanently }) {
    return (
        <div>
            <h2 className="text-lg font-bold text-gray-300 mb-4">Last Deleted Services</h2>
            {deletedServices.length > 0 ? (
                <ul className="list-disc pl-5 text-gray-400 space-y-4">
                    {deletedServices.map((service, index) => (
                        <li key={index} className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                {service.name} - {service.provider} ({service.type}), url:{" "}
                                <span style={{ fontStyle: "italic" }}>{service.apiUrl}</span>
                            </div>
                            <div className="mt-2 md:mt-0 flex space-x-2">
                                <button
                                    onClick={() => onRestoreService(service.apiUrl)}
                                    className="px-4 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
                                >
                                    Restore
                                </button>
                                <button
                                    onClick={() => onDeletePermanently(service.name)}
                                    className="px-4 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                                >
                                    Delete Permanently
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No deleted services to show.</p>
            )}
        </div>
    );
}
