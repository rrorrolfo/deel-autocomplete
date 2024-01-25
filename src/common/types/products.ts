export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
  };
}

export interface ProductWithHiglightTitle extends ProductType {
  highlightTitle: JSX.Element;
}
