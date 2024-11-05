//import React from 'react'
import Button from './Reuse/Button';
import { Replace, View } from 'lucide-react';

// ViewAnalytics Component
const ViewAnalytics = () => {
    const buttons = [
        {
            id: '1',
            icon: <View className="mr-3" />,
            text: "View Analytics"
        },
        {
            id: '2',
            icon: <Replace className="mr-3" />,
            text: "Convert the View ..."
        }
    ];

    return (
        // <div className="view-analytics-container flex flex-row mt-5 mx-auto max-w-screen-lg">
        <div className="view-analytics-container flex-col  sm:flex-row justify-center mx-auto max-w-screen-lg">
            {buttons.map((button) => (
                <Button
                    key={button.id}
                    className="flex items-center mb-4 sm:mb-0 sm:ml-4 px-4 py-2 mx-20 w-1/3 "  
                    // TODO: Add href to the button
                    href="https://ardhi.de/"
                    white={false}
                >
                    <div className="flex items-center">
                        {button.icon}
                        <span className="font-grotesk font-light text-sm tracking-tagline uppercase underline underline-offset-4 ml-1 whitespace-nowrap">
                            {button.text}
                        </span>
                    </div>
                </Button>
            ))}
        </div>

    );
};

export default ViewAnalytics;
