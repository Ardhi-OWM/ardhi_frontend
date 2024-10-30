import React, { useState } from 'react';
import { MapContainer, TileLayer, LayersControl, useMap } from 'react-leaflet';
import { mapLayers } from './mapLayers';
import { Menu, MenuButton } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

const SearchField = ({ setCenter, theme }) => {
    const map = useMap();
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value) {
            const provider = new OpenStreetMapProvider();
            const results = await provider.search({ query: value });
            setSuggestions(results);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        const { x, y, label } = suggestion;
        setCenter([y, x]);
        map.setView([y, x], 15);
        setQuery(label);
        setSuggestions([]);
    };

    return (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-full max-w-md">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for an address..."
                className={`w-full p-2 rounded-md shadow-md ${
                    theme === 'dark' ? 'bg-gray-800 text-gray-100 placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-600'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {suggestions.length > 0 && (
                <ul className={`absolute w-full rounded-md shadow-lg mt-1 max-h-48 overflow-y-auto z-[1000] ${
                    theme === 'dark' ? 'bg-gray-800 border border-gray-700 text-gray-100' : 'bg-white border border-gray-300 text-gray-900'
                }`}>
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.x + suggestion.y}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className={`px-4 py-2 cursor-pointer hover:${
                                theme === 'dark' ? 'bg-gray-700 text-blue-400' : 'bg-gray-200 text-blue-600'
                            }`}
                        >
                            {suggestion.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const MapComponent = ({ theme }) => {
    const center = [52.5200, 13.4049];
    const [mapCenter, setMapCenter] = useState(center);
    const [activeLayer, setActiveLayer] = useState(mapLayers[0]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleLayerChange = (layer) => {
        setActiveLayer(layer);
        setDropdownOpen(false);
    };

    return (
        <div className="relative flex flex-col md:flex-row md:justify-end p-3">
            <div className="relative w-full" style={{ height: '70vh', zIndex: 10 }}>
                <MapContainer
                    center={mapCenter}
                    zoom={10}
                    style={{ height: '100%', width: '100%', borderRadius: '0.75rem' }}
                    className="shadow-lg rounded-lg overflow-hidden z-0"
                >
                    <TileLayer url={activeLayer.url} />
                    <SearchField setCenter={setMapCenter} theme={theme} />
                </MapContainer>

                <div className="absolute bottom-4 left-4 z-[1050]">
                    <Menu as="div" className="inline-block text-left">
                        <MenuButton
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                            className={`inline-flex justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ${
                                theme === 'dark' ? 'bg-gray-800 text-gray-100 ring-gray-700' : 'bg-gray-100 text-gray-900 ring-gray-300'
                            } hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}
                        >
                            {activeLayer.name}
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                        </MenuButton>

                        {isDropdownOpen && (
                            <div
                                className={`absolute left-0 mt-2 w-56 origin-top-left divide-y rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none ${
                                    theme === 'dark' ? 'bg-gray-800 text-gray-100 ring-black divide-gray-600' : 'bg-white text-gray-900 ring-gray-300 divide-gray-200'
                                }`}
                                style={{ maxHeight: '150px', overflowY: 'auto' }}
                            >
                                {mapLayers.map((layer) => (
                                    <button
                                        key={layer.name}
                                        onClick={() => handleLayerChange(layer)}
                                        className={`block px-4 py-2 text-sm w-full text-left ${
                                            layer === activeLayer ? (theme === 'dark' ? 'bg-gray-700 text-blue-400 font-bold' : 'bg-gray-200 text-blue-600 font-bold') : theme === 'dark' ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'
                                        }`}
                                    >
                                        {layer.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default MapComponent;
