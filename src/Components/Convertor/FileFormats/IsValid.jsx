// IsValid.jsx

export const isValidGeoFile = (files) => {
    // Look for specific geospatial file types in the uploaded files
    const shpFile = files.find(file => file.name.endsWith('.shp'));
    const dbfFile = files.find(file => file.name.endsWith('.dbf'));
    const geoJsonFile = files.find(file => file.name.endsWith('.geojson') || file.name.endsWith('.json'));
    const kmlFile = files.find(file => file.name.endsWith('.kml'));

    // Check if the required files for a shapefile are present, or if it's a valid single geo file
    if ((shpFile && dbfFile) || geoJsonFile || kmlFile) {
        return {
            isValid: true,
            shpFile,
            dbfFile,
            geoJsonFile,
            kmlFile,
            errorMessage: null
        };
    }

    // If none of the required files are found, return an error
    return {
        isValid: false,
        errorMessage: 'Please upload a supported geospatial file (.shp & .dbf, .geojson, .json, .kml).'
    };
};
