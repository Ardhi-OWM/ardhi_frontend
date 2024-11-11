// ApiConnect/functions.js


export const handleDelete = (serviceName) => {
    console.log(`Service ${serviceName} deleted.`);
    // Add logic here to remove the service from the list if needed
};

export const filterServices = (services, searchTerm) => {
    return services.filter((service) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export const addService = (services, newService) => {
    return [...services, newService];
};

export const parseServiceFromURL = (url) => {
    try {
        // Normalize URL by replacing multiple '?' with '&'
        const [baseUrl, queryString] = url.split('?');
        const normalizedQueryString = queryString ? queryString.replace(/\?/g, '&') : '';
        const normalizedUrl = normalizedQueryString ? `${baseUrl}?${normalizedQueryString}` : baseUrl;

        const urlObj = new URL(normalizedUrl);
        const provider = urlObj.hostname.split('.')[1] || 'unknown';
        const name = `${provider}-production`;
        const type = 'Production';
        const region = urlObj.searchParams.get('region') || 'not specified';

        return {
            name,
            provider,
            type,
            region,
            apiUrl: url, // Store the original (unmodified) URL
        };
    } catch (error) {
        console.error('Invalid URL:', error);
        return null;
    }
};

