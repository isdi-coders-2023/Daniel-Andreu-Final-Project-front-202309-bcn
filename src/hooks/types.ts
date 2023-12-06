import { ShoesStateStructure } from "../store/features/shoes/types";

export interface UseShoesApiStructure {
  getShoes: () => Promise<ShoesStateStructure>;
  deleteShoe: (shoeId: string) => Promise<void>;
}
