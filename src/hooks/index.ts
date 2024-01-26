import { useEffect, useState } from "react";
import { ProductType } from "../common/types/products";
import { fetchProductsByName } from "../api/requests";

export const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const debouncedID = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(debouncedID);
  }, [value, delay]);

  return debouncedValue;
};

export const useFetchProductsByName = (
  value: string
): { products: ProductType[]; errorFetching: boolean } => {
  const [products, setproducts] = useState<ProductType[]>([]);
  const [errorFetching, toggleErrorFetching] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: ProductType[] = await fetchProductsByName(value);
        setproducts(products);
        toggleErrorFetching(false);
      } catch (e) {
        toggleErrorFetching(true);
      }
    };

    fetchProducts();
  }, [value]);

  return { products, errorFetching };
};
