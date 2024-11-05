

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
        id: 7,
        name: 'Next try next time',
        url: 'https://github.com/Ardhi-OWM/ardhi_web_map/tree/och_ardhi'
    },

    {
        id: 6,
        name: 'Just a trial on how everything works ',
        url: 'https://github.com/Ardhi-OWM/ardhi_web_map/tree/och_ardhi'
    },
    {
        id: 5,
        name: 'New on Ardhi Linda',
        url: 'https://github.com/Ardhi-OWM/ardhi_web_map/tree/och_ardhi'
    },
    {
        id: 1,
        name: 'Notification Component update - Shammah',
        url: 'https://ardhi.slab.com/posts/notification-component-update-dap03dlu?shr=dm9BKAxUyxYdz2PxchX9R-Jp'
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