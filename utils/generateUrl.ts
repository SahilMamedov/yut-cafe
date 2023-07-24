export const generateUrl = (
  pathName: string,
  categoryId: string,
  page: number,
  argProductId?: string
) => {
  const productId = argProductId ? argProductId : null;
  return {
    pathname: pathName,
    query: { categoryId, page, productId },
  };
};
