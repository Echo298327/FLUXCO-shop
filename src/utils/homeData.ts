import b1 from "../assets/bicycles/b1.webp";
import b2 from "../assets/bicycles/b2.webp";
import b3 from "../assets/bicycles/b3.webp";
import b4 from "../assets/bicycles/b4.webp";
import b1In from "../assets/bicycles/b1In.webp";
import b2In from "../assets/bicycles/b2In.webp";
import b3In from "../assets/bicycles/b3In.webp";
import b4In from "../assets/bicycles/b4In.webp";

import type { Product, Feature } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Urban Cruiser 250",
    description: "Entry-level electric city bike with 250W motor perfect for daily commuting",
    image: b1,
    dimensionsImage: b1In,
    price: 38000,
    vehicleSeatHeight: 66,
    vehicleHeight: 85,
    vehicleLength: 34,
    details: {
      "topSpeed": {
        icon: "fas fa-tachometer-alt",
        label: "Top Speed",
        value: "25km/h"
      },
      "battery": {
        icon: "fas fa-battery-full",
        label: "Battery",
        value: "36V 5Ah"
      },
      "motor": {
        icon: "fas fa-cog",
        label: "Motor",
        value: "250W"
      },
      "easyCharge": {
        icon: "fas fa-plug",
        label: "Easy Charge",
        value: "Easy Charge"
      },
      "range": {
        icon: "fas fa-route",
        label: "Range",
        value: "20-25km"
      },
      "ridingMode": {
        icon: "fas fa-bicycle",
        label: "Riding Mode",
        value: "Three Riding Modes"
      },
      "letterWrap": {
        icon: "fas fa-envelope",
        label: "Letter Wrap",
        value: "Letter Wrap"
      },
      "UpgradeBluetoothDisplay": {
        icon: "fas fa-bluetooth",
        label: "Bluetooth Display",
        value: "Upgrade Bluetooth Display"
      },
      "warranty": {
        icon: "fas fa-shield-alt",
        label: "Warranty",
        value: "One Year Warranty"
      },
    },
  },
  {
    id: 2,
    name: "StepThrough Pro 500",
    description: "Mid-range electric step-through with 500W motor and extended 50km range",
    image: b2,
    dimensionsImage: b2In,
    price: 60000,
    vehicleSeatHeight: 78,
    vehicleHeight: 108,
    vehicleLength: 57,
    details: {
      "topSpeed": {
        icon: "fas fa-tachometer-alt",
        label: "Top Speed",
        value: "35km/h"
      },
      "battery": {
        icon: "fas fa-battery-full",
        label: "Battery",
        value: "48V 10Ah"
      },
      "motor": {
        icon: "fas fa-cog",
        label: "Motor",
        value: "500W"
      },
      "easyCharge": {
        icon: "fas fa-plug",
        label: "Easy Charge",
        value: "Easy Charge"
      },
      "range": {
        icon: "fas fa-route",
        label: "Range",
        value: "45-50km"
      },
      "ridingMode": {
        icon: "fas fa-bicycle",
        label: "Riding Mode",
        value: "Three Riding Modes"
      },
      "NonSlipWrap": {
        icon: "fas fa-grip-horizontal",
        label: "Non-Slip Wrap",
        value: "Non-Slip Wrap"
      },
      "UpgradeBluetoothDisplay": {
        icon: "fas fa-bluetooth",
        label: "Bluetooth Display",
        value: "Upgrade Bluetooth Display"
      },
      "warranty": {
        icon: "fas fa-shield-alt",
        label: "Warranty",
        value: "One Year Warranty"
      },
    },
  },
  {
    id: 3,
    name: "Commuter Elite 750",
    description: "High-performance 750W electric bike with 7-speed Shimano and dual suspension",
    image: b3,
    dimensionsImage: b3In,
    price: 56000,
    vehicleSeatHeight: 89.5,
    vehicleHeight: 120,
    vehicleLength: 65,
    details: {
      "topSpeed": {
        icon: "fas fa-tachometer-alt",
        label: "Top Speed",
        value: "25-40km/h"
      },
      "battery": {
        icon: "fas fa-battery-full",
        label: "Battery",
        value: "48V 8.2Ah"
      },
      "motor": {
        icon: "fas fa-cog",
        label: "Motor",
        value: "750W"
      },
      "easyCharge": {
        icon: "fas fa-plug",
        label: "Easy Charge",
        value: "Easy Charge"
      },
      "range": {
        icon: "fas fa-route",
        label: "Range",
        value: "60-95km"
      },
      "ridingMode": {
        icon: "fas fa-bicycle",
        label: "Riding Mode",
        value: "Three Riding Modes"
      },
      "NonSlipWrap": {
        icon: "fas fa-grip-horizontal",
        label: "Non-Slip Wrap",
        value: "Non-Slip Wrap"
      },
      "UpgradeDisplay": {
        icon: "fas fa-desktop",
        label: "Display",
        value: "Upgrade Display"
      },
      "SevenSpeedGears": {
        icon: "fas fa-cogs",
        label: "Speed Gears",
        value: "Seven Speed Gears"
      },
      "frontRearSuspension": {
        icon: "fas fa-compress-arrows-alt",
        label: "Suspension",
        value: "Front&Rear"
      },
      "warranty": {
        icon: "fas fa-shield-alt",
        label: "Warranty",
        value: "One Year Warranty"
      },
    },
  },
  {
    id: 4,
    name: "Cargo Master 750X",
    description: "Heavy-duty 750W cargo e-bike with LED signals and premium accessories",
    image: b4,
    dimensionsImage: b4In,
    price: 62000,
    vehicleSeatHeight: 85.1,
    vehicleHeight: 120,
    vehicleLength: 66,
    details: {
      "topSpeed": {
        icon: "fas fa-tachometer-alt",
        label: "Top Speed",
        value: "25-45km/h"
      },
      "battery": {
        icon: "fas fa-battery-full",
        label: "Battery",
        value: "48V 8.2Ah"
      },
      "motor": {
        icon: "fas fa-cog",
        label: "Motor",
        value: "750W"
      },
      "easyCharge": {
        icon: "fas fa-plug",
        label: "Easy Charge",
        value: "Easy Charge"
      },
      "range": {
        icon: "fas fa-route",
        label: "Range",
        value: "60-95km"
      },
      "SevenSpeedGears": {
        icon: "fas fa-cogs",
        label: "Speed Gears",
        value: "Seven Speed Gears"
      },
      "UpgradehDisplay": {
        icon: "fas fa-desktop",
        label: "Display",
        value: "Upgrade Display"
      },
      "frontRearSuspension": {
        icon: "fas fa-compress-arrows-alt",
        label: "Suspension",
        value: "Front&Rear"
      },
      "warranty": {
        icon: "fas fa-shield-alt",
        label: "Warranty",
        value: "One Year Warranty"
      },
      "cupHolder": {
        icon: "fas fa-coffee",
        label: "Cup Holder",
        value: "Cup Holder"
      },
      "signals": {
        icon: "fas fa-traffic-light",
        label: "Signal Light",
        value: "Signal Light"
      },
    },
  },
];
export const features: Feature[] = [
  {
    icon: "fas fa-tools",
    title: "Expert Service",
    description: "Professional maintenance and repair services for all types of bicycles with certified technicians",
  },
  {
    icon: "fas fa-star",
    title: "Quality Products",
    description: "High-quality bicycles and accessories from trusted brands worldwide",
  },
  {
    icon: "fas fa-handshake",
    title: "Personal Consultation",
    description: "One-on-one consultation to find the perfect cycling solution for your needs",
  },
];
