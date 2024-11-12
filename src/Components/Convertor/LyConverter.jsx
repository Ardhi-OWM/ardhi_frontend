
import React, { useState } from 'react';
import { CloudUpload } from 'lucide-react';

import {
    handleFileChange, handleFormatChange,
    handleConvert, addNewFormat
} from './FtConverter';
import Button from '../Reuse/Button';
import { availableFormats } from '../constants';

const LyConverter = () => {
    const [selectedFormat, setSelectedFormat] = useState('GeoJSON');
    const [formats, setFormats] = useState(['GeoJSON', 'CSV', 'HTML']);
    const [showDropdown, setShowDropdown] = useState(false);
    const [newFormat, setNewFormat] = useState('GeoJSON');

    /* const handleAddNewFormat = () => {
        addNewFormat(formats, setFormats, newFormat);
        setShowDropdown(false); // Hide dropdown after selection
    }; */
    const handleAddNewFormat = () => {
        if (newFormat && !formats.includes(newFormat)) {
            setFormats((prevFormats) => {
                const updatedFormats = [newFormat, ...prevFormats.slice(0, 2)]; // Add new format and keep only the last 3 formats
                return updatedFormats;
            });
            setSelectedFormat(newFormat); // Set the newly added format as selected
            setShowDropdown(false); // Hide the dropdown
        }
    };

    return (
        <div className="p-4 md:p-8 min-h-screen">
            <h1 className="text-xl md:text-4xl font-bold mb-2 tracking-wide">Convert Data</h1>
            <h2 className="text-base md:text-xl font-bold mb-2">Select a file to convert</h2>
            <p className="mb-4 text-sm md:text-base">
                We support many different types of file formats. Choose a file format that best matches your needs.
            </p>
            <div className="flex justify-center">
                <div className="bg-gray-300/[0.25] md:w-1/2 border border-dashed border-gray-500 p-8 flex flex-col items-center justify-center text-center mb-4">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        id="fileInput"
                    />
                    <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center">
                        <CloudUpload className="text-ourGreen w-14 h-14 mb-2" />
                        <p>Drag and drop your file here</p>
                        <p>or</p>
                        <button
                            className="mt-2 px-4 py-2 rounded-lg shadow-2xl hover:bg-ourGreen/[0.25] border border-gray-500/[0.25]"
                            onClick={() => document.getElementById('fileInput').click()}
                        >
                            Browse files
                        </button>
                    </label>
                </div>
            </div>


            <h2 className="text-base md:text-xl font-bold mb-4 underline-offset-4 underline">Choose the output format</h2>
            {/* Add format selection and convert button here */}
            <div>
                {formats.map((format) => (
                    <div key={format} 
                    className="mb-4 p-3 border border-gray-300/[0.50] rounded-lg flex items-center bg-gray-300/[0.25]">
                        <label>
                            <input
                                type="radio"
                                name="format"
                                value={format}
                                checked={selectedFormat === format}
                                onChange={handleFormatChange(setSelectedFormat)}
                                className="mr-2 text-ourGreen"
                            />
                            {format}
                        </label>
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-4 mt-10">
                <div className="w-full flex justify-center">
                    <Button
                        className="w-2/3 md:w-1/2 "
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        Add New Format
                    </Button>
                </div>
                <div className="w-full flex justify-center">
                    <Button
                        className="w-2/3 md:w-1/2"
                        onClick={() => handleConvert(selectedFormat)}
                    >
                        Convert
                    </Button>
                </div>
            </div>

            {showDropdown && (
                <div className="mt-4 w-full md:w-1/2 mx-auto">
                    <select
                        value={newFormat}
                        onChange={(e) => setNewFormat(e.target.value)}
                        className="border p-2 rounded w-full "
                    >
                        {availableFormats.map((format) => (
                            <option key={format} value={format} className="bg-gray-800 ">
                                {format}
                            </option>
                        ))}
                    </select>
                    <button
                        className="mt-2 w-full bg-ourGreen/[0.50] py-2 rounded"
                        onClick={handleAddNewFormat}
                    >
                        Confirm Format Selection
                    </button>
                </div>
            )}


            {/* <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-4">
                <div className="w-full flex justify-center">
                    <Button className="w-2/3 md:w-1/2">
                        Add New Format
                    </Button>
                </div>
                <div className="w-full flex justify-center">
                    <Button className="w-2/3 md:w-1/2">
                        Convert
                    </Button>
                </div>
            </div> */}

        </div>
    );
};

export default LyConverter;
