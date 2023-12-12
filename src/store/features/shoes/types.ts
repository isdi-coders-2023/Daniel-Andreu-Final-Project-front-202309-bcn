export interface ShoeDataStructure {
  title: string;
  image: string;
  price: number;
  size: number;
  brand: string;
  shoeStatus: string;
  description: string;
  isBoxIncluded: boolean;
  isChangesAccepted: boolean;
  isFavourite: boolean;
  name: string;
  phone: string;
  location: string;
}

export interface ShoeStructure extends ShoeDataStructure {
  _id: string;
}

export interface ShoesStateStructure {
  shoes: ShoeStructure[];
  shoe?: ShoeStructure;
}
