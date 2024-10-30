// src/Components/MapComponent.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import { mapLayers } from './mapLayers'; // Import your map layers
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const { BaseLayer } = LayersControl;


const MapComponent = () => {
    const center = [52.5200, 13.4049];

    const [activeLayer, setActiveLayer] = useState(mapLayers[0]); // Set the default layer

    const handleLayerChange = (layer) => {
        setActiveLayer(layer); // Update active layer when a menu item is clicked
    };




    return (
        <div className="relative flex flex-col md:flex-row md:justify-end p-3"> {/* relative container */}
            <div className="relative w-full md:w-4/5" style={{ height: '70vh', zIndex: 10 }}>
                <MapContainer
                    center={center}
                    zoom={10}
                    style={{ height: '100%', width: '100%', borderRadius: '0.75rem' }}
                    className="shadow-lg rounded-lg overflow-hidden z-0" // Ensure MapContainer is behind
                >
                    <TileLayer url={activeLayer.url} /> {/* Render the active layer */}
                </MapContainer>

                {/* Dropdown positioned over bottom-left of the map */}
                <div className="absolute bottom-4 left-4 z-50"> {/* Higher z-index for dropdown */}
                    <Menu as="div" className="inline-block text-left">
                        <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            {activeLayer.name}
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                        </MenuButton>

                        <MenuItems className="absolute left-0 z-50 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        style={{ maxHeight: '150px', overflowY: 'auto' }}
                        >
                            {mapLayers.map((layer) => (
                                <MenuItem key={layer.name}>
                                    {({ active }) => (
                                        <button
                                            onClick={() => handleLayerChange(layer)}
                                            className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                                } block px-4 py-2 text-sm w-full text-left`}
                                        >
                                            {layer.name}
                                        </button>
                                    )}
                                </MenuItem>
                            ))}
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </div>
    );
};


export default MapComponent;
