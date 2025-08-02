// Assets import
import b1 from "../assets/bicycles/b1.webp";
import b2 from "../assets/bicycles/b2.webp";
import b3 from "../assets/bicycles/b3.webp";
import b4 from "../assets/bicycles/b4.webp";
import b1In from "../assets/bicycles/b1In.webp";
import b2In from "../assets/bicycles/b2In.webp";
import b3In from "../assets/bicycles/b3In.webp";
import b4In from "../assets/bicycles/b4In.webp";
// Accessories import
import basket from "../assets/accessories/basket_3.webp";
import pedals from "../assets/accessories/pedals_1.webp";
import childSeat from "../assets/accessories/childSeat_1.webp";
// Icons import
import { Battery } from "../icons/Battery";
import { Km } from "../icons/Km";
import { CupHolder } from "../icons/CupHolder";
import { Motor } from "../icons/Motor";
import { Riding } from "../icons/Riding";
import { FrontAndRear } from "../icons/Front&Rear";
import { UpgradeDisplay } from "../icons/UpgradeDisplay";
import { Gears } from "../icons/Gears";
import { Warranty } from "../icons/Warranty";
import { SignalLight } from "../icons/SignalLight";
import { Wrap } from "../icons/Wrap";
import { BluetoothDisplay } from "../icons/BluetoothDisplay";
import { Speed } from "../icons/Speed";
import { Charge } from "../icons/Charge";
// Types import
import type { Product, Feature, Accessory } from "../types";

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
        icon: Speed,
        label: "Top Speed",
        value: "25km/h"
      },
      "battery": {
        icon: Battery,
        label: "Battery",
        value: "36V 5Ah"
      },
      "motor": {
        icon: Motor,
        label: "Motor",
        value: "250W"
      },
      "easyCharge": {
        icon: Charge,
        label: "Easy Charge",
        value: "Easy Charge"
      },
      "range": {
        icon: Km,
        label: "Range",
        value: "20-25km"
      },
      "ridingMode": {
        icon: Riding,
        label: "Riding Mode",
        value: "Three Riding Modes"
      },
      "letterWrap": {
        icon: Wrap,
        label: "Letter Wrap",
        value: "Letter Wrap"
      },
      "UpgradeBluetoothDisplay": {
        icon: BluetoothDisplay,
        label: "Bluetooth Display",
        value: "Upgrade Bluetooth Display"
      },
      "warranty": {
        icon: Warranty,
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
        icon: Speed,
        label: "Top Speed",
        value: "35km/h"
      },
      "battery": {
        icon: Battery,
        label: "Battery",
        value: "48V 10Ah"
      },
      "motor": {
        icon: Motor,
        label: "Motor",
        value: "500W"
      },
      "easyCharge": {
        icon: Charge,
        label: "Easy Charge",
        value: "Easy Charge"
      },
      "range": {
        icon: Km,
        label: "Range",
        value: "45-50km"
      },
      "ridingMode": {
        icon: Riding,
        label: "Riding Mode",
        value: "Three Riding Modes"
      },
      "NonSlipWrap": {
        icon: Wrap,
        label: "Non-Slip Wrap",
        value: "Non-Slip Wrap"
      },
      "UpgradeBluetoothDisplay": {
        icon: BluetoothDisplay,
        label: "Bluetooth Display",
        value: "Upgrade Bluetooth Display"
      },
      "warranty": {
        icon: Warranty,
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
        icon: Speed,
        label: "Top Speed",
        value: "25-40km/h"
      },
      "battery": {
        icon: Battery,
        label: "Battery",
        value: "48V 8.2Ah"
      },
      "motor": {
        icon: Motor,
        label: "Motor",
        value: "750W"
      },
      "easyCharge": {
        icon: Charge,
        label: "Easy Charge",
        value: "Easy Charge"
      },
      "range": {
        icon: Km,
        label: "Range",
        value: "60-95km"
      },
      "ridingMode": {
        icon: Riding,
        label: "Riding Mode",
        value: "Three Riding Modes"
      },
      "NonSlipWrap": {
        icon: Wrap,
        label: "Non-Slip Wrap",
        value: "Non-Slip Wrap"
      },
      "UpgradeDisplay": {
        icon: UpgradeDisplay,
        label: "Display",
        value: "Upgrade Display"
      },
      "SevenSpeedGears": {
        icon: Gears,
        label: "Speed Gears",
        value: "Seven Speed Gears"
      },
      "frontRearSuspension": {
        icon: FrontAndRear,
        label: "Suspension",
        value: "Front&Rear"
      },
      "warranty": {
        icon: Warranty,
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
        icon: Speed,
        label: "Top Speed",
        value: "25-45km/h"
      },
      "battery": {
        icon: Battery,
        label: "Battery",
        value: "48V 8.2Ah"
      },
      "motor": {
        icon: Motor,
        label: "Motor",
        value: "750W"
      },
      "easyCharge": {
        icon: Charge,
        label: "Easy Charge",
        value: "Easy Charge"
      },
      "range": {
        icon: Km,
        label: "Range",
        value: "60-95km"
      },
      "SevenSpeedGears": {
        icon: Gears,
        label: "Speed Gears",
        value: "Seven Speed Gears"
      },
      "UpgradeDisplay": {
        icon: UpgradeDisplay,
        label: "Display",
        value: "Upgrade Display"
      },
      "frontRearSuspension": {
        icon: FrontAndRear,
        label: "Suspension",
        value: "Front&Rear"
      },
      "warranty": {
        icon: Warranty,
        label: "Warranty",
        value: "One Year Warranty"
      },
      "cupHolder": {
        icon: CupHolder,
        label: "Cup Holder",
        value: "Cup Holder"
      },
      "signals": {
        icon: SignalLight,
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


export const accessories: Accessory[] = [
  {
    name: "accessories.items.pedals",
    price: "600 NTD",
    image: pedals,
  },
  {
    name: "accessories.items.childSeat",
    price: "2,800 NTD",
    image: childSeat,
  },
  {
    name: "accessories.items.basket",
    price: "2,000 NTD",
    image: basket,
  },
]