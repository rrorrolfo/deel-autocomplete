import { ProductType } from "../../common/types/products";

export const fetchProductsByName = (name: string): Promise<ProductType[]> =>
  fetch(`https://api.escuelajs.co/api/v1/products/?title=${name}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network error");
      }
      return res.json();
    })
    .then((data) => data)
    .catch((error) => {
      if (error instanceof Error) {
        console.error(
          "There was an error while fetching products by name:",
          error.message
        );
      }
      throw error;
    });
