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
  productName: string
): { products: ProductType[]; errorFetching: boolean; isLoading: boolean } => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [errorFetching, toggleErrorFetching] = useState(false);
  const [isLoading, toggleIsLoading] = useState(false);

  useEffect(() => {
    if (productName === "") {
      setProducts([]);
      toggleErrorFetching(false);
      return;
    }

    const fetchProducts = async () => {
      toggleIsLoading(true);

      try {
        const products: ProductType[] = await fetchProductsByName(productName);
        setProducts(products);
        toggleErrorFetching(false);
      } catch (e) {
        toggleErrorFetching(true);
      }

      toggleIsLoading(false);
    };

    fetchProducts();
  }, [productName]);

  return { products, errorFetching, isLoading };
};
