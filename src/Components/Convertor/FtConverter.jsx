// ftConverter.js

export const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('File selected:', file);
};

export const handleFormatChange = (setSelectedFormat) => (event) => {
    setSelectedFormat(event.target.value);
};

export const handleConvert = (selectedFormat) => {
    console.log('Convert to:', selectedFormat);
};

export const addNewFormat = (formats, setFormats, newFormat) => {
    if (newFormat && !formats.includes(newFormat)) {
        setFormats([...formats.slice(1), newFormat]); // Keeps only the last 3 formats
    }
};
