import { useEffect, useState } from "react";
import { ProductType } from "../common/types/products";
import { fetchProductsByName } from "../api/requests";

export const useFetchProductsByName = (
  value: string
): { products: ProductType[] } => {
  const [products, setproducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const debounceFetchProducts = setTimeout(async () => {
      const products: ProductType[] = await fetchProductsByName(value);
      setproducts(products);
    }, 300);

    return () => clearTimeout(debounceFetchProducts);
  }, [value]);

  return { products };
};
