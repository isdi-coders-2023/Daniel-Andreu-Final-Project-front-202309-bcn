import { ShoeStructure } from "../store/features/shoes/types";

const shoesMock: ShoeStructure[] = [
  {
    _id: "6566146eb17321660f118c7b",
    title: "Nike Blazer Blancas",
    image: "https://i.ibb.co/bW5YQZ3/1.webp",
    price: 70,
    size: 38,
    brand: "Nike",
    shoeStatus: "Como nuevo",
    description:
      "Vendo bambas Nike Blazer originales blancas, las he usado una única ve…",
    isBoxIncluded: true,
    isChangesAccepted: true,
    isFavourite: true,
    name: "Daniel Andreu",
    phone: "659377296",
    location: "Cornella de Llobregat",
  },
  {
    _id: "6566155bb17321660f118c7d",
    title: "Air Jordan Retro 1",
    image: "https://i.ibb.co/2crCbW0/2.webp",
    price: 65,
    size: 40,
    brand: "Nike",
    shoeStatus: "Sin estrenar",
    description:
      "Me las regalaron por cumpleaños pero no son mi estilo, no he llegado a…",
    isBoxIncluded: true,
    isChangesAccepted: false,
    isFavourite: false,
    name: "Bárbara Gimeno",
    phone: "617863387",
    location: "El Vendrell",
  },
];

export default shoesMock;
