import { useEffect, useState } from "react";
import { ProductType } from "../common/types/products";
import { fetchProductsByName } from "../api/requests";

type UseFetchReturnType = { products: ProductType[]; errorFetching: boolean };

export const useFetchProductsByName = (value: string): UseFetchReturnType => {
  const [products, setproducts] = useState<ProductType[]>([]);
  const [errorFetching, toggleErrorFetching] = useState(false);

  useEffect(() => {
    const debounceFetchProducts = setTimeout(async () => {
      try {
        const products: ProductType[] = await fetchProductsByName(value);
        setproducts(products);
        toggleErrorFetching(false);
      } catch (e) {
        toggleErrorFetching(true);
      }
    }, 300);

    return () => clearTimeout(debounceFetchProducts);
  }, [value]);

  return { products, errorFetching };
};
