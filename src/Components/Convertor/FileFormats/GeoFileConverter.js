// GeoFileConverter.js

import shapefile from 'shapefile';

/**
 * Converts a Shapefile to GeoJSON.
 * @param {File} shpFile - The .shp file.
 * @param {File} dbfFile - The .dbf file.
 * @returns {Promise<Object>} - A promise that resolves to a GeoJSON object.
 */
export const convertShapefileToGeoJSON = async (shpFile, dbfFile) => {
    try {
        const shpBuffer = await shpFile.arrayBuffer();
        const dbfBuffer = await dbfFile.arrayBuffer();

        const geoJson = await shapefile.open(shpBuffer, dbfBuffer).then((source) =>
            source.read().then((result) => {
                if (result.done) {
                    return { type: 'FeatureCollection', features: [] };
                }
                return { type: 'FeatureCollection', features: [result.value] };
            })
        );

        return { geoJson, error: null };
    } catch (error) {
        console.error('Failed to convert Shapefile to GeoJSON:', error);
        return { geoJson: null, error: 'Failed to convert Shapefile to GeoJSON.' };
    }
};

/**
 * Reads and parses a GeoJSON or KML file.
 * @param {File} file - The GeoJSON or KML file.
 * @returns {Promise<Object>} - A promise that resolves to a GeoJSON object.
 */
export const readGeoJSONOrKML = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const geoJson = JSON.parse(e.target.result);
                resolve({ geoJson, error: null });
            } catch (error) {
                console.error('Invalid GeoJSON or KML file:', error);
                reject({ geoJson: null, error: 'Invalid GeoJSON or KML file.' });
            }
        };
        reader.onerror = () => {
            reject({ geoJson: null, error: 'Failed to read file.' });
        };
        reader.readAsText(file);
    });
};

// Add additional functions for other conversions, e.g., GeoJSON to Shapefile, KML to CSV, etc.
