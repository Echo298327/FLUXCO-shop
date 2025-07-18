export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    vehicleSeatHeight: number;
    vehicleHeight: number;
    vehicleLength: number;

    details: {
        [key: string]: {
            icon: string;
            label: string;
            value: string;
        };
    };
}