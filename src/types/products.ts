import type { FC } from 'react';

export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    dimensionsImage?: string;
    price: number;
    colors?: string[];
    vehicleSeatHeight: number;
    vehicleHeight: number;
    vehicleLength: number;

    details: {
        [key: string]: {
            icon: string | FC<{ className?: string }>;
            label: string;
            value: string;
        };
    };
}