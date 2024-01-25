import { ProductType } from "../types/products";

export const getHighlightedTitle = (
  product: ProductType,
  highlight: string
) => {
  const { title, id } = product;
  const suggestionParts = title.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <>
      {suggestionParts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <b key={`${id}-${i + 1}`}>{part}</b>
        ) : (
          part
        )
      )}
    </>
  );
};
