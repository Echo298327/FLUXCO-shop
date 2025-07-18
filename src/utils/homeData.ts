import b1 from "../assets/bicycles/b1.jpg";
import b2 from "../assets/bicycles/b2.jpg";
import b3 from "../assets/bicycles/b3.jpg";
import b4 from "../assets/bicycles/b4.jpg";
import type { Product, Feature } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Classic E-City",
    description: "Vintage-inspired electric city bike with elegant copper accents",
    image: b1,
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
    name: "Retro E-Step",
    description: "Traditional step-through frame with modern electric assist",
    image: b2,
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
    name: "E-Commuter",
    description: "Classic commuter design with hidden electric technology",
    image: b3,
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
      "UpgradehDisplay": {
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
    name: "E-Cargo",
    description: "Electric cargo bike with traditional bamboo carrier",
    image: b4,
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
