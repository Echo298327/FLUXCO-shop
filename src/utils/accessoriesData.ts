// Accessories import
import basketBlack from "../assets/accessories/basketBlack_3.webp";
import basketBlack1 from "../assets/accessories/basketBlack_1.webp";
import basketBlack2 from "../assets/accessories/basketBlack_2.webp";
import basketWood from "../assets/accessories/basketWood_1.webp";
import capHolder from "../assets/accessories/capHolder_1.webp";
import charger from "../assets/accessories/charger_1.webp";
import frontRearMudguard from "../assets/accessories/frontRearMudguard_3.webp";
import frontRearMudguard1 from "../assets/accessories/frontRearMudguard_1.webp";
import frontRearMudguard2 from "../assets/accessories/frontRearMudguard_2.webp";
import lateralGrip from "../assets/accessories/lateralGrip_1.webp";
import phoneHolder from "../assets/accessories/phoneHolder_1.webp";
import rearRack from "../assets/accessories/rearRack_1.webp";
import waterproofBag from "../assets/accessories/waterProofBag_1.webp";
import waterproofBag1 from "../assets/accessories/waterProofBag_2.webp";
import pedals from "../assets/accessories/pedals_1.webp";
import childSeat from "../assets/accessories/childSeat_1.webp";
import seat from "../assets/accessories/seat_1.webp";
// Types import
import type { Accessory } from "../types";



export const accessories: Accessory[] = [
    {
      name: "accessories.items.pedals",
      price: "600 NTD",
      image: pedals,
      category: "accessories.categories.performance",
    },
    {
      name: "accessories.items.childSeat",
      price: "2,800 NTD",
      image: childSeat,
      category: "accessories.categories.safety",
    },
    {
      name: "accessories.items.basketBlack",
      price: "2,000 NTD",
      image: basketBlack,
      images: [basketBlack, basketBlack1, basketBlack2],
      category: "accessories.categories.storage",
    },
    {
      name: "accessories.items.basketWood",
      price: "2,000 NTD",
      image: basketWood,
      category: "accessories.categories.storage",
    },
    {
      name: "accessories.items.capHolder",
      price: "600 NTD",
      image: capHolder,
      category: "accessories.categories.convenience",
    },
    {
      name: "accessories.items.charger",
      price: "1,200 NTD",
      image: charger,
      category: "accessories.categories.electrical",
    },
    {
      name: "accessories.items.frontRearMudguard",
      price: "1,200 NTD",
      image: frontRearMudguard,
      images: [frontRearMudguard, frontRearMudguard1, frontRearMudguard2],
      category: "accessories.categories.protection",
    },
    {
      name: "accessories.items.lateralGrip",
      price: "600 NTD",
      image: lateralGrip,
      category: "accessories.categories.comfort",
    },
    {
      name: "accessories.items.phoneHolder",
      price: "600 NTD",
      image: phoneHolder,
      category: "accessories.categories.convenience",
    },
    {
      name: "accessories.items.rearRack",
      price: "1,200 NTD",
      image: rearRack,
      category: "accessories.categories.storage",
    },
    {
      name: "accessories.items.waterproofBag",
      price: "1,600 NTD",
      image: waterproofBag,
      images: [waterproofBag, waterproofBag1],
      category: "accessories.categories.storage",
    },
    {
      name: "accessories.items.seat",
      price: "1,200 NTD",
      image: seat,
      category: "accessories.categories.comfort",
    },
  ]