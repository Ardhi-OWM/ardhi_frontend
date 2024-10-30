

// Navigation bars
export const headerLinks = [
    {
        id: "0",
        label: 'Dashboard',
        route: '/dashboard'
    },
    {
        id: "1",
        label: 'API Connections',
        route: '/api-connections',
    },
    {
        id: "3",
        label: 'Converter',
        route: '/converter',
    },
];

// Action functions to handle link additions
export function handleAddDataset(link) {
    console.log("Dataset link added:", link);
    // Additional functionality as needed
}

export function handleAddModel(link) {
    console.log("Model link added:", link);
    // Additional functionality as needed
}

export function handleAddAPI(link) {
    console.log("API link added:", link);
    // Additional functionality as needed
}



export const notificationData = [

    {
        id: 1,
        name: 'Notification Component update - Shammah',
        url: 'https://ardhi.slab.com/posts/notification-component-update-dap03dlu?shr=dm9BKAxUyxYdz2PxchX9R-Jp'
    },
    {
        id: 2,
        name: 'Notification 4',
        url: 'https://linda-ochwada.netlify.app/'
    },
    {
        id: 3,
        name: 'Notification 3 - Github Ardhi',
        url: 'https://github.com/Ardhi-OWM/ardhi_web_map/tree/och_ardhi'
    },
    {
        id: 4,
        name: 'pHILIPP - ARDHI',
        url: 'https://github.com/Ardhi-OWM/ardhi_web_map/tree/och_ardhi'
    },

];

// GIS cloud services
export const initialCloudServices = [
    {
        id: 1,
        name: 'amazon-production',
        provider : 'AWS',
        type: 'cloud -production',
        url: ' ',
        region: 'us-east-1',
        account: ' ',
    },
]