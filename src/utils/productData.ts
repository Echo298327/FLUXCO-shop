// Assets import
import F16 from "../assets/bicycles/F16.webp";
import F16In from "../assets/bicycles/F16In.webp";
import F20 from "../assets/bicycles/F20.webp";
import F20In from "../assets/bicycles/F20In.webp";
import F20Pro from "../assets/bicycles/F20Pro.webp";
import F20ProIn from "../assets/bicycles/F20ProIn.webp";
import L16 from "../assets/bicycles/L16.webp";
import L16In from "../assets/bicycles/L16In.webp";
import L18 from "../assets/bicycles/L18.webp";
import L18In from "../assets/bicycles/L18In.webp";
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
import type { Product } from "../types";


// F16 > F20 > F20pro >L16 >L18

export const products: Product[] = [
  {
    id: 1,
    name: "F-16",
    description: "F-16 is a high-performance electric bike with a 750W motor and a 48V 8.2Ah battery. It has a top speed of 45km/h and a range of 60-95km.",
    image: F16,
    dimensionsImage: F16In,
    price: 46000,
    vehicleSeatHeight: 81.2,
    vehicleHeight: 105,
    vehicleLength: 149,
    details: {
      "topSpeed": {
        icon: Speed,
        label: "Top Speed",
        value: "25km/h"
      },
      "battery": {
        icon: Battery,
        label: "Battery",
        value: "48V 5.6Ah"
      },
      "motor": {
        icon: Motor,
        label: "Motor",
        value: "350W"
      },
      "easyCharge": {
        icon: Charge,
        label: "Easy Charge",
        value: "Easy Charge"
      },
      "range": {
        icon: Km,
        label: "Range",
        value: "50-70km"
      },
      "upgradeDisplay": {
        icon: UpgradeDisplay,
        label: "Display",
        value: "Upgrade Display"
      },
      "sevenSpeedGears": {
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
    id: 2,
    name: "F20",
    description: "F20 is a high-performance electric bike with a 750W motor and 48V 18.2Ah battery. It has a top speed of 25-45km/h and a range of 60-95km.",
    image: F20,
    dimensionsImage: F20In,
    price: 56000,
    vehicleSeatHeight: 89.5,
    vehicleHeight: 120,
    vehicleLength: 165,
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
      "UpgradeDisplay": {
        icon: UpgradeDisplay,
        label: "Display",
        value: "Upgrade Display"
      },
      "sevenSpeedGears": {
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
    id: 3,
    name: "F20Pro",
    description: "F20Pro is an advanced electric bike with 750W motor, 48V 18.2Ah battery, cup holder and signal lights. Top speed 25-45km/h with 60-95km range.",
    image: F20Pro,
    dimensionsImage: F20ProIn,
    price: 62000,
    vehicleSeatHeight: 85.1,
    vehicleHeight: 120,
    vehicleLength: 166,
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
      "UpgradeDisplay": {
        icon: UpgradeDisplay,
        label: "Display",
        value: "Upgrade Display"
      },
      "sevenSpeedGears": {
        icon: Gears,
        label: "Speed Gears",
        value: "Seven Speed Gears"
      },
      "frontRearSuspension": {
        icon: FrontAndRear,
        label: "Suspension",
        value: "Front&Rear"
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
      "warranty": {
        icon: Warranty,
        label: "Warranty",
        value: "One Year Warranty"
      },
    },
  },
  {
    id: 4,
    name: "L16",
    description: "L16 is an entry-level electric bike with 250W motor and 36V 5Ah battery. Top speed 25km/h with 20-25km range and three riding modes.",
    image: L16,
    dimensionsImage: L16In,
    price: 38000,
    vehicleSeatHeight: 66,
    vehicleHeight: 85,
    vehicleLength: 134,
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
    id: 5,
    name: "L18",
    description: "L18 is a mid-range electric bike with 500W motor and 48V 13Ah battery. Top speed 35km/h with 45-50km range and upgraded Bluetooth display.",
    image: L18,
    dimensionsImage: L18In,
    price: 52000,
    vehicleSeatHeight: 78,
    vehicleHeight: 108,
    vehicleLength: 157,
    details: {
      "topSpeed": {
        icon: Speed,
        label: "Top Speed",
        value: "35km/h"
      },
      "battery": {
        icon: Battery,
        label: "Battery",
        value: "48V 3Ah"
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
];