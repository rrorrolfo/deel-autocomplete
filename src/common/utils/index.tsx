import { ProductType } from "../types/products";

export const getHighlightedTitle = (
  product: ProductType,
  highlight: string
) => {
  const { title, id } = product;
  const suggestionParts = title.split(new RegExp(`(${highlight})`, "i"));
  return (
    <>
      {highlight.length
        ? suggestionParts.map((part) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
              <b key={id}>{part}</b>
            ) : (
              part
            )
          )
        : title}
    </>
  );
};
